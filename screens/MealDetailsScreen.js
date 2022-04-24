import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function MealDetailsScreen({ route, navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.foo}>ID: {route}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    foo: {
        fontSize: 30,
    }
})    

export default MealDetailsScreen;