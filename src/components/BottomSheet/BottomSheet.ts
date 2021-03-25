import {createContext} from 'react';

export class BottomSheetModalsData<T> {
  visible: boolean = false;
  value?: T;
}

export type BottomSheetProps = {
  datePicker: BottomSheetModalsData<{start?: string; end?: string}>;
};

export type BottomSheetMethods = {
  show: (data: keyof BottomSheetProps) => void;
  hide: (data: keyof BottomSheetProps) => void;
};

export const BottomSheetContext = createContext<
  (BottomSheetProps & BottomSheetMethods) | undefined
>(undefined);
