import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom, StackNavigator, DrawerNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import PostScreen from '../screens/PostScreen';
import SearchScreen from '../screens/SearchScreen';
import BusinessScreen from '../screens/BusinessScreen';
import EventsScreen from '../screens/EventsScreen';
import ListingScreen from '../screens/ListingScreen';

const NewsNavigation = StackNavigator({
	News: {
		screen: NewsScreen,
	},
	Post: {
		screen: PostScreen,
	},
});

const SearchNavigation = StackNavigator({
	Search: {
		screen: SearchScreen,
	},
	Listing: {
		screen: ListingScreen,
	},
});

const DrawerNavigation = DrawerNavigator({
	Home: {
		screen: HomeScreen,
	},
	News: {
		screen: NewsNavigation,
	},
	Search: {
		screen: SearchNavigation,
	},
	Business: {
		screen: BusinessScreen,
	},
	Events: {
		screen: EventsScreen,
	},
});

export default TabNavigator(
	{
		// Drawer: {
		// 	screen: DrawerNavigation,
		// 	navigationOptions: { tabBarVisible: false, header: null },
		// },
		Home: {
			screen: HomeScreen,
		},
		News: {
			screen: NewsNavigation,
		},
		Search: {
			screen: SearchNavigation,
		},
		Business: {
			screen: BusinessScreen,
		},
		Events: {
			screen: EventsScreen,
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
					case 'News':
						iconName = Platform.OS === 'ios' ? `ios-paper${focused ? '' : '-outline'}` : 'md-paper';
						break;
					case 'Search':
						iconName = Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'md-search';
						break;
					case 'Business':
						iconName = Platform.OS === 'ios' ? `ios-briefcase${focused ? '' : '-outline'}` : 'md-briefcase';
						break;
					case 'Events':
						iconName = Platform.OS === 'ios' ? `ios-calendar${focused ? '' : '-outline'}` : 'md-calendar';
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
