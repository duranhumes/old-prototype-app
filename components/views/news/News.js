import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Image } from 'react-native';
import { Container, Content, Card, CardItem, Grid, Row, Col, Button, Text, Icon, Body, Left, Right } from 'native-base';

import { CustomText, Spinner } from '../../common';

const VIEWPORT_WIDTH = Dimensions.get('window').width;
const VIEWPORT_HEIGHT = Dimensions.get('window').height;
const CARD_WIDTH = VIEWPORT_WIDTH / 1.15;
const CARD_HEIGHT = CARD_WIDTH / 2.25;
const IMAGE_WIDTH = CARD_HEIGHT * 0.85;

class News extends Component {
	state = {
		news: [
			{
				id: 1,
				title: 'Awards Conference Atlantis Ballroom',
				category: `${this.props.category.category} 10`,
				date: '2017-29-10',
				location: 'Nassau, The Bahamas',
				image: 'https://i.imgur.com/lceHsT6l.jpg',
				body:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit tenetur eos voluptatum consectetur sint dolorem quam nihil necessitatibus commodi quas odio expedita illum repellat nulla dicta nostrum laudantium doloribus enim, quaerat fugiat a assumenda laboriosam asperiores illo qui! Nostrum, consequuntur.',
			},
			{
				id: 2,
				title: 'OWN Talks',
				category: `${this.props.category.category} 5`,
				date: '2017-10-12',
				location: 'Nassau, The Bahamas',
				image: 'https://i.imgur.com/lceHsT6l.jpg',
				body:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, cupiditate ducimus dolor aperiam numquam tempore natus. Deserunt recusandae ipsum praesentium qui debitis non, eius perspiciatis similique obcaecati quos in sint doloribus ad possimus repellendus, corporis cumque nisi cupiditate minus unde.',
			},
			{
				id: 3,
				title: 'Red Cross Fair',
				category: `${this.props.category.category} 12`,
				date: '2018-02-10',
				location: 'Nassau, The Bahamas',
				image: 'https://i.imgur.com/lceHsT6l.jpg',
				body:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ipsum minima, dolore repudiandae, facilis aspernatur quia officia optio nam animi incidunt corrupti iusto assumenda nemo sit ad quidem laudantium! Vero, itaque ea quis accusantium amet nulla ab, ratione doloremque numquam!',
			},
			{
				id: 4,
				title: 'Bahamaslocal Event',
				category: `${this.props.category.category} 20`,
				date: '2016-21-10',
				location: 'Nassau, The Bahamas',
				image: 'https://i.imgur.com/lceHsT6l.jpg',
				body:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed dolor, libero, quam natus quos beatae labore. Velit labore ullam provident, numquam deserunt facilis reiciendis nulla quam voluptas, nobis molestiae aut debitis nostrum quia assumenda vero dolore illo, tempora dicta. Possimus.',
			},
			{
				id: 5,
				title: 'Go getter',
				category: `${this.props.category.category} 3`,
				date: '2017-29-10',
				location: 'Worldwide',
				image: 'https://i.imgur.com/lceHsT6l.jpg',
				body:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur error quaerat nostrum quasi magnam non assumenda amet totam eos suscipit distinctio esse nihil possimus aut id molestias voluptas fuga, nesciunt, culpa nulla est facere debitis. Veniam, et non dolorem commodi.',
			},
		],
		isLoading: true,
	};

	_handleNavigation = data => {
		this.props.go('Result', { ...data });
	};

	componentDidMount() {
		setTimeout(() => this.setState({ isLoading: false }), 800);
	}

	componentWillUnmount() {
		clearTimeout();
	}

	render() {
		const { id, category } = this.props.category;
		const { container, card, imageContainer, image, content, dateLocation, dateLocationIcon, title, footer, link, icon } = styles;
		return (
			<Container>
				<Content>
					<View style={container}>
						{this.state.isLoading && <Spinner visible={this.state.isLoading} animation="fade" size="large" />}
						{this.state.news.map(news => {
							return (
								<View style={card} key={news.id}>
									<View style={imageContainer}>
										<Image resizeMode="cover" source={{ uri: news.image }} style={image} />
									</View>
									<View style={content}>
										<Row>
											<View>
												<CustomText numberOfLines={1} style={dateLocation}>
													<Icon name="ios-calendar" style={dateLocationIcon} /> {news.date}
												</CustomText>
												<CustomText numberOfLines={1} style={dateLocation}>
													<Icon name="ios-plane" style={dateLocationIcon} /> {news.location}
												</CustomText>
											</View>
										</Row>
										<Row>
											<View style={{ flexDirection: 'row', flex: 1, flexWrap: 'wrap' }}>
												<CustomText style={title} numberOfLines={3}>
													{news.title}
												</CustomText>
											</View>
										</Row>
										<Row>
											<Button transparent style={footer} onPress={() => this._handleNavigation(news)}>
												<CustomText style={link}>See More</CustomText>
												<Icon name="ios-arrow-round-forward-outline" style={icon} />
											</Button>
										</Row>
									</View>
								</View>
							);
						})}
					</View>
				</Content>
			</Container>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		alignSelf: 'center',
		marginHorizontal: 50,
	},
	card: {
		width: CARD_WIDTH,
		height: CARD_HEIGHT,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginVertical: 20,
		flexWrap: 'wrap',
	},
	imageContainer: {
		borderRadius: 20,
	},
	image: {
		width: IMAGE_WIDTH,
		height: CARD_HEIGHT * 0.9,
		borderRadius: 10,
	},
	content: {
		flex: 1,
		marginLeft: 20,
		paddingTop: 7,
	},
	dateLocation: {
		color: '#ccc',
		fontSize: 14,
		flexWrap: 'wrap',
		flex: 1,
	},
	dateLocationIcon: {
		color: '#ccc',
		fontSize: 14,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		color: '#1f2123',
		flex: 1,
	},
	footer: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'row',
	},
	link: {
		color: '#007AFF',
		justifyContent: 'flex-start',
		fontSize: 16,
		paddingLeft: 0,
		marginLeft: 0,
	},
	icon: {
		fontSize: 24,
		color: '#007AFF',
		marginLeft: 5,
	},
});

export { News };
