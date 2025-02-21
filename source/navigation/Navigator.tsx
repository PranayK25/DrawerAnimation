import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {Easing, useSharedValue, withTiming} from 'react-native-reanimated';
import DrawerNavigator from './DrawerNavigator';
import StackNavigator from './StackNavigator';
import styles from './styles';

const animationConfig = {
  duration: 400,
  easing: Easing.ease,
};

const Navigator = () => {
  const progress = useSharedValue(0);

  const onToggleMenu = () => {
    progress.value = withTiming(progress.value === 0 ? 1 : 0, animationConfig);
  };

  const panGesture = Gesture.Pan()
    .onUpdate(event => {
      const {translationX} = event;

      if (progress.value === 0) {
        progress.value = Math.min(Math.max(translationX / 300, 0), 1);
      } else if (progress.value === 1) {
        progress.value = Math.min(Math.max(1 + translationX / 300, 0), 1);
      } else {
        progress.value = Math.min(
          Math.max(progress.value + translationX / 2000, 0),
          1,
        );
      }
    })
    .onEnd(() => {
      if (progress.value > 0.5) {
        progress.value = withTiming(1, animationConfig);
      } else {
        progress.value = withTiming(0, animationConfig);
      }
    });

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={panGesture}>
        <View style={styles.flex1}>
          <NavigationContainer>
            <DrawerNavigator progress={progress} onToggleMenu={onToggleMenu} />
            <StackNavigator progress={progress} onToggleMenu={onToggleMenu} />
          </NavigationContainer>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default Navigator;
