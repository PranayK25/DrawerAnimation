import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {INavigationItem} from '../interfaces/NavigationInterface';
import {SCREEN_NAME} from '../utils/enums';
import {DrawerItems} from './navigatorConstants';
import styles from './styles';
import {useScreenContext} from '../context/ScreenContext';

const DrawerNavigator = ({
  progress,
  onToggleMenu,
}: {
  progress: SharedValue<number>;
  onToggleMenu: () => void;
}) => {
  const navigation = useNavigation();
  const {selectedScreen, setSelectedScreen} = useScreenContext();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: interpolate(progress.value, [0, 1], [0, 60])}],
      borderTopLeftRadius: interpolate(progress.value, [0, 1], [0, 40]),
    };
  });

  const onPressItem = (key: SCREEN_NAME) => () => {
    navigation.navigate(key);
    setSelectedScreen(key);
    setTimeout(() => {
      onToggleMenu();
    }, 200);
  };

  const renderItem = ({item}: {item: INavigationItem}) => {
    const {name, key} = item;

    const isSelected = selectedScreen === key;

    return (
      <TouchableOpacity
        style={
          isSelected ? styles.selectedDrawerItem : styles.unselectedDrawerItem
        }
        onPress={onPressItem(key)}>
        <Text
          style={
            isSelected
              ? styles.selectedDrawerItemText
              : styles.unselectedDrawerItemText
          }>
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Animated.View style={[styles.drawerContainer, animatedStyle]}>
      <View style={styles.drawerContent}>
        <Text style={styles.drawerTitle}>Beka</Text>
        <FlatList
          data={DrawerItems}
          style={styles.drawerList}
          renderItem={renderItem}
        />
        <View style={styles.divider} />
        <TouchableOpacity style={styles.signOut}>
          <Text style={styles.unselectedDrawerItemText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default DrawerNavigator;
