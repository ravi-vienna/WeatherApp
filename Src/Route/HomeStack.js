import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from "react-native";
import Home from "../Screens/Home";
import CityForecast from "../Screens/CityForecast";
import ManagesCities from "../Screens/ManagesCities";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Hometack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Hometack.Navigator
            screenOptions={{
                header: () => null
            }}
            options={{ gestureEnabled: true }}
            initialRouteName={'Home'}
        >

            <Hometack.Screen options={{
                gesturesEnabled: false,
                headerTransparent: true,
                header: () => null
            }} name="CityForecast" component={CityForecast}
            />

            <Hometack.Screen options={{
                gesturesEnabled: false,
                headerTransparent: true,
                header: () => null
            }} name="ManagesCities" component={ManagesCities}
            />

            <Hometack.Screen options={{
                gesturesEnabled: false,
                headerTransparent: true,
                header: () => null
            }} name="Home" component={Home}
            />


        </Hometack.Navigator>
    )
}

export default HomeStack