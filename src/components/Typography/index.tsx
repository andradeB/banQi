import styled from 'styled-components/native';
import React from 'react';
import {variant, color, ColorProps} from 'styled-system';

type TextType = 'title' | 'body' | 'caption' | 'tab';

type BaseTextProps = ColorProps & {
  type: TextType;
  weight: 'bold' | 'normal';
};

const BaseText = styled.Text<BaseTextProps>`
  ${color};
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

export const Title: React.FC<ColorProps> = (props) => (
  <BaseText {...props} type="title" weight="bold" />
);

export const Body: React.FC<ColorProps> = (props) => (
  <BaseText {...props} type="body" weight="normal" />
);

export const BodyBold: React.FC<ColorProps> = (props) => (
  <BaseText {...props} type="body" weight="bold" />
);

export const Caption: React.FC<ColorProps> = (props) => (
  <BaseText {...props} type="caption" weight="normal" />
);

export const CaptionBold: React.FC<ColorProps> = (props) => (
  <BaseText {...props} type="caption" weight="bold" />
);

export const TabText: React.FC<ColorProps> = (props) => (
  <BaseText {...props} type="tab" weight="normal" />
);
