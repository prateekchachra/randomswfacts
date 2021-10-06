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
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import FactsSwipe from './src/screens/FactsSwipe';
import {colors} from './src/constants/theme';

const getContainerStyle = isDarkMode => {
  return {
    backgroundColor: isDarkMode ? colors.DARK_THEME : colors.LIGHT_THEME,
    flex: 1,
  };
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const mainContainerStyle = getContainerStyle(isDarkMode);

  const barStyle = isDarkMode ? 'light-content' : 'dark-content';

  const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={mainContainerStyle}>
        <StatusBar barStyle={barStyle} />
        <FactsSwipe />
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;
