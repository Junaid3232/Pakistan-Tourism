import React from 'react';
import {Image, StyleSheet, View, FlatList, Text} from 'react-native';
import ParkDetailCard from '../../../Components/parkDetailCard';
const IslamabdParkScreen = () => {
  return (
    <View style={{backgroundColor: '#EDF0F0'}}>
      <ParkDetailCard
        image={require('../../../assets/parks/fatima.jpg')}
        name="Fatima Jinnah Park"
        location="F-9, Islamabad, Islamabad Capital Territory"
      />
      <ParkDetailCard
        image={require('../../../assets/parks/lake.jpg')}
        name="Lake View Park"
        location="Murree Rd, Islamabad Capital Territory 4951
        "
      />
      <ParkDetailCard
        image={require('../../../assets/parks/shakar.jpg')}
        name="Shakar Parian Park"
        location="Expressway, Islamabad Capital Territory"
      />
    </View>
  );
};

export default IslamabdParkScreen;
