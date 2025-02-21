import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Contact from '../screens/Contact';
import Home from '../screens/Home';
import {SCREEN_NAME} from '../utils/enums';
import RemixIcon from 'react-native-remix-icons';
import {scale} from '../utils/dimensions';

const HomeTabNavigator = () => {
  const RootTabs = createBottomTabNavigator();

  return (
    <RootTabs.Navigator
      screenOptions={{
        sceneStyle: {borderRadius: scale(40), backgroundColor: 'white'},
        headerShown: false,
      }}>
      <RootTabs.Screen
        options={{
          tabBarIcon: props => (
            <RemixIcon name="home-fill" {...props} size={scale(20)} />
          ),
        }}
        name={SCREEN_NAME.HOME}
        component={Home}
      />
      <RootTabs.Screen
        options={{
          tabBarIcon: props => (
            <RemixIcon name="contacts-fill" {...props} size={scale(20)} />
          ),
        }}
        name={SCREEN_NAME.CONTACT}
        component={Contact}
      />
    </RootTabs.Navigator>
  );
};

export default HomeTabNavigator;
