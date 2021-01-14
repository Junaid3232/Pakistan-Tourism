import React from 'react';
import {Text, View} from 'react-native';
import CityDetailScreen from '../Components/CityDetailScreen';

const quettaScreen = () => {
  return (
    <View>
      <CityDetailScreen
        image={require('../assets/quetta.jpeg')}
        name="Quetta"
      />
    </View>
  );
};

export default quettaScreen;
