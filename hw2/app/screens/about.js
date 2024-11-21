import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function AboutScreen() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>About This App</Text>
            <Text>This app allows you to browse movie reviews.</Text>
        </View>
    );
}
