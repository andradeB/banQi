import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

export const date = (stringDate: string) => {
  return format(parseISO(stringDate), 'MM/dd/yyyy');
};

export const currency = (value: number) => {
  return value;
};
