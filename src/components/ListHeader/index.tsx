import React from 'react';
import {Container} from 'components/Container';
import {Body, Caption} from '../Typography';

type ListHeaderProps = {
  label: string;
  renderRightComponent: React.ReactNode;
};

export const ListHeader: React.FC<ListHeaderProps> = ({
  label,
  renderRightComponent,
}) => {
  return (
    <Container
      flexDirection={'row'}
      pb={1}
      px={2}
      justifyContent={'space-between'}
      alignItems={'flex-end'}
      height={64}>
      <Body color="black">{label}</Body>
      {renderRightComponent}
    </Container>
  );
};
