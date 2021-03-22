import React from 'react';
import {CardContainerContainer} from './style';
import {ContainerProps} from '../Container';

export const CardContainer: React.FC<ContainerProps> = (props) => {
  return (
    <CardContainerContainer bg={'white'} borderRadius={1} p={1} {...props} />
  );
};
