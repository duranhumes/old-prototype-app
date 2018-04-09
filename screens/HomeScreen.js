import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';

import { Head } from '../components/common';
import { Home, News, Events, Movies } from '../components/views/home';

class HomeScreen extends Component {
	static navigationOptions = {
		header: null,
	};

	renderTabs = () => {
		return (
			<Tabs renderTabBar={() => <ScrollableTab />}>
				<Tab heading="Home">
					<Home />
				</Tab>
				<Tab heading="News">
					<News />
				</Tab>
				<Tab heading="Events">
					<Events />
				</Tab>
				<Tab heading="Movies">
					<Movies />
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

export default HomeScreen;
