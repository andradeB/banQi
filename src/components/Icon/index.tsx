import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import {TextProps} from 'react-native';
import React from 'react';
import config from './selection.json';

type IconName =
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
  size?: string;
};

const IconBase = createIconSetFromIcoMoon(config, 'icomoon');

export const Icon: React.FC<IconProps> = (props) => <IconBase {...props} />;
