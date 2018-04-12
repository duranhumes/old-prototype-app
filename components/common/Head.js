import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Button, Text, Icon, H1, H2, Item, Input, Tab, Tabs, ScrollableTab, Body, Left, Right } from 'native-base';

class Head extends Component {
	render() {
		return (
			<Container style={styles.viewStyle}>
				<Header>
					<Left>
						<Button transparent dark>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<H1>Local</H1>
					</Body>
					<Right>
						<Button transparent dark>
							<Icon name="cloud" />
						</Button>
					</Right>
				</Header>
				{this.props.tabs}
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		height: 60,
		display: 'flex',
		// paddingTop: 15,
		backgroundColor: '#f8f8f8',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative',
	},
	textStyle: {
		fontSize: 24,
		fontWeight: 'bold',
	},
});

export { Head };
