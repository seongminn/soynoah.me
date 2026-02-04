import type { Paragraph, Parent, Root } from 'mdast';
import { visit, SKIP } from 'unist-util-visit';

// ::: 으로 시작하고 ::: 으로 끝나는 블록을 찾는 정규식
const BLOCK_REGEX = /^:::\s*([\s\S]*?)\s*:::$/;

export default function remarkNote() {
  return (tree: Root) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (!parent || typeof index !== 'number') return;

      const text = getText(node);
      const match = text.match(BLOCK_REGEX);

      if (!match) return;

      const content = match[1].trim();

      parent.children[index] = {
        type: 'mdxJsxFlowElement',
        name: 'note',
        attributes: [],
        children: [
          {
            type: 'paragraph',
            children: [{ type: 'text', value: content }],
          },
        ],
      };

      return SKIP;
    });
  };
}

function getText(node: Paragraph): string {
  return node.children
    .filter((c): c is { type: 'text'; value: string } => c.type === 'text')
    .map((c) => c.value)
    .join('');
}

interface MdxJsxFlowElement extends Parent {
  type: 'mdxJsxFlowElement';
  name: string;
  attributes: [];
}

declare module 'mdast' {
  interface BlockContentMap {
    mdxJsxFlowElement: MdxJsxFlowElement;
  }
}
