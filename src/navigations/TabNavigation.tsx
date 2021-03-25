import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {TabNavigationParams} from 'models/navigations';
import {Icon} from '../components/Icon';
import {TabText} from '../components/Typography';
import {View} from 'react-native';

const Tab = createBottomTabNavigator<TabNavigationParams>();

const TitleName = new Map<keyof TabNavigationParams, string>([
  ['HomeScreen', 'Home'],
  ['MarketScreens', 'Compras'],
  ['PayScreen', 'Pagar'],
  ['CardScreen', 'Cartões'],
  ['TicketScreen', 'Carnês'],
]);

const IconName = new Map<keyof TabNavigationParams, string>([
  ['HomeScreen', 'home'],
  ['MarketScreens', 'market'],
  ['PayScreen', 'scanner'],
  ['CardScreen', 'cards'],
  ['TicketScreen', 'ticket'],
]);

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: ({focused}) => (
          <TabText color={focused ? 'pink' : 'black'}>
            {TitleName.get(route.name)}
          </TabText>
        ),
        tabBarIcon: ({focused}) => {
          return (
            <Icon
              name={IconName.get(route.name)}
              size={20}
              color={focused ? 'pink' : 'black'}
            />
          );
        },
      })}>
      <Tab.Screen name={'HomeScreen'} component={HomeScreen} />
      <Tab.Screen name={'MarketScreens'} component={View} />
      <Tab.Screen name={'PayScreen'} component={View} />
      <Tab.Screen name={'CardScreen'} component={View} />
      <Tab.Screen name={'TicketScreen'} component={View} />
    </Tab.Navigator>
  );
}
