import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';

import { StackHeader } from '../components/common';
import { Listing } from '../components/views/search';

class ListingScreen extends Component {
	static navigationOptions = {
		header: null,
	};

	state = { title: 'Listing' };

	_handleBack = value => {
		if (value == 'back') this.props.navigation.goBack();
	};

	render() {
		const { title } = this.props.navigation.state.params;
		return (
			<Container>
				<StackHeader title={title} content={<Listing data={this.props.navigation} />} go={this._handleBack} />
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

export default ListingScreen;
