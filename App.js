/**
 * Random SW Facts
 *
 * An application made to get random facts for different planets
 * https://github.com/prateekchachra/randomswfacts
 *
 * @author Prateek Chachra
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import FactsSwipe from './src/screens/FactsSwipe';
import {colors} from './src/constants/theme';

const getContainerStyle = isDarkMode => {
  return {
    backgroundColor: isDarkMode ? colors.DARK_THEME : colors.LIGHT_THEME,
  };
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const mainContainerStyle = getContainerStyle(isDarkMode);

  const barStyle = isDarkMode ? 'light-content' : 'dark-content';

  return (
    <SafeAreaView style={mainContainerStyle}>
      <StatusBar barStyle={barStyle} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={mainContainerStyle}>
        <FactsSwipe />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
