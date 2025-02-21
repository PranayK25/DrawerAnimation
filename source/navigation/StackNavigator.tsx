import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SharedValue} from 'react-native-reanimated';
import RemixIcon from 'react-native-remix-icons';
import Cart from '../screens/Cart';
import Favourites from '../screens/Favourites';
import Orders from '../screens/Orders';
import {scale} from '../utils/dimensions';
import {SCREEN_NAME} from '../utils/enums';
import HomeTabNavigator from './HomeTabNavigator';
import ScreenLayoutWrapper from './ScreenLayoutWrapper';
import styles from './styles';

const StackNavigator = ({
  progress,
  onToggleMenu,
}: {
  progress: SharedValue<number>;
  onToggleMenu: () => void;
}) => {
  const Stack = createNativeStackNavigator();

  const renderHeader = () => {
    return (
      <TouchableOpacity onPress={onToggleMenu} style={styles.header}>
        <RemixIcon name={'menu-line'} size={scale(32)} color={'#888888'} />
      </TouchableOpacity>
    );
  };

  return (
    <ScreenLayoutWrapper progress={progress}>
      <Stack.Navigator
        screenOptions={{
          animation: 'none',
          headerShown: true,
          headerTransparent: true,
          headerLeft: renderHeader,
          headerTitle: '',
          contentStyle: {
            borderTopLeftRadius: scale(40),
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen
          name={SCREEN_NAME.HOME_TAB_NAVIGATOR}
          component={HomeTabNavigator}
        />
        <Stack.Screen name={SCREEN_NAME.CART} component={Cart} />
        <Stack.Screen name={SCREEN_NAME.FAVOURITES} component={Favourites} />
        <Stack.Screen name={SCREEN_NAME.ORDERS} component={Orders} />
      </Stack.Navigator>
    </ScreenLayoutWrapper>
  );
};

export default StackNavigator;
