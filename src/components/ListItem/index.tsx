import React from 'react';
import {Container} from 'components/Container';
import {ThemeColors} from 'theme';
import {Body, Caption} from '../Typography';
import {Icon, IconName} from '../Icon';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

type ListItemStatus = 'default' | 'success' | 'error';

const colorStatusMap = new Map<ListItemStatus, ThemeColors>([
  ['default', 'dark_grey'],
  ['error', 'dark_grey'],
  ['success', 'green'],
]);

export type ListItemProps = TouchableOpacityProps & {
  title: string;
  subtitle?: string;
  icon?: IconName;
  value?: string;
  status?: ListItemStatus;
};

export const ListItem: React.FC<ListItemProps> = ({
  value,
  icon,
  status = 'default',
  subtitle,
  title,
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <Container
        px={2}
        flexDirection={'row'}
        height={64}
        justifyContent={'center'}>
        {icon && (
          <Container pr={2} justifyContent={'center'}>
            <Icon name={icon} size={36} />
          </Container>
        )}
        <Container flex={1} justifyContent={'center'}>
          <Container
            height={20}
            flexDirection={'row'}
            justifyContent={'space-between'}>
            <Body color="black">{title}</Body>
            {value && <Body color={colorStatusMap.get(status)}>{value}</Body>}
          </Container>
          {subtitle && (
            <Caption color={colorStatusMap.get(status)}>{subtitle}</Caption>
          )}
        </Container>
      </Container>
    </TouchableOpacity>
  );
};
