import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CardSection = props => {
	return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
	containerStyle: {
		borderBottomWidth: 1,
		borderColor: '#ddd',
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative',
	},
});

export { CardSection };
