import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Grid, Row, Col, Button, Text, Icon, Body, Left, Right } from 'native-base';

const VIEWPORT_WIDTH = Dimensions.get('window').width;
const VIEWPORT_HEIGHT = Dimensions.get('window').height;

class Result extends Component {
	render() {
		const { title, subtitle, body, image, date } = this.props.data.state.params;
		const { header, dateStyle, imageStyle, titleStyle, titleContainer, contentStyle, subtitleStyle, bodyStyle } = styles;
		return (
			<Container>
				<Content>
					<View style={header}>
						<TouchableOpacity style={dateStyle}>
							<Text>{date}</Text>
						</TouchableOpacity>
						<Image style={imageStyle} source={{ uri: image }} />
					</View>
					<View style={titleContainer}>
						<Text style={titleStyle}>{title}</Text>
						<Text style={subtitleStyle}>{subtitle}</Text>
					</View>
					<View style={contentStyle}>
						<Text style={bodyStyle}>{body}</Text>
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
	dateStyle: {
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
	subtitleStyle: {
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
	contentStyle: {
		paddingHorizontal: 20,
	},
	bodyStyle: {
		lineHeight: 30,
		marginBottom: 20,
	},
});

export { Result };
