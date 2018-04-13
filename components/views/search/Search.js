import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Grid, Row, Col, Button, Form, Text, Input, Item, Icon, Body, Left, Right } from 'native-base';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

class Search extends Component {
	state = { listings: [], query: '' };

	componentDidMount() {
		this._searchListings();
	}

	_handleNavigation = data => {
		this.props.go('Listing', { ...data });
	};

	_searchListings = async val => {
		this.setState({ query: val });
		const { query, listings } = this.state;
		if (query !== '') {
			let url = `https://duranhumes.com/api/mobile/listing_search?query=${query}`;
			await axios.get(url).then(({ data }) => this.setState({ listings: data }));
		}
	};

	render() {
		let { query, listings } = this.state;
		return (
			<Container>
				<Content>
					<Header searchBar>
						<Item>
							<Icon name="ios-search" />
							<Input placeholder="Search Listings..." defaultValue={query} onChangeText={query => this._searchListings(query)} clearButtonMode="always" style={styles.searchStyle} />
						</Item>
					</Header>
					{listings.map(listing => (
						<TouchableOpacity key={listing.id} onPress={() => this._handleNavigation(listing)}>
							<Card>
								<CardItem>
									<Text>{listing.title}</Text>
								</CardItem>
								<CardItem>
									<Text>{listing.address}</Text>
								</CardItem>
								<CardItem>
									<Text>{listing.phone_number}</Text>
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
