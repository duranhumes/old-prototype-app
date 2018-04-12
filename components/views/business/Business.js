import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Grid, Row, Col, Button, Text, Icon, Body, Left, Right } from 'native-base';

class Business extends Component {
	render() {
		return (
			<Container>
				<Content>
					<Text style={{ margin: 20 }}>Business</Text>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({});

export { Business };
