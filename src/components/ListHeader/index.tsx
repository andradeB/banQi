import React from 'react';
import {Container} from 'components/Container';
import {Body} from '../Typography';

type ListHeaderProps = {
  label: string;
};

export const ListHeader: React.FC<ListHeaderProps> = ({label}) => {
  return (
    <Container
      pb={1}
      px={2}
      bg={'white'}
      justifyContent={'flex-end'}
      height={64}>
      <Body color="black">{label}</Body>
    </Container>
  );
};
