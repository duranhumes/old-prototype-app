import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab, Text } from 'native-base';

import { Head } from '../components/common';

class ListingsScreen extends Component {
	static navigationOptions = {
		title: null,
	};

	renderTabs = () => {
		return (
			<Tabs renderTabBar={() => <ScrollableTab />}>
				<Tab heading="Results">
					<Text>Results</Text>
				</Tab>
				<Tab heading="Listing">
					<Text>Listing</Text>
				</Tab>
			</Tabs>
		);
	};

	render() {
		return (
			<Container>
				<Head tabs={this.renderTabs()} />
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

export default ListingsScreen;
