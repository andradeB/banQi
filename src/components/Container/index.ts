import styled from 'styled-components/native';
import {
  space,
  SpaceProps,
  borderRadius,
  BorderRadiusProps,
  ColorProps,
  color,
  BackgroundProps,
  background,
  AlignItemsProps,
  alignItems,
  PaddingProps,
  padding,
  FlexboxProps,
  flexbox,
  LayoutProps,
  layout,
  MarginProps,
  margin,
} from 'styled-system';

export type ContainerProps = SpaceProps &
  ColorProps &
  BackgroundProps &
  AlignItemsProps &
  FlexboxProps &
  MarginProps &
  LayoutProps &
  BorderRadiusProps &
  PaddingProps;

export const Container = styled.View<ContainerProps>`
  ${space};
  ${background};
  ${color};
  ${borderRadius};
  ${alignItems};
  ${padding};
  ${layout};
  ${margin};
  ${flexbox}
`;
