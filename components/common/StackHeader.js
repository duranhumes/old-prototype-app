import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Button, Text, Icon, H1, H2, Item, Input, Tab, Tabs, ScrollableTab, Body, Left, Right } from 'native-base';

class StackHeader extends Component {
	render() {
		return (
			<Container style={styles.viewStyle}>
				<Header>
					<Left>
						<Button transparent dark onPress={() => this.props.go('back')}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>
					<Body style={{ flex: 5 }}>
						<Text style={{ fontWeight: 'bold' }}>{this.props.title.length > 30 ? this.props.title.substr(0, 30) + '...' : this.props.title}</Text>
					</Body>
					<Right>
						<Button transparent dark>
							<Icon name="share" />
						</Button>
					</Right>
				</Header>
				{this.props.content}
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		height: 60,
		display: 'flex',
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

export { StackHeader };
