import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {AppTheme} from './src/theme';
import 'react-native-gesture-handler';
import RootNavigation from 'navigations/RootNavigation';
import {Provider} from 'react-redux';
import createStore from 'store';
import {BottomSheetsProvider} from './src/components/BottomSheet';

const {store} = createStore();

const AppProviders: React.FC = ({children}) => {
  return (
    <ThemeProvider theme={AppTheme}>
      <Provider store={store}>
        <BottomSheetsProvider>{children}</BottomSheetsProvider>
      </Provider>
    </ThemeProvider>
  );
};

const App: () => React.ReactNode = () => {
  return (
    <AppProviders>
      <RootNavigation />
    </AppProviders>
  );
};

export default App;
