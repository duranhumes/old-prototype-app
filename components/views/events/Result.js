import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Grid, Row, Col, Button, Text, Icon, Body, Left, Right } from 'native-base';

import { CustomText } from '../../common';

const VIEWPORT_WIDTH = Dimensions.get('window').width;
const VIEWPORT_HEIGHT = Dimensions.get('window').height;

const CONTAINER = VIEWPORT_WIDTH * 0.92;

class Result extends Component {
	render() {
		const { title, image, location, date, description } = this.props.data.state.params;
		const { container, header, dateLocation, dateLocationText, dateLocationIcon, titleContainer, titleStyle, imageContainer, imageStyle, descriptionContainer, descriptionStyle } = styles;
		return (
			<Container>
				<Content>
					<View style={container}>
						<View style={header}>
							<View style={dateLocation}>
								<CustomText numberOfLines={1} style={dateLocationText}>
									<Icon name="ios-calendar" style={dateLocationIcon} /> {date}
								</CustomText>
								<CustomText numberOfLines={1} style={dateLocationText}>
									<Icon name="ios-plane" style={dateLocationIcon} /> {location}
								</CustomText>
							</View>
							<View style={titleContainer}>
								<CustomText style={titleStyle}>{title}</CustomText>
							</View>
						</View>
						<View style={imageContainer}>
							<Image source={{ uri: image }} style={imageStyle} />
						</View>
						<View style={descriptionContainer}>
							<CustomText style={descriptionStyle}>{description}</CustomText>
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: CONTAINER,
		marginHorizontal: 15,
		alignItems: 'stretch',
		flex: 1,
	},
	header: {
		marginVertical: 15,
		width: CONTAINER,
		flex: 1,
	},
	dateLocation: {
		flexDirection: 'row',
	},
	dateLocationText: {
		color: '#ccc',
		marginRight: 15,
	},
	dateLocationIcon: {
		color: '#ccc',
		fontSize: 14,
	},
	titleContainer: {
		flex: 1,
	},
	titleStyle: {
		fontSize: 38,
		fontWeight: 'bold',
		color: '#1f2123',
	},
	imageContainer: {
		width: CONTAINER,
		marginVertical: 15,
	},
	imageStyle: {
		width: null,
		height: 250,
		flex: 1,
		borderRadius: 7,
	},
	descriptionContainer: {
		//
	},
	descriptionStyle: {
		lineHeight: 25,
		color: '#1f2123',
	},
});

export { Result };
