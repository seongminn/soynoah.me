import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';

// ::: 으로 시작하고 ::: 으로 끝나는 블록을 찾는 정규식
const BLOCK_REGEX = /^:::\s*([\s\S]*?)\s*:::$/;

export default function remarkPs() {
  return (tree: Root) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (!parent || index === undefined) return;

      // 노드의 전체 텍스트 추출
      const text = node.children
        .filter((c): c is { type: 'text'; value: string } => c.type === 'text')
        .map((c) => c.value)
        .join('');

      const match = text.match(BLOCK_REGEX);
      if (!match) return;

      const content = match[1].trim();

      // 노드를 MDX 컴포넌트로 교체
      (parent.children as any)[index] = {
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
    });
  };
}
