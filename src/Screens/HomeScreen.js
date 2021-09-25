import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {


    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%'
    },
});