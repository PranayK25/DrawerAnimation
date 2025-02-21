import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const ScreenLayoutWrapper = ({
  children,
  progress,
}: {
  children: ReactNode;
  progress: SharedValue<number>;
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: interpolate(progress.value, [0, 1], [0, 260])},
        {translateY: interpolate(progress.value, [0, 1], [0, 70])},
        {rotateZ: `${interpolate(progress.value, [0, 1], [0, -10])}deg`},
      ],
      borderTopLeftRadius: interpolate(progress.value, [0, 1], [0, 40]),
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ScreenLayoutWrapper;
