import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Button, Text, Icon, Item, Input, Tab, Tabs, ScrollableTab, Body, Left, Right } from 'native-base';

class Head extends Component {
	render() {
		return (
			<Container style={styles.viewStyle}>
				<Header style={{ flexDirection: 'row', width: '75%', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
					<Image source={require('../../assets/images/logo.png')} style={{ alignItems: 'center', width: 250, margin: 'auto', justifyContent: 'center', height: 45 }} />
				</Header>
				<Header searchBar>
					<Item style={{ flex: 1 }}>
						<Icon name="ios-search" />
						<Input placeholder="Search" />
					</Item>
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
		paddingTop: 15,
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
