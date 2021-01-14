import React from 'react';
import {Text, View} from 'react-native';
import CityDetailScreen from '../Components/CityDetailScreen';

const karachiScreen = () => {
  return (
    <View>
      <CityDetailScreen
        image={require('../assets/karachi.jpg')}
        name="Karachi"
      />
    </View>
  );
};

export default karachiScreen;
