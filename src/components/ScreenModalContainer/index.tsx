import React from 'react';
import {Container} from 'components/Container';
import {ScreenContainer} from '../ScreenContainer';
import {TouchableOpacity} from 'react-native';
import {Caption} from '../Typography';
import {useAppNavigation} from 'hooks';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const ScreenModalContainer: React.FC = ({children}) => {
  const navigation = useAppNavigation();
  const {bottom} = useSafeAreaInsets();

  return (
    <ScreenContainer pb={bottom}>
      <Container flex={1}>
        <Container flex={1} m={2} justifyContent={'center'}>
          {children}
        </Container>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Container
            height={40}
            mt={2}
            px={2}
            alignItems={'center'}
            justifyContent={'center'}>
            <Caption color={'black'}>VOLTAR</Caption>
          </Container>
        </TouchableOpacity>
      </Container>
    </ScreenContainer>
  );
};
