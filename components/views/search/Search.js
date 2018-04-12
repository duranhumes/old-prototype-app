import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Grid, Row, Col, Button, Form, Text, Input, Item, Icon, Body, Left, Right } from 'native-base';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

class Search extends Component {
	state = { listings: [], query: '' };

	componentWillMount() {}

	componentDidMount() {
		this._searchListings();
	}

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
					<Header searchBar rounded>
						<Item>
							<Icon name="ios-search" />
							<Input placeholder="Search Listings..." defaultValue={query} onChangeText={query => this._searchListings(query)} />
						</Item>
					</Header>
					{listings.map(listing => (
						<TouchableOpacity key={listing.id}>
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

const styles = StyleSheet.create({});

export { Search };
