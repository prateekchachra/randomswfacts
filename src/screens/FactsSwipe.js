import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import RNShake from 'react-native-shake';
import debounce from 'lodash/debounce';

export default function FactsSwipe() {
  useEffect(() => {
    const listener = debounce(() => {
      console.log('Shake event occured');
    }, 500);

    RNShake.addListener(listener);
    return () => {
      RNShake.removeListener();
    };
  }, []);

  return (
    <View>
      <Text>Planet Facts</Text>
    </View>
  );
}
