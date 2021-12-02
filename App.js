/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {

  StyleSheet,
  useWindowDimensions
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from "./Src/Screens/Home";
import ManagesCities from "./Src/Screens/ManagesCities";
import CityForecast from "./Src/Screens/CityForecast";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from "./Src/Route/HomeStack";
import DrawerContent from "./Src/Component/DrawerContent";
import { Provider } from "react-redux";
import { configureStore } from "./Src/Redux";
import DataManager from "./Src/Support/DataManager";
import { AppColors, AppConstants } from "./Src/Theme";
import DrawerNavigation from "./Src/Route/DrawerNavigation";
const Drawer = createDrawerNavigator();

const App = () => {
  const dimensions = useWindowDimensions();
  const store = configureStore()

  const Stack = createNativeStackNavigator();
  useEffect(() => {
    SplashScreen.hide()
  }, [])





  return (
    <Provider store={store}>
      <NavigationContainer>
       
        <DrawerNavigation/>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
