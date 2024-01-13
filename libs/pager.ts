import dayjs from 'dayjs';

export function compareAsc(a: Date, b: Date) {
  return dayjs(a).isBefore(b) ? -1 : 1;
}
