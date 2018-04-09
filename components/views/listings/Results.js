import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Grid, Row, Col, Button, Text, Icon, Body, Left, Right } from 'native-base';

class Results extends Component {
	state = { listings: [] };

	_getListings = () => {
		fetch('https://api.myjson.com/bins/174jqj')
			.then(res => res.json())
			.then(({ data }) => this.setState({ listings: data }));
	};

	_renderListing = () => {
		return this.state.listings.map(listing => {
			return (
				<Card key={listing.id}>
					<CardItem header>
						<Text>{listing.title}</Text>
					</CardItem>
					<CardItem body>
						<Grid>
							<Row>
								<Text>{listing.address}</Text>
							</Row>
							<Row>
								<Text>{listing.email}</Text>
							</Row>
							<Row>
								<Text>{listing.phone_number}</Text>
							</Row>
						</Grid>
					</CardItem>
					<CardItem footer>
						<Button full style={{ flex: 1 }}>
							<Text>View</Text>
						</Button>
					</CardItem>
				</Card>
			);
		});
	};

	componentWillMount() {
		this._getListings();
	}

	render() {
		return (
			<Container>
				<Content>
					<Text style={{ margin: 20 }}>
						Results for <Text style={{ fontWeight: 'bold' }}>'Carmines'</Text>
					</Text>
					{this._renderListing()}
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({});

export { Results };
