import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab, Text } from 'native-base';

import { IOSHeader } from '../components/common';
import { Events } from '../components/views/events';

const months = [{ id: 1, month: 'January' }, { id: 2, month: 'Febuary' }, { id: 3, month: 'March' }, { id: 4, month: 'April' }, { id: 5, month: 'May' }, { id: 6, month: 'June' }];

class EventScreen extends Component {
	static navigationOptions = {
		header: null,
	};

	_renderTabs = () => {
		const monthTabs = months.map(value => {
			return (
				<Tab key={value.id} tabStyle={styles.tab} activeTabStyle={styles.activeTab} activeTextStyle={styles.activeText} heading={value.month}>
					<Events month={value} go={this._handleNavigation} />
				</Tab>
			);
		});
		return (
			<Tabs
				renderTabBar={() => <ScrollableTab />}
				locked={true}
				tabBarUnderlineStyle={styles.tabBar}
				tabBarUnderlineStyle={styles.removeUnderline}
				style={{
					elevation: 0,
					shadowColor: 'transparent',
					shadowOffset: null,
					shadowRadius: null,
					shadowOpacity: null,
				}}>
				{monthTabs}
			</Tabs>
		);
	};

	_handleNavigation = (value, data) => {
		this.props.navigation.navigate(value, { ...data });
	};

	render() {
		return (
			<Container>
				<IOSHeader title="Events" tabs={this._renderTabs()} go={this.props.navigation} placeholder="Search Events..." hasSearch />
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	tabBar: {
		borderBottomWidth: 0,
		opacity: 0,
	},
	tab: {
		borderBottomWidth: 0,
		backgroundColor: '#fff',
		padding: 0,
		margin: 0,
		height: 10,
	},
	activeTab: {
		borderBottomWidth: 0,
		borderRadius: 20,
		padding: 0,
		margin: 0,
		height: 10,
	},
	activeText: {
		color: '#1f2123',
	},
	removeUnderline: {
		backgroundColor: '#fff',
		borderBottomWidth: 0,
	},
});

export { EventScreen };
