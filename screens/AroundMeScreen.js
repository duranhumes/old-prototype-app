import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab, Text } from 'native-base';

import { IOSHeader, Spinner } from '../components/common';
import { AroundMe } from '../components/views/aroundme';

class AroundMeScreen extends Component {
	state = { isLoading: true };

	static navigationOptions = {
		header: null,
	};

	_handleNavigation = (value, data) => {
		this.props.navigation.navigate(value, { ...data });
	};

	_renderTabs = () => {
		return <AroundMe go={this._handleNavigation} />;
	};

	componentDidMount() {
		this.setState({ isLoading: false });
	}

	render() {
		return (
			<Container>
				<IOSHeader title="Around Me" tabs={this._renderTabs()} go={this.props.navigation} />
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

export { AroundMeScreen };
