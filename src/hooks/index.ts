import * as format from './format';

const hooksOptions = {
  format,
};

export const appHooks = (option: keyof typeof hooksOptions) =>
  hooksOptions[option];
