import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab, Text } from 'native-base';
import axios from 'axios';

import { IOSHeader, Spinner } from '../components/common';
import { Search } from '../components/views/search';

class SearchScreen extends Component {
	state = { list: [], isLoading: true, input: '' };

	static navigationOptions = {
		header: null,
	};

	_getListings = async () => {
		let url = 'https://duranhumes.com/api/mobile/listings';
		await axios.get(url).then(({ data }) => this.setState({ list: data }));
		setTimeout(() => this.setState({ isLoading: false }), 800);
	};

	_handleNavigation = (value, data) => {
		this.props.navigation.navigate(value, { ...data });
	};

	_renderTabs = () => {
		return <Search go={this._handleNavigation} data={this.state.list} />;
	};

	_setInput = input => {
		this.setState({ input });
	};

	_handleSearch = data => {
		console.log(this.state.input);
		console.log('hit', data);
		// setTimeout(() => this.setState({ list: data }), 450);
	};

	componentWillMount() {
		this._getListings();
	}

	componentWillBlur() {
		clearTimeout();
	}

	render() {
		return (
			<Container>
				{this.state.isLoading && <Spinner visible={this.state.isLoading} animation="fade" size="large" />}
				<IOSHeader
					title="Search"
					tabs={this._renderTabs()}
					go={this.props.navigation}
					placeholder="Search..."
					data={this.state.list}
					text={this._setInput}
					search={this._handleSearch}
					hasSearch
				/>
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

export { SearchScreen };
