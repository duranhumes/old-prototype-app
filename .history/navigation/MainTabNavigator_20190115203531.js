import React from 'react'
import { Platform, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {
    TabNavigator,
    TabBarBottom,
    StackNavigator,
    DrawerNavigator,
} from 'react-navigation'

import Colors from '../constants/Colors'

import {
    HomeScreen,
    NewsScreen,
    NewsResultScreen,
    SearchScreen,
    SearchResultScreen,
    AroundMeScreen,
    AroundMeResultScreen,
    EventScreen,
    EventResultScreen,
} from '../screens'

const NewsNavigation = StackNavigator({
    News: {
        screen: NewsScreen,
    },
    Result: {
        screen: NewsResultScreen,
    },
})

const SearchNavigation = StackNavigator({
    Search: {
        screen: SearchScreen,
    },
    Result: {
        screen: SearchResultScreen,
    },
})

const AroundMeNavigation = StackNavigator({
    AroundMe: {
        screen: AroundMeScreen,
    },
    Result: {
        screen: AroundMeResultScreen,
    },
})

const EventsNavigation = StackNavigator({
    Event: {
        screen: EventScreen,
    },
    Result: {
        screen: EventResultScreen,
    },
})

export default TabNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        News: {
            screen: NewsNavigation,
        },
        Search: {
            screen: SearchNavigation,
        },
        'Around Me': {
            screen: AroundMeNavigation,
        },
        Events: {
            screen: EventsNavigation,
        },
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
            },
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state
                let iconName
                switch (routeName) {
                    // case 'Home':
                    // 	iconName = Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home';
                    // 	break;
                    case 'News':
                        iconName =
                            Platform.OS === 'ios'
                                ? `ios-paper${focused ? '' : '-outline'}`
                                : 'md-paper'
                        break
                    case 'Search':
                        iconName =
                            Platform.OS === 'ios'
                                ? `ios-search${focused ? '' : '-outline'}`
                                : 'md-search'
                        break
                    case 'Around Me':
                        iconName =
                            Platform.OS === 'ios'
                                ? `ios-pin${focused ? '' : '-outline'}`
                                : 'md-pin'
                    // break;
                    // case 'Events':
                    // 	iconName = Platform.OS === 'ios' ? `ios-calendar${focused ? '' : '-outline'}` : 'md-calendar';
                }
                return (
                    <Ionicons
                        name={iconName}
                        size={24}
                        style={{
                            marginBottom: -3,
                            width: 20,
                            alignItems: 'center',
                        }}
                        color={
                            focused
                                ? Colors.tabIconSelected
                                : Colors.tabIconDefault
                        }
                    />
                )
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        configureTransition: (currentTransitionProps, nextTransitionProps) => ({
            // timing: Animated.spring,
            timing: Animated.timing({
                easing: true,
                toValue: pan.x.interpolate({
                    inputRange: [0, 300],
                    outputRange: [1, 0],
                }),
                duration: 10000,
                useNativeDriver: true, // <-- Add this
            }).start(),
            // tension: 100,
            // friction: 10,
        }),
        lazy: true,
        swipeEnabled: false,
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'lato',
            },
        },
    }
)
