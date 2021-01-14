import React from 'react';
import {Image, StyleSheet, View, FlatList, Text} from 'react-native';

const ParkDetailCard = ({name, image, location}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.text}>{name}</Text>
        <Text style={{marginLeft: 10, color: 'gray', fontSize: 11}}>
          {location}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: '23%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 6,
    margin: 5,
    marginTop: 8,
    elevation: 2,
    flexDirection: 'row',
  },
  image: {
    width: '40%',
    height: '100%',
    borderRadius: 6,
    flexDirection: 'row',
  },
  text: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontWeight: '200',
    fontSize: 20,
  },
});
export default ParkDetailCard;
