import React from 'react';
import {Container} from 'components/Container';
import {Body, Caption} from '../Typography';
import {Icon} from '../Icon';

type ListItemProps = {
  title: string;
  subtitle: string;
  value: string;
};

export const ListItem: React.FC<ListItemProps> = ({value, subtitle, title}) => {
  return (
    <Container
      px={2}
      flexDirection={'row'}
      height={64}
      justifyContent={'center'}>
      <Container justifyContent={'center'}>
        <Icon name={'arrow_down'} size={36} />
      </Container>
      <Container pl={2} flex={1} justifyContent={'center'}>
        <Container flexDirection={'row'} justifyContent={'space-between'}>
          <Body color="black">{title}</Body>
          <Body color="green">{value}</Body>
        </Container>
        <Caption color="green">{subtitle}</Caption>
      </Container>
    </Container>
  );
};
