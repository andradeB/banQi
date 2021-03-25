import React from 'react';
import {Container} from 'components/Container';
import {BillsAmount} from 'components/BillsAmount';
import {CardLarge} from 'components/CardLarge';
import {FlatList, ListRenderItem} from 'react-native';
import {Card} from 'components/Card';
import {LogoBanQi} from './LogoBanQiHeader';
import {Icon} from '../../../../components/Icon';

export const HomeScreenHeader: React.FC = () => {
  const data = [
    {
      title: 'Pix',
      icon: 'pix',
    },
    {
      title: 'Depositar',
      icon: 'arrow_up',
    },
    {
      title: 'Sacar',
      icon: 'arrow_down',
    },
  ];

  const renderItem: ListRenderItem<any> = ({item}) => (
    <Container>
      <CardLarge {...item} iconColor="pink" />
    </Container>
  );

  return (
    <Container bg={'grey'} pb={2}>
      <Container p={2} flexDirection={'row'} justifyContent={'space-between'}>
        <LogoBanQi />
        <Icon name={'alert'} size={24} />
      </Container>
      <BillsAmount amount={'R$ 30,50'} />
      <FlatList
        keyExtractor={(item, i) => `home-screen-header-${i}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          padding: 20,
        }}
        ItemSeparatorComponent={() => <Container px={2} />}
        data={data}
        renderItem={renderItem}
        horizontal
      />
      <Container pb={2} px={2}>
        <Card
          icon={'money'}
          iconColor={'blue'}
          title={'Empréstimo pessoal'}
          subtitle={'Você tem R$ 500 pré-aprovados!'}
        />
      </Container>
    </Container>
  );
};
