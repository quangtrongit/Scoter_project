import 'react-native-gesture-handler';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/HomeScreen/NotificationScreen';
import NotificationScreen from '../screens/HomeScreen/ProfileScreen';
const Tab = createBottomTabNavigator();

const OverviewTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Notificaton',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="notifications" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default OverviewTabNavigator;
