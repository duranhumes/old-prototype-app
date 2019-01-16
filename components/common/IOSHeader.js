import React, { Component } from 'react';
import { StyleSheet, Image, View, Dimensions, Animated } from 'react-native';
import { Container, Header, Button, Text, Icon, Body, Left, Right } from 'native-base';
import { SearchBar, CustomText } from './';

const VIEWPORT_WIDTH = Dimensions.get('window').width;

const IOSHeader = props => {
	_handleSearchLoad = () => {
		this.searchBar.show();
	};

	_handleSearchFilter = () => {
		return this.searchBar.getValue();
	};

	_handleDrawer = go => {
		go.navigate('DrawerOpen');
	};

	return (
		<Container style={styles.viewStyle}>
			<SearchBar
				ref={ref => (this.searchBar = ref)}
				animationDuration={350}
				backCloseSize={40}
				placeholder={props.placeholder}
				data={props.data}
				onBlur={() => this.searchBar.hide()}
				handleChangeText={props.text}
				handleSearch={props.search}
				allDataOnEmptySearch
			/>
			<Header style={{ borderBottomWidth: 0, backgroundColor: '#fff' }}>
				<Left>
					{props.hasSearch && (
						<Button transparent dark onPress={() => this._handleSearchLoad()}>
							<Icon name="ios-search" style={styles.icon} />
						</Button>
					)}
				</Left>
				<Body>
					<CustomText style={styles.title}>{props.title}</CustomText>
				</Body>
				<Right>
					<Button transparent dark>
						<Icon name="cloud" />
					</Button>
				</Right>
			</Header>
			{props.tabs}
		</Container>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		height: 60,
		flex: 1,
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: { x: 2, y: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 5,
		elevation: 2,
		position: 'relative',
	},
	icon: {
		fontSize: 24,
		color: '#1f2123',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		color: '#1f2123',
	},
});

export { IOSHeader };
