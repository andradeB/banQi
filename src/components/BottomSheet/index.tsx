import React, {useState} from 'react';
import {BottomSheetContext, BottomSheetProps} from './BottomSheet';
import {DatePicker} from 'components/DatePicker';

const initialState = {
  visible: false,
};

export const BottomSheetsProvider: React.FC = ({children}) => {
  const [modalState, setModalState] = useState<BottomSheetProps>({
    datePicker: initialState,
  });

  const setData = (modal: keyof BottomSheetProps, data: any) => {
    const state: BottomSheetProps = {...modalState};

    state[modal] = {
      ...state[modal],
      ...data,
    };

    setModalState(state);
  };

  const setVisivility = (
    modalName: keyof BottomSheetProps,
    visible: boolean,
  ) => {
    const newDataPickerState: typeof modalState.datePicker = {
      ...modalState[modalName],
      visible,
    };

    setData(modalName, newDataPickerState);
  };

  const show = (modalName: keyof BottomSheetProps) => {
    setVisivility(modalName, true);
  };

  const hide = (modalName: keyof BottomSheetProps) => {
    setVisivility(modalName, false);
  };

  return (
    <BottomSheetContext.Provider
      value={{
        ...modalState,
        show,
        hide,
      }}>
      {children}
      <DatePicker
        onHide={() => {
          const newDataPickerState: typeof modalState.datePicker = {
            ...modalState.datePicker,
            visible: false,
          };

          setData('datePicker', newDataPickerState);
        }}
        onChangeRange={({end, start}) => {
          const newDataPickerState: typeof modalState.datePicker = {
            visible: false,
            value: {
              start,
              end,
            },
          };

          setData('datePicker', newDataPickerState);
        }}
      />
    </BottomSheetContext.Provider>
  );
};
