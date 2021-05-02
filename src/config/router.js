import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Content from '../component/content';
import ComingSoon from '../component/content/coming';
const Tab = createMaterialTopTabNavigator();

const Route = () => {
  return (
    <Tab.Navigator
      initialRouteName="Playing"
      style={{backgroundColor: '#191826'}}>
      <Tab.Screen name="Playing" component={Content} />
      <Tab.Screen name="Coming Soon" component={ComingSoon} />
    </Tab.Navigator>
  );
};
export default Route;
