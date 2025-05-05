import 'dayjs/locale/ko';

import dayjs from 'dayjs';

export const format = (date: string, format: string = 'YYYY-MM-DD') => {
  return dayjs(date).format(format);
};

export const isAfter = (date: string, compareDate: string) => {
  return dayjs(date).isAfter(dayjs(compareDate));
};

export function isBefore(date: string, compareDate: string) {
  return dayjs(date).isBefore(compareDate);
}

export const getYear = (date: string) => {
  return dayjs(date).year();
};
