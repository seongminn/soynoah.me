import {
  ComputedFields,
  defineDocumentType,
  FieldDefs,
  makeSource,
} from 'contentlayer/source-files';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

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
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutoLinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor'],
            ariaLabel: 'anchor',
          },
        },
        [
          rehypePrettyCode,
          {
            highlightStyle: 'github',
          },
        ],
      ],
    ],
  },
});
