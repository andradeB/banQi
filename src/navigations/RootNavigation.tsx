import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import {RootNavigationParams} from 'models/navigations';
import {TransactionModalScreen} from 'screens/ModalsScreens';

const App = createStackNavigator<RootNavigationParams>();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <App.Navigator mode={'modal'} headerMode={'none'}>
        <App.Screen name={'TabNavigation'} component={TabNavigation} />
        <App.Screen
          name={'TransactionModalScreen'}
          component={TransactionModalScreen}
        />
      </App.Navigator>
    </NavigationContainer>
  );
}
