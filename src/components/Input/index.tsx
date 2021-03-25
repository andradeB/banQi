import React from 'react';
import styled from 'styled-components/native';
import {border, BorderProps, padding, PaddingProps} from 'styled-system';
import {TextInputProps} from 'react-native';

export const InputBase = styled.TextInput<BorderProps & PaddingProps>`
  font-family: 'Montserrat-Medium';
  font-size: 16px;
  ${border}
  ${padding}
`;

type InputProps = TextInputProps & BorderProps & PaddingProps;

export const Input: React.FC<InputProps> = (props) => {
  return (
    <InputBase
      {...props}
      borderBottomWidth={1}
      borderColor={'pink'}
      placeholderTextColor={'grey'}
      py={1}
    />
  );
};
