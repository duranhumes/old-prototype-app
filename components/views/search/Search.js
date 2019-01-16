import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Text, Alert, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Grid, Row, Col, Button, Icon, Body, Left, Right } from 'native-base';
import axios from 'axios';

import { CustomText, CustomList } from '../../common';

const VIEWPORT_WIDTH = Dimensions.get('window').width;
const VIEWPORT_HEIGHT = Dimensions.get('window').height;

class Search extends Component {
	state = { query: '' };

	_handleNavigation = data => {
		this.props.go('Result', { ...data });
	};

	_searchListings = async val => {
		await this.setState({ query: val, isLoading: true });
		const { query, listings } = this.state;
		if (query !== '') {
			let url = `https://duranhumes.com/api/mobile/listing_search?query=${query}`;
			await axios
				.get(url)
				.then(({ data }) => this.setState({ listings: data }))
				.catch(err => Alert.alert(err));
			setTimeout(() => this.setState({ isLoading: false }), 800);
		}
	};

	render() {
		let { data } = this.props;
		return (
			<Container>
				<Content>
					{data &&
						data.map(item => (
							<TouchableOpacity key={item.id} onPress={() => this._handleNavigation(item)}>
								<Card>
									<CardItem>
										<CustomText>{item.title}</CustomText>
									</CardItem>
									<CardItem>
										<CustomText>{item.address}</CustomText>
									</CardItem>
									<CardItem>
										<CustomText>{item.phone_number}</CustomText>
									</CardItem>
								</Card>
							</TouchableOpacity>
						))}
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	searchStyle: {
		// paddingVertical: 10,
		// borderRadius: 100,
		// height: 50,
		// alignItems: 'center',
	},
});

export { Search };
