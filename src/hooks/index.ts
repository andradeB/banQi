import * as format from './format';
export * from './useAppSelector';
export * from './useNavigation';
export * from './useBottomSheet';

const hooksOptions = {
  format,
};

export const useAppHooks = (option: keyof typeof hooksOptions) =>
  hooksOptions[option];
