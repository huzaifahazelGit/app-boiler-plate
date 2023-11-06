import {NavigationProp, RouteProp} from '@react-navigation/core';
// import { Source } from "react-native-fast-image";
export interface GenericNavigation {
  navigation?: NavigationProp<any>;
  route?: RouteProp<any, any>;
}

export interface IntroSlide {
  key?: number;
  title?: string;
  text?: string;
  color?: string;
  private_key?: string | undefined;
  // image: number | Source;
}
