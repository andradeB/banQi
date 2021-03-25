import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TabNavigationParams} from '../models/navigations';

export function useAppNavigation<T extends keyof TabNavigationParams>() {
  return useNavigation<StackNavigationProp<TabNavigationParams, T>>();
}
