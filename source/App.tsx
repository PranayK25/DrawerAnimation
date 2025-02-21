import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import '../gesture-handler';
import './types/navigation';
import Navigator from './navigation/Navigator';
import {ScreenContextProvider} from './context/ScreenContext';

const App = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScreenContextProvider>
        <Navigator />
      </ScreenContextProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
