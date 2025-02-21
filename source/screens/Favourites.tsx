import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from '../utils/dimensions';

const Favourites = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favourites</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: scale(14),
    marginLeft: scale(80),
  },

  headerText: {
    fontSize: 30,
    color: '#888888',
  },
});

export default Favourites;
