import React, {useContext} from 'react';
import {BaseSheet} from '../BaseBottomSheet';
import {Body, TitleLight} from '../Typography';
import {Input} from '../Input';
import {Container} from '../Container';
import {Button} from '../Button';
import {BottomSheetProps, BottomSheetContext} from '../BottomSheet/BottomSheet';

type DatePickerProps = {
  onChangeRange: (data: {start?: string; end?: string}) => void;
  onHide: () => void;
};

export const DatePicker: React.FC<DatePickerProps> = ({
  onChangeRange,
  onHide,
}) => {
  const {datePicker} = useContext<BottomSheetProps>(BottomSheetContext);

  const [start, setStart] = React.useState(datePicker?.value?.start);
  const [end, setEnd] = React.useState(datePicker?.value?.end);

  const setData = () => {
    onChangeRange({end, start});
  };

  return (
    <BaseSheet onHide={onHide} visible={datePicker.visible} sheetHeight={250}>
      <Container flex={1} m={2}>
        <Container>
          <TitleLight>Selecione um intervalo de datas</TitleLight>
          <Container pt={2} flexDirection={'row'}>
            <Container flex={1} pr={2}>
              <Body>De</Body>
              <Input
                value={start}
                onChangeText={setStart}
                placeholder={'00/00/0000'}
              />
            </Container>
            <Container flex={1} pl={2}>
              <Body>Até</Body>
              <Input
                value={end}
                onChangeText={setEnd}
                placeholder={'00/00/0000'}
              />
            </Container>
          </Container>
        </Container>
        <Container flex={1} mt={2} pt={2}>
          <Button label={'Filtrar'} onPress={setData} />
        </Container>
      </Container>
    </BaseSheet>
  );
};
