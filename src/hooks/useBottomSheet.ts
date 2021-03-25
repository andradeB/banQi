import React from 'react';
import {
  BottomSheetContext,
  BottomSheetProps,
} from '../components/BottomSheet/BottomSheet';

export function useBottomSheet(modal: keyof BottomSheetProps) {
  const context = React.useContext(BottomSheetContext);

  return React.useMemo(() => {
    if (context) {
      return {
        value: context[modal].value,
        show: () => context.show(modal),
        hide: () => context.hide(modal),
      };
    }
    return {};
  }, [context]);
}
