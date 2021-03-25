import React from 'react';
import {Container} from 'components/Container';
import {Body, Title} from '../Typography';
import {Icon} from '../Icon';
import {TouchableOpacity} from 'react-native';

type BilsAmountProps = {
  amount: string;
};

export const BillsAmount: React.FC<BilsAmountProps> = ({amount}) => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Container
      pb={1}
      justifyContent={'space-between'}
      alignItems={'center'}
      height={64}>
      <Body color="black">Meu Saldo</Body>

      <Container flexDirection="row" alignItems={'center'}>
        <Title
          color="black"
          bg={visible ? 'transparent' : 'black'}
          opacity={visible ? 1 : 0.2}>
          {amount}
        </Title>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Container pl={1}>
            <Icon
              name={visible ? 'eye_closed' : 'eye'}
              color={'black'}
              size={20}
            />
          </Container>
        </TouchableOpacity>
      </Container>
    </Container>
  );
};
