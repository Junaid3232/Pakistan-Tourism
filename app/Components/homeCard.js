import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Card = ({name, Press}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={Press}>
      <Text style={{color: 'white', fontSize: 23, fontWeight: 'bold'}}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '13%',
    backgroundColor: '#0fd9fc',
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    marginVertical: 4,
    elevation: 5,
  },
});
export default Card;
