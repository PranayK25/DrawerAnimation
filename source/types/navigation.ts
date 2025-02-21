import {SCREEN_NAME} from '../utils/enums';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      [SCREEN_NAME.HOME]: undefined;
      [SCREEN_NAME.CART]: undefined;
      [SCREEN_NAME.FAVOURITES]: undefined;
      [SCREEN_NAME.ORDERS]: undefined;
      [SCREEN_NAME.CONTACT]: undefined;
      [SCREEN_NAME.HOME_TAB_NAVIGATOR]: undefined;
    }
  }
}

export {};
