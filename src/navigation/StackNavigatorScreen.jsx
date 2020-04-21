import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

// home
import BottomTabNavigator from './BottomTabNavigator';

// settings
import SettingsLanguageScreen from '../screens/settings/SettingsLanguageScreen';

const Nav = createStackNavigator();

export default function StackNavigator() {
  const { t } = useTranslation();
  return (
    <Nav.Navigator>
      <Nav.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Nav.Screen
        name="SettingsLanguageScreen"
        component={SettingsLanguageScreen}
        options={{ title: t('settings_language_change_language') }}
      />
    </Nav.Navigator>
  );
}
