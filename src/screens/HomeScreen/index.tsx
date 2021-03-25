import React from 'react';
import {TransactionList} from 'components/TransactionList';
import {HomeScreenHeader} from './components/HomeScreenHeader';
import {ScreenContainer} from 'components/ScreenContainer';
import {Container} from 'components/Container';
import actions from 'store/balance/action';
import {useDispatch} from 'react-redux';
import {useAppSelector} from 'hooks/useAppSelector';

export const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const {data} = useAppSelector((state) => state.balanceReducer);

  React.useEffect(() => {
    dispatch(actions.getUserBalanceDataRequest());
  }, [dispatch]);

  return (
    <ScreenContainer>
      <Container flex={1} bg={'white'}>
        <TransactionList
          headerComponent={() => <HomeScreenHeader />}
          data={data?.transactions}
          keyExtractor={(item, i) => `home-screen-${i}${item.id}`}
        />
      </Container>
    </ScreenContainer>
  );
};
