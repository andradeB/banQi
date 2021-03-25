import {Theme} from 'styled-system';

export type ThemeColors =
  | 'black'
  | 'grey'
  | 'dark_grey'
  | 'white'
  | 'green'
  | 'blue'
  | 'pink';

export interface IAppTheme extends Theme {
  colors: Record<ThemeColors, string>;
  radii: number[];
  space: number[];
  fontSizes: number[];
  fontWeights: number[];
}

export const AppTheme: IAppTheme = {
  colors: {
    black: '#333333',
    grey: '#F8F8F8',
    dark_grey: '#808080',
    white: '#FFFFFF',
    green: '#14C46F',
    blue: '#00AEEF',
    pink: '#EC008C',
  },
  radii: [0, 4],
  space: [0, 12, 20],
  fontSizes: [11, 12, 14, 20],
  fontWeights: [500, 700],
};
