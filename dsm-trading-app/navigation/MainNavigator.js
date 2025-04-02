import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LogsScreen from '../screens/LogsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AlertsScreen from '../screens/AlertsScreen';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="거래내역" component={LogsScreen} />
      <Tab.Screen name="알림" component={AlertsScreen} />
      <Tab.Screen name="설정" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
