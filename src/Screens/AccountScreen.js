import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function AccountScreen() {


    return (
        <View style={styles.container}>
            <Text>Hello Account</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%'
    },
});