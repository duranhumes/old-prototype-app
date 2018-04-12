import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import SearchScreen from '../screens/SearchScreen';
import BusinessScreen from '../screens/BusinessScreen';
import EventsScreen from '../screens/EventsScreen';

export default DrawerNavigator({
	DrawerItem1: {
		screen: HomeScreen,
		navigationOptions: {
			drawerLabel: 'Alerts',
			drawerIcon: ({ tintColor }) => <Icon name="home" size={24} />,
		},
	},
});
