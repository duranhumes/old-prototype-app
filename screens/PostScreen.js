import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';

import { StackHeader } from '../components/common';
import { Post } from '../components/views/news';

class PostScreen extends Component {
	static navigationOptions = {
		header: null,
	};

	state = { title: 'Post' };

	_handleBack = value => {
		if (value == 'back') this.props.navigation.goBack();
	};

	render() {
		const { title } = this.props.navigation.state.params;
		return (
			<Container>
				<StackHeader title={title} content={<Post data={this.props.navigation} />} go={this._handleBack} />
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

export default PostScreen;
