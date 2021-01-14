import React from 'react';
import {View, StyleSheet, Button, Text, Image} from 'react-native';
import Card from '../Components/homeCard';
const HomeScreen = ({navigation}) => {
  return (
    <View style={{height: '100%'}}>
      <Image
        style={{
          width: '100%',
          height: '35%',
          borderBottomRightRadius: 100,
          borderBottomLeftRadius: 100,
          overflow: 'hidden',
          opacity: 0.8,
        }}
        source={require('../assets/tour.jpg')}
      />
      <View style={{marginTop: -40}}>
        <Card name="Islamabad" Press={() => navigation.navigate('Islamabad')} />
        <Card name="Lahore" Press={() => navigation.navigate('Lahore')} />
        <Card name="Karachi" Press={() => navigation.navigate('Karachi')} />
        <Card name="Peshawer" Press={() => navigation.navigate('Peshawer')} />
        <Card name="Quetta" Press={() => navigation.navigate('Quetta')} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});

export default HomeScreen;
