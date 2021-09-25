import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from 'expo-constants';

import MessagesScreen from '../Screens/MessagesScreen';
import AccountScreen from '../Screens/AccountScreen';

const TopTab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
    return (
        <TopTab.Navigator screenOptions={{ tabBarActiveTintColor: 'orange', headerShown: false }} style={{marginTop: Constants.statusBarHeight}}>
            <TopTab.Screen
                name="Group"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={24} />
                    ),
                    tabBarShowLabel: false
                }}
            />
            <TopTab.Screen
                name="Messages"
                component={MessagesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chat-processing" color={color} size={24} />
                    ),
                    tabBarShowLabel: false
                }}
            />
        </TopTab.Navigator>
    );
};