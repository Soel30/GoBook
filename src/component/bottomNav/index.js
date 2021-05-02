import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../page/Home/';
import Tickets from '../../page/Tickets/';
import {Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Theater from '../../page/Theater';
import Cafe from '../../page/Cafe';
import Profile from '../../page/Profile';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#2b2a3d',
          height: 61,
          width: '100%',
          marginTop: 15,
          flexDirection: 'row',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesome5
                name={'film'}
                color={focused ? '#b92d5a' : '#545365'}
                size={15}
              />
              <Text
                style={{
                  color: focused ? '#b92d5a' : '#545365',
                  fontSize: 13,
                  marginTop: 3,
                }}>
                Movies
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesome5
                name={'ticket-alt'}
                color={focused ? '#b92d5a' : '#545365'}
                size={15}
              />
              <Text
                style={{
                  color: focused ? '#b92d5a' : '#545365',
                  fontSize: 13,
                  marginTop: 3,
                }}>
                Tickets
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Theater"
        component={Theater}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesome5
                name={'sign'}
                color={focused ? '#b92d5a' : '#545365'}
                size={15}
              />
              <Text
                style={{
                  color: focused ? '#b92d5a' : '#545365',
                  fontSize: 13,
                  marginTop: 3,
                }}>
                Theater
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cafe"
        component={Cafe}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesome5
                name={'utensils'}
                color={focused ? '#b92d5a' : '#545365'}
                size={15}
              />
              <Text
                style={{
                  color: focused ? '#b92d5a' : '#545365',
                  fontSize: 13,
                  marginTop: 3,
                }}>
                Cafe
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesome5
                name={'user'}
                color={focused ? '#b92d5a' : '#545365'}
                size={15}
              />
              <Text
                style={{
                  color: focused ? '#b92d5a' : '#545365',
                  fontSize: 13,
                  marginTop: 3,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomNav;
