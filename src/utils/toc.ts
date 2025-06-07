export type Item = {
  title: string;
  url: string;
};

export type Items = Item & {
  items: Items[];
};

interface Content {
  content: string;
}

export default function getTableOfContents({ content }: Content) {
  return content
    .split('\n')
    .filter((line) => line.match(/(^#{1,3})\s/))
    .reduce<Items[]>((ac, heading) => {
      const nac = ac.concat();
      const removeMdx = heading
        .replace(/^##*\s/, '') // remove heading
        .replace(/[*,~]{2,}/g, '') // remove markdown
        .replace(/(?<=\])\((.*?)\)/g, '') // remove link
        .replace(/(?<!\S)((http)(s?):\/\/|www\.).+?(?=\s)/g, ''); // remove url

      const item: Item = {
        url: removeMdx
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣 -]/g, '') // remove special characters
          .replace(/\s/g, '-'), // replace space with dash
        title: removeMdx,
      };

      const isSubTitle = heading.split('#').length - 1 === 3;

      if (ac.length && isSubTitle) {
        nac.at(-1)?.items.push({ ...item, items: [] });
      } else {
        nac.push({ ...item, items: [] });
      }

      return nac;
    }, []);
}
