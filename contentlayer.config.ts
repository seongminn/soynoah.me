import {
  ComputedFields,
  defineDocumentType,
  FieldDefs,
  makeSource,
} from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

const fields: FieldDefs = {
  title: { type: 'string', required: true },
  description: { type: 'string', required: true },
  image: { type: 'string' },
  date: { type: 'date', required: true },
  tags: { type: 'list', of: { type: 'string' } },
};

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: doc => doc.body.raw },
  slug: {
    type: 'string',
    resolve: doc => doc._raw.flattenedPath,
  },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields,
  computedFields,
}));

export default makeSource({
  contentDirPath: 'contents',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [
      rehypeSlug,
      () => tree => {
        visit(tree, node => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children;
            if (codeEl.tagName !== 'code') {
              return;
            }

            if (codeEl.data?.meta) {
              // Extract event from meta and pass it down the tree.
              const regex = /event="([^"]*)"/;
              const match = codeEl.data?.meta.match(regex);
              if (match) {
                node.__event__ = match ? match[1] : null;
                codeEl.data.meta = codeEl.data.meta.replace(regex, '');
              }
            }

            node.__rawstring__ = codeEl.children?.[0].value;
          }
        });
      },
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor'],
            ariaLabel: 'anchor',
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener noreferrer'],
          class: 'external-link',
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: 'css-variables',
        },
      ],
      () => tree => {
        visit(tree, node => {
          if (node?.type === 'element' && node?.tagName === 'div') {
            if (!('data-rehype-pretty-code-fragment' in node.properties)) {
              return;
            }

            const preElement = node.children.at(-1);
            if (preElement.tagName !== 'pre') {
              return;
            }

            preElement.properties['__withMeta__'] =
              node.children.at(0).tagName === 'div';
            preElement.properties['__rawstring__'] = node.__rawstring__;
          }
        });
      },
    ],
  },
});
