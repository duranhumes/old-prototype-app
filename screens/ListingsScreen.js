import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab, Text } from 'native-base';

import { Head } from '../components/common';
import { Results, Listing } from '../components/views/listings';

class ListingsScreen extends Component {
	static navigationOptions = {
		header: null,
	};

	renderTabs = () => {
		return (
			<Tabs renderTabBar={() => <ScrollableTab />}>
				<Tab heading="Results">
					<Results />
				</Tab>
				<Tab heading="Listing">
					<Listing />
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
