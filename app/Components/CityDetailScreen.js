import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CityDetailScreen = ({image, name, navigation}) => {
  return (
    <View>
      <Image style={{height: '40%', width: '100%'}} source={image} />
      <Text style={styles.HeaderText}>{name}</Text>
      <View style={styles.container}>
        <View style={styles.cateogries}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('IslamabadHotels')}>
            <Icon name="food" color="#0fd9fc" size={40} />
            <Text style={{color: 'gray'}}>Hotels</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('IslamabadParks')}>
            <Icon name="human-male-child" color="#0fd9fc" size={40} />
            <Text style={{color: 'gray'}}>Parks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Icon name="bed" color="#0fd9fc" size={40} />
            <Text style={{color: 'gray'}}>Where to Stay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Icon name="hiking" color="#0fd9fc" size={40} />
            <Text style={{color: 'gray'}}>Places to Visit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Icon name="account-cowboy-hat" color="#0fd9fc" size={40} />
            <Text style={{color: 'gray'}}>Personalities</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Icon name="google-maps" color="#0fd9fc" size={40} />
            <Text style={{color: 'gray'}}>Location</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#faf7f7',
    height: '70%',

    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    elevation: 10,
  },
  HeaderText: {
    fontSize: 30,
    marginTop: -70,
    paddingLeft: 10,
    color: 'white',
    marginLeft: 25,
    fontWeight: 'bold',
  },
  card: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cateogries: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
});
export default CityDetailScreen;
