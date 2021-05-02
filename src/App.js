import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './page/Home';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BottomNav from './component/bottomNav';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#191826',
      border: '#ed0c48s',
      primary: '#ed0c48',
      card: '#191826',
      text: 'white',
    },
  };
  return (
    <View style={style.wrapper}>
      <NavigationContainer theme={MyTheme}>
        <BottomNav />
      </NavigationContainer>
      {/* <View style={style.navBottom}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <FontAwesome5 name={'film'} color="#b92d5a" size={15} />
          <Text style={{color: '#b92d5a', fontSize: 13, marginTop: 3}}>
            Movies
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <FontAwesome5 name={'ticket-alt'} color="#545365" size={15} />
          <Text style={{color: '#545365', fontSize: 13, marginTop: 3}}>
            Tickets
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <FontAwesome5 name={'sign'} color="#545365" size={15} />
          <Text style={{color: '#545365', fontSize: 13, marginTop: 3}}>
            Theater
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <FontAwesome5 name={'utensils'} color="#545365" size={15} />
          <Text style={{color: '#545365', fontSize: 13, marginTop: 3}}>
            Cafe
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <FontAwesome5 name={'user'} color="#545365" size={15} />
          <Text style={{color: '#545365', fontSize: 13, marginTop: 3}}>
            Profile
          </Text>
        </View>
      </View> */}
    </View>
  );
};

export default App;
const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#191826',
    flex: 1,
    paddingTop: 25,
  },
  navBottom: {
    backgroundColor: '#2b2a3d',
    height: 61,
    width: '100%',
    marginTop: 15,
    flexDirection: 'row',
  },
});
