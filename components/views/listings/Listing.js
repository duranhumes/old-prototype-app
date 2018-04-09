import React, { Component } from 'react';
import { StyleSheet, Image, View, Dimensions, Text } from 'react-native';
import { Container, Content, Card, CardItem, Grid, Row, Col, Button, Icon, Body, Left, Right } from 'native-base';

const window = Dimensions.get('window');

class Listing extends Component {
	render() {
		console.log(window);
		const {
			cardContainerStyles,
			cardLogoContainerStyles,
			cardLogoStyles,
			galleryImageStyles,
			mapStyles,
			contentSectionStyles,
			bannerImageStyles,
			sectionHeaderText,
			descriptionStyles,
			openHoursStyles,
			galleryImageContainerStyles,
		} = styles;
		return (
			<Container>
				<Content>
					<View style={cardContainerStyles}>
						<Image resizeMode="cover" source={{ uri: 'http://via.placeholder.com/400x200' }} style={bannerImageStyles} />
						<View style={cardLogoContainerStyles}>
							<Image resizeMode="cover" source={{ uri: 'http://via.placeholder.com/150x150' }} style={cardLogoStyles} />
							<View style={{ width: '90%', alignSelf: 'center' }}>
								<Grid>
									<Row>
										<Text style={{ fontWeight: 'bold', fontSize: 24, textAlign: 'center', flex: 1 }}>Carmines</Text>
									</Row>
									<Row>
										<Text style={{ textAlign: 'center', flex: 1, lineHeight: 30 }}>Lorem ipsum dolor sit amet, consectetur</Text>
									</Row>
								</Grid>
								<Grid>
									<Col>
										<Row>
											<Text style={{ marginRight: 7, textAlign: 'center', flex: 1, lineHeight: 30 }}>Tel: </Text>
										</Row>
										<Row>
											<Text style={{ textAlign: 'center', flex: 1, lineHeight: 30 }}>Email: </Text>
										</Row>
										<Row>
											<Text style={{ textAlign: 'center', flex: 1, lineHeight: 30 }}>Address: </Text>
										</Row>
									</Col>
									<Col>
										<Row>
											<Text style={{ marginRight: 7, textAlign: 'left', flex: 1, lineHeight: 30 }}>+1 (242) 838-3232</Text>
										</Row>
										<Row>
											<Text style={{ textAlign: 'left', flex: 1, lineHeight: 30 }}>carmines@carmines.com</Text>
										</Row>
										<Row>
											<Text style={{ textAlign: 'left', flex: 1, lineHeight: 30 }}>One Boyd Rd</Text>
										</Row>
									</Col>
								</Grid>
							</View>
						</View>
					</View>
					<Grid style={contentSectionStyles}>
						<Col size={2} style={descriptionStyles}>
							<Text style={sectionHeaderText}>Description</Text>
							<Row>
								<Text>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nemo eos, adipisci ut saepe eius ab quae id alias animi! Non eveniet nobis aut excepturi, recusandae
									nam, beatae repudiandae soluta rem sunt doloribus officia reiciendis velit eligendi error numquam. Autem sint, dolorum alias sequi architecto delectus facilis.
									Iure, ut facilis!
								</Text>
							</Row>
						</Col>
						<Col size={1} style={openHoursStyles}>
							<Text style={sectionHeaderText}>Open Hours</Text>
							<Row>
								<Text>9:00am - 10:00pm</Text>
							</Row>
							<Row>
								<Text>9:00am - 10:00pm</Text>
							</Row>
							<Row>
								<Text>9:00am - 10:00pm</Text>
							</Row>
							<Row>
								<Text>9:00am - 10:00pm</Text>
							</Row>
						</Col>
					</Grid>
					<Text style={sectionHeaderText}>Map</Text>
					<Image source={{ uri: 'http://via.placeholder.com/400x200' }} style={mapStyles} />
					<Text style={sectionHeaderText}>Gallery</Text>
					<Grid style={galleryImageContainerStyles}>
						<Row>
							<Col>
								<Image source={{ uri: 'http://via.placeholder.com/75x75' }} style={galleryImageStyles} />
							</Col>
							<Col>
								<Image source={{ uri: 'http://via.placeholder.com/75x75' }} style={galleryImageStyles} />
							</Col>
							<Col>
								<Image source={{ uri: 'http://via.placeholder.com/75x75' }} style={galleryImageStyles} />
							</Col>
						</Row>
						<Row>
							<Col>
								<Image source={{ uri: 'http://via.placeholder.com/75x75' }} style={galleryImageStyles} />
							</Col>
							<Col>
								<Image source={{ uri: 'http://via.placeholder.com/75x75' }} style={galleryImageStyles} />
							</Col>
							<Col>
								<Image source={{ uri: 'http://via.placeholder.com/75x75' }} style={galleryImageStyles} />
							</Col>
						</Row>
					</Grid>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	bannerImageStyles: {
		maxHeight: 200,
		width: null,
		flex: 1,
	},
	cardContainerStyles: {
		position: 'relative',
		height: 400,
	},
	cardLogoContainerStyles: {
		width: '80%',
		alignSelf: 'center',
		position: 'absolute',
		zIndex: 5,
		marginTop: '20%',
	},
	cardLogoStyles: {
		height: 175,
		width: null,
		flex: 1,
		borderColor: '#ffffff',
		borderWidth: 10,
	},
	contentSectionStyles: {
		marginBottom: 30,
		alignItems: 'center',
		alignSelf: 'center',
		width: '90%',
	},
	mapStyles: {
		height: 200,
		width: null,
		flex: 1,
		marginBottom: 30,
	},
	galleryImageStyles: {
		height: 75,
		width: null,
		flex: 1,
		margin: 5,
	},
	sectionHeaderText: {
		marginTop: 10,
		marginBottom: 10,
		alignSelf: 'center',
		fontWeight: 'bold',
		fontSize: 28,
	},
	descriptionStyles: {
		borderRightColor: '#eee',
		borderRightWidth: 1,
		paddingRight: 10,
		alignItems: 'center',
	},
	openHoursStyles: {
		paddingLeft: 10,
	},
	galleryImageContainerStyles: {
		width: '90%',
		alignItems: 'center',
		alignSelf: 'center',
	},
});

export { Listing };
