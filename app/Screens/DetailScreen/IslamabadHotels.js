import React from 'react';
import {Image, StyleSheet, View, FlatList, Text} from 'react-native';

const photo = [
  {pic: require('../../assets/hotels/marriott.jpg'), name: 'Marriott Hotel'},
  {pic: require('../../assets/hotels/regalia.jpg'), name: 'Regalia Hotel'},
  {pic: require('../../assets/hotels/serena.jpg'), name: 'Serena Hotel'},
  {
    pic: require('../../assets/hotels/magnolia.jpg'),
    name: 'Magnolia Restaurant',
  },
  {pic: require('../../assets/hotels/ramada.jpg'), name: 'Ramada Hotel'},
  {pic: require('../../assets/hotels/delano.jpg'), name: 'Delano Restaurant'},
];
const IslamabdHotels = () => {
  return (
    <View>
      <FlatList
        keyExtractor={(photo) => photo.pic}
        data={photo}
        renderItem={({item}) => {
          return (
            <View>
              <Image style={styles.photo} source={item.pic} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  photo: {
    width: '95%',
    height: 220,
    borderRadius: 20,
    margin: 5,
    alignSelf: 'center',
    marginTop: 5,
  },
  text: {
    position: 'absolute',
    top: 190,
    left: 30,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 23,
    color: 'white',
    fontWeight: '200',
  },
});
export default IslamabdHotels;
