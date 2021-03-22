import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {AppTheme} from './src/theme';
import {BillsAmount} from 'components/BillsAmount';
import {Container} from 'components/Container';

const AppProvider: React.FC = ({children}) => {
  return <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>;
};

const App: () => React.ReactNode = () => {
  return (
    <AppProvider>
      <Container mt={90}></Container>
      <BillsAmount amount={'R$ 34,87'} />
    </AppProvider>
  );
};

export default App;
