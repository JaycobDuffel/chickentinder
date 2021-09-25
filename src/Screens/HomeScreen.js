import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {


    return (
        <View style={styles.container}>
            <Text>Hello Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'limegreen',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%'
    },
});