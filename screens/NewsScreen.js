import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab, Text } from 'native-base';

import { Head } from '../components/common';
import { News } from '../components/views/news';

class NewsScreen extends Component {
	static navigationOptions = {
		header: null,
	};

	_renderTabs = () => {
		return (
			<Tabs renderTabBar={() => <ScrollableTab />}>
				<Tab heading="News">
					<Text>News</Text>
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

export default NewsScreen;
