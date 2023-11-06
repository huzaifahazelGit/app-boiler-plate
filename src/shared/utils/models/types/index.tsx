import {NavigationProp, RouteProp} from '@react-navigation/core';
export interface GenericNavigation {
  navigation?: NavigationProp<any>;
  route?: RouteProp<any, any>;
}

