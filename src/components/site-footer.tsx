import * as time from '~/libs/time';

export const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="container mx-auto my-14 flex max-w-content items-center justify-between bg-page py-0!">
      <span className="text-gray-500 text-sm">soynoah © {currentYear}</span>
    </footer>
  );
};

const getCurrentYear = () => {
  const date = new Date();

  return time.getYear(date.toString());
};
