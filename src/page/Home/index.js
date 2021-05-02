import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Route from '../../config/router';
const Home = () => {
  return (
    <SafeAreaView style={style.wrapper}>
      <View style={style.navTop}>
        <View>
          <TouchableOpacity onPress={() => alert('brohbrohbroh')}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome5 name={'map-marker-alt'} color="#cc104d" size={17} />
              <Text
                style={{
                  color: 'white',
                  marginLeft: 8,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Select Area
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <FontAwesome5 name={'search'} color="grey" size={17} />
        </View>
      </View>
      <View style={style.content}>
        <Route />
      </View>
    </SafeAreaView>
  );
};

export default Home;
const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    flex: 1,
  },
  navTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  content: {
    flex: 1,
    // flexDirection: 'col',
    paddingHorizontal: 5,
  },
});
