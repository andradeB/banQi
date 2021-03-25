import styled from 'styled-components/native';
import React from 'react';
import {
  variant,
  color,
  ColorProps,
  letterSpacing,
  LetterSpacingProps,
} from 'styled-system';

type TextType = 'title' | 'body' | 'caption' | 'tab';

type BaseTextProps = ColorProps &
  LetterSpacingProps & {
    type: TextType;
    weight: 'bold' | 'normal';
  };

const BaseText = styled.Text<BaseTextProps>`
  ${letterSpacing};
  color: ${({theme}) => theme.colors.black} ${color};
  ${variant({
    prop: 'type',
    variants: {
      title: {
        fontSize: 3,
      },
      body: {
        fontSize: 2,
      },
      caption: {
        fontSize: 1,
      },
      tab: {
        fontSize: 0,
      },
    },
  })};
  ${variant({
    prop: 'weight',
    variants: {
      bold: {
        fontFamily: 'Montserrat-Bold',
      },
      normal: {
        fontFamily: 'Montserrat-Medium',
      },
    },
  })}
`;

export const Title: React.FC<ColorProps & LetterSpacingProps> = (props) => (
  <BaseText {...props} type="title" weight="bold" />
);

export const TitleLight: React.FC<ColorProps & LetterSpacingProps> = (
  props,
) => <BaseText {...props} type="title" weight="normal" />;

export const Body: React.FC<ColorProps & LetterSpacingProps> = (props) => (
  <BaseText {...props} type="body" weight="normal" />
);

export const BodyBold: React.FC<ColorProps & LetterSpacingProps> = (props) => (
  <BaseText {...props} type="body" weight="bold" />
);

export const Caption: React.FC<ColorProps & LetterSpacingProps> = (props) => (
  <BaseText {...props} type="caption" weight="normal" />
);

export const CaptionBold: React.FC<ColorProps & LetterSpacingProps> = (
  props,
) => <BaseText {...props} type="caption" weight="bold" />;

export const TabText: React.FC<ColorProps & LetterSpacingProps> = (props) => (
  <BaseText {...props} type="tab" weight="normal" />
);
