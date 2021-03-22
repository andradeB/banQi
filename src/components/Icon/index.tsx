import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import {TextProps} from 'react-native';
import React from 'react';
import config from './selection.json';
import styled from 'styled-components/native';
import {color} from 'styled-system';

export type IconName =
  | 'alert'
  | 'arrow_down'
  | 'arrow_up'
  | 'cards'
  | 'eye_closed'
  | 'eye'
  | 'home'
  | 'market'
  | 'money'
  | 'pix'
  | 'scanner'
  | 'ticket';

type IconProps = TextProps & {
  name: IconName;
  color?: string;
  size?: number;
};

const IconBase = createIconSetFromIcoMoon(config, 'icomoon');
const StyledIcon = styled(IconBase)`
  ${color}
`;

export const Icon: React.FC<IconProps> = (props) => {
  return <StyledIcon {...props} />;
};
