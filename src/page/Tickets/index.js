import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Tickets = () => {
  return (
    <View style={style.wrapper}>
      <Text>Tickets Pages</Text>
    </View>
  );
};
export default Tickets;
const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#191826',
    flex: 1,
    paddingTop: 25,
  },
});
