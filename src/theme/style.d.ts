import 'styled-components/native';
import {IAppTheme} from './index';

declare module 'styled-components/native' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends IAppTheme {}
}
