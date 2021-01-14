import React from 'react';
import {Text, View} from 'react-native';
import CityDetailScreen from '../Components/CityDetailScreen';

const lahoreScreen = () => {
  return (
    <View>
      <CityDetailScreen image={require('../assets/lahore.jpg')} name="Lahore" />
    </View>
  );
};

export default lahoreScreen;
