import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {AppTheme} from './src/theme';
import {Container} from 'components/Container';
import {ListItem} from './src/components/ListItem';

const AppProvider: React.FC = ({children}) => {
  return <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>;
};

const App: () => React.ReactNode = () => {
  return (
    <AppProvider>
      <Container mt={90}></Container>
      <ListItem
        title={'Depósito na Casas Bahia'}
        subtitle={'Recebido em 15/03/2019'}
        value={'+ R$ 10,00'}
      />
    </AppProvider>
  );
};

export default App;
