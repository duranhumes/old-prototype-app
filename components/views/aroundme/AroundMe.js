import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import { Button, Picker, Form, Content, Icon } from 'native-base';
import axios from 'axios';
import { MapView, Constants, Location, Permissions } from 'expo';
import call from 'react-native-phone-call';

import { Spinner, CustomText } from '../../common';

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

const VIEWPORT_WIDTH = Dimensions.get('window').width;
const VIEWPORT_HEIGHT = Dimensions.get('window').height;

const CARD_HEIGHT = VIEWPORT_HEIGHT / 8;
const CARD_WIDTH = CARD_HEIGHT * 2;
const ASPECT_RATIO = VIEWPORT_WIDTH / VIEWPORT_HEIGHT;
const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class AroundMe extends Component {
	state = {
		markers: [],
		categories: [],
		region: {
			latitude: 25.07644,
			longitude: -77.34012,
			latitudeDelta: LATITUDE_DELTA,
			longitudeDelta: LONGITUDE_DELTA,
		},
		userLocation: { coordinates: { latitude: 0, longitude: 0 } },
		selectedCategory: 0,
		distance: 1,
		category: '',
		isLoading: true,
	};
	componentWillMount() {
		this._findMe();
		this._getListings();
		axios.get('https://duranhumes.com/api/mobile/categories').then(({ data }) => this.setState({ categories: data.data }));

		this.index = 0;
		this.animation = new Animated.Value(0);
	}

	componentDidMount() {
		this._animateToListing();
	}

	_animateToListing = () => {
		// Detect when scrolling has stopped then animate and debounce the event listener
		this.animation.addListener(({ value }) => {
			let index = Math.floor(value / CARD_WIDTH + 0.3);
			if (index >= this.state.markers.length) {
				index = this.state.markers.length - 1;
			}
			if (index <= 0) {
				index = 0;
			}

			clearTimeout(this.regionTimeout);
			this.regionTimeout = setTimeout(() => {
				if (this.index !== index) {
					this.index = index;
					const { latitude, longitude } = this.state.markers[index];
					const coordinate = { latitude, longitude };
					this.map.animateToRegion(
						{
							...coordinate,
							latitudeDelta: this.state.region.latitudeDelta,
							longitudeDelta: this.state.region.longitudeDelta,
						},
						350
					);
				}
			}, 10);
		});
		Location.watchPositionAsync(GEOLOCATION_OPTIONS, this._updateUserLocation);
	};

	_getListings = async () => {
		let { distance, category } = this.state;
		setTimeout(async () => {
			let { latitude, longitude } = this.state.position;

			let url = `https://duranhumes.com/api/mobile/listing_distance?category=${category}&dist=${distance}&userLat=${latitude}&userLng=${longitude}`;
			await axios.get(url).then(({ data }) => {
				if (data.length == 0) Alert.alert('Nothing found with those parameters');
				this.setState({ markers: data, isLoading: false });
			});
			console.log(url);
		}, 1000);
	};

	_categoryChange = async value => {
		await this.setState({ selectedCategory: value, category: value, isLoading: true });
		await this._getListings();
	};

	_distanceChange = async value => {
		await this.setState({ distance: value, isLoading: true });
		await this._getListings();
	};

	_findMe = () => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				const { latitude, longitude } = coords;
				this.setState({
					position: {
						latitude,
						longitude,
					},
					region: {
						latitude,
						longitude,
						latitudeDelta: LATITUDE_DELTA,
						longitudeDelta: LONGITUDE_DELTA,
					},
				});
			},
			error => alert(JSON.stringify(error)),
			GEOLOCATION_OPTIONS
		);
	};

	_updateUserLocation = location => {
		if (location !== undefined) {
			const { latitude, longitude } = location.coords;
			const region = {
				latitude,
				longitude,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA,
			};
			this.setState({ userLocation: { coordinates: { latitude, longitude } }, region });
		}
	};

	_handleCall = number => {
		let args = {
			number: number,
			prompt: true,
		};
		call(args).catch(console.error);
	};

	_handleNavigation = data => {
		this.props.go('Result', { ...data });
	};

	render() {
		const interpolations = this.state.markers.map((marker, index) => {
			const inputRange = [(index - 1) * CARD_WIDTH, index * CARD_WIDTH, (index + 1) * CARD_WIDTH];
			const scale = this.animation.interpolate({
				inputRange,
				outputRange: [1, 2.5, 1],
				extrapolate: 'clamp',
			});
			const opacity = this.animation.interpolate({
				inputRange,
				outputRange: [0.35, 1, 0.35],
				extrapolate: 'clamp',
			});
			return { scale, opacity };
		});

		const { card, textContent, cardTitle, cardDescription, markerIcon, markerWrap, ring, calloutText, scrollView, endPadding, container, filters, mapButton } = styles;

		return (
			<View style={container}>
				{this.state.isLoading && <Spinner visible={this.state.isLoading} animation="fade" size="large" />}
				<Form style={filters}>
					<Picker
						mode="dropdown"
						iosHeader="Select a category"
						placeholder="Select a category"
						iosIcon={<Icon name="ios-arrow-down-outline" />}
						headerBackButtonText={<Icon name="ios-close" style={{ fontSize: 38 }} />}
						style={{ width: VIEWPORT_WIDTH / 1.75, marginRight: 10 }}
						selectedValue={this.state.selectedCategory}
						onValueChange={this._categoryChange}>
						{this.state.categories.map(category => {
							return <Picker.Item key={category.id} label={category.title} value={category.id} />;
						})}
					</Picker>
					<Picker
						mode="dropdown"
						iosHeader="Select distance"
						placeholder="Select distance"
						iosIcon={<Icon name="ios-arrow-down-outline" />}
						headerBackButtonText={<Icon name="ios-close" style={{ fontSize: 38 }} />}
						style={{ width: VIEWPORT_WIDTH / 2.6, marginLeft: 10 }}
						selectedValue={this.state.distance}
						onValueChange={this._distanceChange}>
						<Picker.Item label="1 Mile" value={1} />
						<Picker.Item label="3 Miles" value={3} />
						<Picker.Item label="5 Miles" value={5} />
						<Picker.Item label="10 Miles" value={10} />
					</Picker>
				</Form>
				<TouchableOpacity dark style={mapButton} onPress={() => this._findMe()}>
					<Text style={{ fontWeight: 'bold', color: 'black' }}>Find Me</Text>
				</TouchableOpacity>
				<MapView ref={map => (this.map = map)} region={this.state.region} showsUserLocation={true} onRegionChange={this._updateUserLocation()} style={container}>
					{this.state.markers.map((marker, index) => {
						const scaleStyle = {
							transform: [
								{
									scale: interpolations[index].scale,
								},
							],
						};
						const opacityStyle = {
							opacity: interpolations[index].opacity,
						};
						const { latitude, longitude } = marker;
						const coordinate = {
							latitude,
							longitude,
						};
						return (
							<MapView.Marker key={index} coordinate={coordinate}>
								<Animated.View style={[styles.markerWrap, opacityStyle]}>
									<Animated.View style={[styles.ring, scaleStyle]} />
									<View style={styles.markerIcon} />
								</Animated.View>
								<MapView.Callout>
									<TouchableHighlight onPress={() => this.markerClick()} underlayColor="#dddddd">
										<View style={calloutText}>
											<Text numberOfLines={1}>{marker.title}</Text>
											<Text numberOfLines={1}>{marker.address}</Text>
											<Text numberOfLines={1}>{marker.phone_number}</Text>
											<Text numberOfLines={1}>{marker.distance.toFixed(2)} miles away</Text>
										</View>
									</TouchableHighlight>
								</MapView.Callout>
							</MapView.Marker>
						);
					})}
				</MapView>
				<Animated.ScrollView
					horizontal
					scrollEventThrottle={1}
					showsHorizontalScrollIndicator={false}
					snapToInterval={CARD_WIDTH}
					onScroll={Animated.event(
						[
							{
								nativeEvent: {
									contentOffset: {
										x: this.animation,
									},
								},
							},
						],
						{ useNativeDriver: true }
					)}
					style={scrollView}
					contentContainerStyle={endPadding}>
					{this.state.markers.map((marker, index) => {
						const { phone_number, title, address } = marker;
						return (
							<TouchableHighlight style={card} key={index} onPress={() => this._handleNavigation(marker)}>
								<View style={textContent}>
									<Text numberOfLines={1} style={cardTitle}>
										{title}
									</Text>
									<Text numberOfLines={1} style={cardDescription}>
										{address}
									</Text>
									<Button transparent value={phone_number} onPress={() => this._handleCall(phone_number)}>
										<Text style={cardDescription}>{phone_number}</Text>
									</Button>
								</View>
							</TouchableHighlight>
						);
					})}
				</Animated.ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		position: 'absolute',
		bottom: 30,
		left: 0,
		right: 0,
		paddingVertical: 10,
	},
	endPadding: {
		paddingRight: VIEWPORT_WIDTH - CARD_WIDTH,
	},
	card: {
		padding: 10,
		elevation: 2,
		backgroundColor: '#FFF',
		marginHorizontal: 10,
		shadowColor: '#000',
		shadowRadius: 5,
		shadowOpacity: 0.3,
		shadowOffset: { x: 2, y: -2 },
		elevation: 2,
		height: CARD_HEIGHT,
		width: CARD_WIDTH,
		overflow: 'hidden',
	},
	textContent: {
		flex: 1,
	},
	cardTitle: {
		fontSize: 12,
		marginTop: 5,
		fontWeight: 'bold',
	},
	cardDescription: {
		fontSize: 12,
		color: '#444',
	},
	markerWrap: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	markerIcon: {
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: 'rgba(130,4,150, 0.9)',
	},
	ring: {
		width: 24,
		height: 24,
		borderRadius: 12,
		backgroundColor: 'rgba(130,4,150, 0.3)',
		position: 'absolute',
		borderWidth: 1,
		borderColor: 'rgba(130,4,150, 0.5)',
	},
	calloutText: {
		width: 200,
		height: 'auto',
		flex: 1,
		paddingRight: 5,
		paddingLeft: 5,
	},
	mapButton: {
		width: VIEWPORT_WIDTH,
		height: 50,
		backgroundColor: 'rgba(252, 253, 253, 0.9)',
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0.6,
		elevation: 2,
		zIndex: 12,
	},
	filters: {
		width: VIEWPORT_WIDTH,
		flexDirection: 'row',
		backgroundColor: 'rgba(252, 253, 253, 0.9)',
		opacity: 0.6,
		elevation: 2,
		zIndex: 10,
	},
});

export { AroundMe };
