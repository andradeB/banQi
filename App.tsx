import React from 'react';
import {View} from 'react-native';
import {} from 'react-native-vector-icons';
import {ThemeProvider} from 'styled-components/native';
import {AppTheme} from './src/theme';
import {Icon} from 'components/Icon';

const AppProvider: React.FC = ({children}) => {
  return <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>;
};

const App: () => React.ReactNode = () => {
  return (
    <AppProvider>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="alert" />
      </View>
    </AppProvider>
  );
};

export default App;
