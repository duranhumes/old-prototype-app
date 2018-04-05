import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import ListingsScreen from '../screens/ListingsScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
	{
		Home: {
			screen: HomeScreen,
		},
		Listings: {
			screen: ListingsScreen,
		},
		Settings: {
			screen: SettingsScreen,
		},
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused }) => {
				const { routeName } = navigation.state;
				let iconName;
				switch (routeName) {
					case 'Home':
						iconName = Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home';
						break;
					case 'Listings':
						iconName = Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'md-search';
						break;
					case 'Settings':
						iconName = Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
				}
				return <Ionicons name={iconName} size={28} style={{ marginBottom: -3, width: 25 }} color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} />;
			},
		}),
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false,
	}
);
