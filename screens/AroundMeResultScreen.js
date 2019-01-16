import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';

import { IOSResultHeader } from '../components/common';
import { Result } from '../components/views/aroundme';

class AroundMeResultScreen extends Component {
	static navigationOptions = {
		header: null,
	};

	state = { title: 'Result' };

	_handleBack = value => {
		if (value == 'back') this.props.navigation.goBack();
	};

	render() {
		const { title } = this.props.navigation.state.params;
		return (
			<Container>
				<IOSResultHeader title={title} content={<Result data={this.props.navigation} />} go={this._handleBack} />
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

export { AroundMeResultScreen };
