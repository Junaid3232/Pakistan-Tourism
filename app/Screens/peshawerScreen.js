import React from 'react';
import {Text, View} from 'react-native';
import CityDetailScreen from '../Components/CityDetailScreen';

const peshawerScreen = () => {
  return (
    <View>
      <CityDetailScreen
        image={require('../assets/peshawer.jpg')}
        name="Peshawer"
      />
    </View>
  );
};

export default peshawerScreen;
