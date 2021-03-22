import React from 'react';
import {CardContainer} from '../CardContainer';
import {Container} from '../Container';
import {Icon, IconName} from '../Icon';
import {BodyBold, CaptionBold} from '../Typography';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

type CardProps = TouchableOpacityProps & {
  icon: IconName;
  iconColor?: string;
  title?: string;
  subtitle?: string;
};

export const Card: React.FC<CardProps> = ({
  icon,
  title,
  iconColor,
  subtitle,
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <CardContainer height={62} flexDirection={'row'} alignItems={'center'}>
        <Container>
          <Icon name={icon} color={iconColor} size={29} />
        </Container>
        <Container ml={1}>
          <Container>
            <BodyBold>{title}</BodyBold>
          </Container>
          <Container>
            <CaptionBold color={'dark_grey'}>{subtitle}</CaptionBold>
          </Container>
        </Container>
      </CardContainer>
    </TouchableOpacity>
  );
};
