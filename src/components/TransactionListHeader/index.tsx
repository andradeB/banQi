import React from 'react';
import {ListHeader} from '../ListHeader';
import {Container} from '../Container';
import {Caption} from '../Typography';
import {useBottomSheet} from 'hooks';

export const TransactionListHeader: React.FC = ({children}) => {
  const {show, hide} = useBottomSheet('datePicker');

  return (
    <Container>
      {children}
      <ListHeader
        label="Históricos de transações"
        renderRightComponent={
          <Container flexDirection={'row'}>
            <Caption color="black">10/01/0000</Caption>
            <Container px={1}>
              <Caption color="black">-</Caption>
            </Container>
            <Caption color="black">10/01/0000</Caption>
          </Container>
        }
      />
    </Container>
  );
};
