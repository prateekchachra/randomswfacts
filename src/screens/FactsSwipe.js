import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

import RNShake from 'react-native-shake';
import debounce from 'lodash/debounce';
import {gql, useQuery} from '@apollo/client';

const PLANETS_QUERY = gql`
  query GetPlanets {
    allPlanets {
      planets {
        name
        filmConnection {
          edges {
            node {
              episodeID
            }
          }
        }
      }
    }
  }
`;

export default function FactsSwipe() {
  const {data, loading} = useQuery(PLANETS_QUERY);
  const [currentIndex, setCurrentIndex] = useState(0);

  const incrementIndex = useCallback(() => {
    if (data) {
      setCurrentIndex(index => (index === data.length - 1 ? 0 : index + 1));
    }
  }, [data]);

  useEffect(() => {
    const listener = debounce(() => {
      incrementIndex();
    }, 500);
    RNShake.addListener(listener);
  }, [data]);

  const getElement = () => {
    if (loading) {
      return <ActivityIndicator />;
    } else {
      if (data && data.allPlanets) {
        const {edges} = data.allPlanets.planets[currentIndex].filmConnection;
        return (
          <View>
            <Text style={styles.planetName}>
              {data.allPlanets.planets[currentIndex].name}
            </Text>
            <Text style={styles.planetEpisodes}>
              Episodes{' '}
              {edges.map(
                (item, index) =>
                  `${item.node.episodeID}${
                    index === edges.length - 1 ? '' : ', '
                  }`,
              )}
            </Text>
          </View>
        );
      } else return <Text>Error in Fetching Data</Text>;
    }
  };

  return <View style={styles.container}>{getElement()}</View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  planetName: {
    fontSize: 18,
    fontWeight: '600',
  },
  planetEpisodes: {
    fontSize: 14,
    fontWeight: '400',
  },
});
