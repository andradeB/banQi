import React from 'react';

import {ScreenModalContainer} from 'components/ScreenModalContainer';
import {Body, BodyBold} from 'components/Typography';
import {Container} from 'components/Container';
import {useAppRoute} from 'hooks/useAppRoute';
import {CardContainer} from '../../../components/CardContainer';
import {useAppHooks} from 'hooks';
import {DatePicker} from '../../../components/DatePicker';
import {BottomSheet} from '../../../components/BaseBottomSheet';

export const TransactionModalScreen: React.FC = () => {
  const route = useAppRoute<'TransactionModalScreen'>();

  const format = useAppHooks('format');
  const {data: transaction} = route.params;

  return (
    <ScreenModalContainer>
      <CardContainer bg={'white'}>
        <Container>
          <BodyBold>Detalhes da transaçao</BodyBold>
        </Container>
        <Container mt={2}>
          <Container
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Body>Valor:</Body>
            <Body color={'dark_grey'}>{transaction.amount}</Body>
          </Container>
          <Container
            mt={1}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Body>Data:</Body>
            <Body color={'dark_grey'}>{format.date(transaction.date)}</Body>
          </Container>
        </Container>
        <Container
          mt={2}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Body>Descriçao:</Body>
          <Container mt={1}>
            <Body color={'dark_grey'}>{transaction.description}</Body>
          </Container>
        </Container>
      </CardContainer>
    </ScreenModalContainer>
  );
};
