import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Content, Col, Row, Grid, Text, Card, CardItem, Thumbnail, Body, Left, Right } from 'native-base';

class Home extends Component {
	render() {
		return (
			<Container>
				<Content>
					<Grid>
						<Text style={styles.sectionTitleStyle}>News</Text>
						<Row>
							<Card>
								<CardItem cardBody>
									<Image source={{ uri: 'http://via.placeholder.com/400x200' }} style={{ height: 200, width: null, flex: 1 }} />
								</CardItem>
								<CardItem>
									<Body>
										<Text>Big News</Text>
										<Text>More Text</Text>
									</Body>
								</CardItem>
							</Card>
						</Row>
						<Row>
							<Col>
								<Card>
									<CardItem cardBody>
										<Image source={{ uri: 'http://via.placeholder.com/150x150' }} style={{ height: 150, width: null, flex: 1 }} />
									</CardItem>
									<CardItem>
										<Body>
											<Text>Small News</Text>
											<Text>More Text</Text>
										</Body>
									</CardItem>
								</Card>
							</Col>
							<Col>
								<Card>
									<CardItem cardBody>
										<Image source={{ uri: 'http://via.placeholder.com/150x150' }} style={{ height: 150, width: null, flex: 1 }} />
									</CardItem>
									<CardItem>
										<Body>
											<Text>Small News</Text>
											<Text>More Text</Text>
										</Body>
									</CardItem>
								</Card>
							</Col>
							<Col>
								<Card>
									<CardItem cardBody>
										<Image source={{ uri: 'http://via.placeholder.com/150x150' }} style={{ height: 150, width: null, flex: 1 }} />
									</CardItem>
									<CardItem>
										<Body>
											<Text>Small News</Text>
											<Text>More Text</Text>
										</Body>
									</CardItem>
								</Card>
							</Col>
						</Row>
					</Grid>
					<Grid>
						<Text style={styles.sectionTitleStyle}>Hot Listings</Text>
						<Row>
							<Card>
								<CardItem cardBody>
									<Image source={{ uri: 'http://via.placeholder.com/400x200' }} style={{ height: 200, width: null, flex: 1 }} />
								</CardItem>
								<CardItem>
									<Body>
										<Text>Carmines</Text>
										<Text>Off Balfour ave</Text>
									</Body>
								</CardItem>
							</Card>
						</Row>
						<Row>
							<Card>
								<CardItem cardBody>
									<Image source={{ uri: 'http://via.placeholder.com/400x200' }} style={{ height: 200, width: null, flex: 1 }} />
								</CardItem>
								<CardItem>
									<Body>
										<Text>Marcos Pizza</Text>
										<Text>Prince Charles Drive</Text>
									</Body>
								</CardItem>
							</Card>
						</Row>
					</Grid>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	sectionTitleStyle: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 20,
		marginBottom: 20,
	},
});

export { Home };
