import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Button } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
    const { email, id, name } = route.params;

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>{ email }</Text>
            <Text>ID: { id }</Text>
            <Text>{ name }</Text>
            <Button title='Go Home'
            onPress={()=> navigation.navigate("Players")}>
            </Button>
        </View>
    );
}
