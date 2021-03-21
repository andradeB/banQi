import React from 'react';
import {View} from 'react-native';
import {Title} from 'components/Typography';
import {ThemeProvider} from 'styled-components/native';
import {AppTheme} from './src/theme';

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
        <Title>asd</Title>
      </View>
    </AppProvider>
  );
};

export default App;
