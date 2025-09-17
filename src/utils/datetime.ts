import dayjs from 'dayjs';

export const formatDateTime = (date: string, format = 'DD/MM/YYYY') =>
  dayjs(date).format(format);
