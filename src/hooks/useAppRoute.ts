import {RouteProp, useRoute} from '@react-navigation/native';
import {RootNavigationParams, TabNavigationParams} from '../models/navigations';

type ExcludedRouters = 'TabNavigation';
type RouterType = Omit<
  RootNavigationParams & TabNavigationParams,
  ExcludedRouters
>;

export function useAppRoute<T extends keyof RouterType>() {
  return useRoute<RouteProp<RouterType, T>>();
}
