import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import CityDetailScreen from '../Components/CityDetailScreen';

const islamabadScreen = ({navigation}) => {
  return (
    <View>
      <CityDetailScreen
        image={require('../assets/islamabad.jpg')}
        name="Islamabad"
        navigation={navigation}
      />
    </View>
  );
};
export default islamabadScreen;
