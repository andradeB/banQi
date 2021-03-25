import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {BodyBold} from '../Typography';
import {Container} from '../Container';

type ButtonProps = TouchableOpacityProps & {
  label?: string;
};

export const Button: React.FC<ButtonProps> = ({label, ...props}) => (
  <TouchableOpacity {...props}>
    <Container
      bg={'pink'}
      alignItems={'center'}
      height={40}
      borderRadius={20}
      justifyContent={'center'}>
      <BodyBold letterSpacing={1} color={'white'}>
        {label?.toUpperCase()}
      </BodyBold>
    </Container>
  </TouchableOpacity>
);
