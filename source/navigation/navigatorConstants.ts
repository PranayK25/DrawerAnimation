import {INavigationItem} from '../interfaces/NavigationInterface';
import {SCREEN_NAME} from '../utils/enums';

export const DrawerItems = [
  {name: 'Start', key: SCREEN_NAME.HOME_TAB_NAVIGATOR},
  {name: 'Your Cart', key: SCREEN_NAME.CART},
  {name: 'Favorites', key: SCREEN_NAME.FAVOURITES},
  {name: 'Your Orders', key: SCREEN_NAME.ORDERS},
] as Array<INavigationItem>;
