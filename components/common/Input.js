import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secure }) => {
	const { inputStyles, labelStyles, containerStyle } = styles;
	return (
		<View style={containerStyle}>
			<Text style={labelStyles}>{label}</Text>
			<TextInput
				autoCorrect={false}
				value={value}
				secureTextEntry={secure && true}
				placeholder={placeholder}
				onChangeText={onChangeText}
				style={inputStyles}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputStyles: {
		color: '#000',
		paddingLeft: 5,
		paddingRight: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2,
	},
	labelStyles: {
		fontSize: 18,
		paddingLeft: 20,
		color: '#ddd',
		flex: 1,
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export { Input };
