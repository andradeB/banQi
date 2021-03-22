import React from 'react';
import {CardContainer} from '../CardContainer';
import {Container} from '../Container';
import {Icon, IconName} from '../Icon';
import {BodyBold} from '../Typography';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

type CardProps = TouchableOpacityProps & {
  icon: IconName;
  iconColor?: string;
  title?: string;
};

export const CardLarge: React.FC<CardProps> = ({
  icon,
  title,
  iconColor,
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <CardContainer height={104} width={120}>
        <Container justifyContent={'space-between'} flex={1}>
          <Icon name={icon} color={iconColor} size={36} />
          <BodyBold>{title}</BodyBold>
        </Container>
      </CardContainer>
    </TouchableOpacity>
  );
};
