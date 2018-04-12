import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Container, Content, Col, Row, Grid, Text, H1, H2, Icon, Button, Card, CardItem, Thumbnail, Body, Left, Right } from 'native-base';
import styles, { colors } from './Carousels/styles/index.style';
import SliderEntry from './Carousels/components/SliderEntry';
import { sliderWidth, itemWidth } from './Carousels/styles/SliderEntry.style';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const todoData = [
	{
		title: 'Beautiful and dramatic Antelope Canyon',
		subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
		illustration: 'https://i.imgur.com/UYiroysl.jpg',
	},
	{
		title: 'Earlier this morning, NYC',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
	},
	{
		title: 'White Pocket Sunset',
		subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
		illustration: 'https://i.imgur.com/MABUbpDl.jpg',
	},
	{
		title: 'Acrocorinth, Greece',
		subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
		illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
	},
	{
		title: 'Middle Earth, Germany',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: 'https://i.imgur.com/lceHsT6l.jpg',
	},
];
const SLIDER_FIRST_ITEM = 1;

class Home extends Component {
	state = {
		banners: ['http://via.placeholder.com/350x150', 'http://via.placeholder.com/360x150', 'http://via.placeholder.com/320x150'],
		slider1ActiveSlide: SLIDER_FIRST_ITEM,
	};

	_renderBanners = ({ item, index }) => {
		return (
			<View style={{ height: 100, width: viewportWidth }}>
				<Image resizeMode="cover" source={{ uri: item }} style={{ width: viewportWidth, height: 100 }} />
			</View>
		);
	};

	_renderItemWithParallax({ item, index }, parallaxProps) {
		return <SliderEntry data={item} even={(index + 1) % 2 === 0} parallax={true} parallaxProps={parallaxProps} />;
	}

	_renderToDo = ({ item, index }) => {
		return (
			<View style={{ width: viewportWidth }}>
				<Text style={{ textAlign: 'center', width: null, flex: 1, fontSize: 24 }}>{item.title}</Text>
				<Image resizeMode="cover" source={{ uri: item.illustration }} style={{ width: viewportWidth, height: 100 }} />
				<Text style={{ textAlign: 'center', width: null, flex: 1 }}>{item.subtitle}</Text>
			</View>
		);
	};

	render() {
		const { slider1ActiveSlide } = this.state;
		return (
			<Container>
				<Content>
					<Grid>
						<Row>
							<Carousel data={this.state.banners} renderItem={this._renderBanners} sliderWidth={viewportWidth} itemWidth={viewportWidth} loop={true} autoplay={true} />
						</Row>
						<Row>
							<View style={styles.exampleContainer}>
								<Text style={styles.title}>Things To do</Text>
								<Carousel
									ref={c => (this._slider1Ref = c)}
									data={todoData}
									renderItem={this._renderItemWithParallax}
									sliderWidth={sliderWidth}
									itemWidth={itemWidth}
									hasParallaxImages={true}
									firstItem={3}
									inactiveSlideScale={0.94}
									inactiveSlideOpacity={0.7}
									inactiveSlideShift={20}
									containerCustomStyle={styles.slider}
									contentContainerCustomStyle={styles.sliderContentContainer}
									loop={true}
									loopClonesPerSide={2}
									autoplay={true}
									autoplayDelay={500}
									autoplayInterval={4500}
								/>
							</View>
						</Row>
						<Row>
							<View style={styles.exampleContainer}>
								<Text style={styles.title}>News</Text>
								<Text style={styles.subtitle}>Latest</Text>
								<Carousel
									ref={c => (this._slider1Ref = c)}
									data={todoData}
									renderItem={this._renderItemWithParallax}
									sliderWidth={sliderWidth}
									itemWidth={itemWidth}
									hasParallaxImages={true}
									firstItem={5}
									inactiveSlideScale={0.94}
									inactiveSlideOpacity={0.7}
									inactiveSlideShift={20}
									containerCustomStyle={styles.slider}
									contentContainerCustomStyle={styles.sliderContentContainer}
									loop={true}
									loopClonesPerSide={2}
									autoplay={true}
									autoplayDelay={200}
									autoplayInterval={4200}
								/>
							</View>
						</Row>
						<Row>
							<View style={styles.exampleContainer}>
								<Text style={styles.title}>Events</Text>
								<Text style={styles.subtitle}>Latest</Text>
								<Carousel
									ref={c => (this._slider1Ref = c)}
									data={todoData}
									renderItem={this._renderItemWithParallax}
									sliderWidth={sliderWidth}
									itemWidth={itemWidth}
									hasParallaxImages={true}
									firstItem={1}
									inactiveSlideScale={0.94}
									inactiveSlideOpacity={0.7}
									inactiveSlideShift={20}
									containerCustomStyle={styles.slider}
									contentContainerCustomStyle={styles.sliderContentContainer}
									loop={true}
									loopClonesPerSide={2}
									autoplay={true}
									autoplayInterval={3000}
								/>
							</View>
						</Row>
					</Grid>
				</Content>
			</Container>
		);
	}
}

// const styles = StyleSheet.create({});

export { Home };
