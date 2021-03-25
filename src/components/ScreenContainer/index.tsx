import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Container, ContainerProps} from 'components/Container';

export const ScreenContainer: React.FC<ContainerProps> = ({
  children,
  ...props
}) => {
  const {top} = useSafeAreaInsets();
  return (
    <Container bg={'grey'} flex={1} pt={top} {...props}>
      {children}
    </Container>
  );
};
