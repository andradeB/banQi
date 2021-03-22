import {parseISO, format} from 'date-fns';

export const date = (stringDate: string) => {
  return format(parseISO('2019-02-11T14:00:00'), 'MM/dd/yyyy');
};
