import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab, Text } from 'native-base';

import { Head } from '../components/common';
import { Events } from '../components/views/events';

class EventsScreen extends Component {
	static navigationOptions = {
		header: null,
	};

	_renderTabs = () => {
		return (
			<Tabs renderTabBar={() => <ScrollableTab />}>
				<Tab heading="Events">
					<Text>Events</Text>
				</Tab>
			</Tabs>
		);
	};

	render() {
		return (
			<Container>
				<Head tabs={this._renderTabs()} />
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

export default EventsScreen;
