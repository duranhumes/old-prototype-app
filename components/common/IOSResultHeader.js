import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Button, Text, Icon, Body, Left, Right } from 'native-base';

const IOSResultHeader = props => {
	return (
		<Container style={styles.viewStyle}>
			<Header style={{ borderBottomWidth: 0, backgroundColor: '#fff' }}>
				<Left>
					<Button transparent dark onPress={() => props.go('back')}>
						<Icon name="ios-arrow-round-back-outline" style={styles.icon} />
					</Button>
				</Left>
			</Header>
			{props.content}
		</Container>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		height: 60,
		flex: 1,
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative',
		justifyContent: 'center',
	},
	textStyle: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	icon: {
		marginTop: -2,
		fontSize: 38,
	},
});

export { IOSResultHeader };
