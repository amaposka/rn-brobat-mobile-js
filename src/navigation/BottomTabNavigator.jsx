import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

import HomeTabScreen from '../screens/home/HomeTabScreen';
import FeedTabScreen from '../screens/home/FeedTabScreen';
import NotificationTabScreen from '../screens/home/NotificationTabScreen';
import SettingsTabScreen from '../screens/home/SettingsTabScreen';

const Nav = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const { t } = useTranslation();

  return (
    <Nav.Navigator>
      <Nav.Screen
        name="home"
        component={HomeTabScreen}
        options={{
          title: t('bottom_tab_home'),
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Nav.Screen
        name="feed"
        component={FeedTabScreen}
        options={{
          title: t('bottom_tab_feed'),
          tabBarIcon: ({ color, size }) => (
            <Icon name="logo-rss" color={color} size={size} />
          ),
        }}
      />
      <Nav.Screen
        name="notification"
        component={NotificationTabScreen}
        options={{
          title: t('bottom_tab_notification'),
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-notifications" color={color} size={size} />
          ),
        }}
      />
      <Nav.Screen
        name="settings"
        component={SettingsTabScreen}
        options={{
          title: t('bottom_tab_settings'),
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-settings" color={color} size={size} />
          ),
        }}
      />
    </Nav.Navigator>
  );
}
