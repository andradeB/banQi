import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {AppTheme} from './src/theme';
import {Card} from 'components/Card';
import {Container} from 'components/Container';
import {CardLarge} from './src/components/CardLarge';

const AppProvider: React.FC = ({children}) => {
  return <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>;
};

const App: () => React.ReactNode = () => {
  return (
    <AppProvider>
      <Container pt={90} bg={'grey'} flex={1}>
        <Card
          icon={'money'}
          title={'Empréstimo pessoal'}
          iconColor={'blue'}
          subtitle={'Você tem R$ 500 pré-aprovados!'}
        />
        <CardLarge icon={'money'} title={'pix'} iconColor={'blue'} />
      </Container>
    </AppProvider>
  );
};

export default App;
