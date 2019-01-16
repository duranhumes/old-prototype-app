import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Grid, Row, Col, Button, Text, Icon, Body, Left, Right } from 'native-base';

const VIEWPORT_WIDTH = Dimensions.get('window').width;
const VIEWPORT_HEIGHT = Dimensions.get('window').height;

class Result extends Component {
	render() {
		const { title, address, website, image, distance, phone_number, email, description, island } = this.props.data.state.params;
		const { header, distanceStyle, imageStyle, titleStyle, titleContainer, descriptionStyle, subTextStyle, descriptionContainerStyle } = styles;
		return (
			<Container>
				<Content>
					<View style={header}>
						<TouchableOpacity style={distanceStyle}>
							<Text>{distance}</Text>
						</TouchableOpacity>
						<Image style={imageStyle} source={{ uri: image }} />
					</View>
					<View style={titleContainer}>
						<Text style={titleStyle}>{title}</Text>
						<Text style={subTextStyle}>{address}</Text>
						<Text style={subTextStyle}>{phone_number}</Text>
					</View>
					<View style={descriptionContainerStyle}>
						<Text style={descriptionStyle}>{description}</Text>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		width: VIEWPORT_WIDTH,
		height: 300,
		flex: 1,
		position: 'relative',
	},
	distanceStyle: {
		position: 'absolute',
		top: 10,
		left: 10,
		zIndex: 5,
		backgroundColor: '#f2f2f2',
		padding: 5,
		paddingHorizontal: 10,
		borderRadius: 100,
	},
	imageStyle: {
		width: VIEWPORT_WIDTH,
		height: 300,
		flex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
	},
	titleStyle: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	subTextStyle: {
		fontSize: 14,
		color: '#aaa',
		textAlign: 'center',
		marginVertical: 15,
	},
	titleContainer: {
		width: VIEWPORT_WIDTH,
		flex: 1,
		paddingVertical: 20,
	},
	descriptionContainerStyle: {
		paddingHorizontal: 20,
	},
	descriptionStyle: {
		lineHeight: 30,
		marginBottom: 20,
	},
});

export { Result };
