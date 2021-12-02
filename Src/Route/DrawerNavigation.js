import React, { useEffect } from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from "../Component/DrawerContent";
import HomeStack from "./HomeStack";
import { StyleSheet, useWindowDimensions } from 'react-native';
import DataManager from "../Support/DataManager";
import { cityDataAction, setCurentCitiesDataAction } from "../Redux/Actions/CityDataActions";
import { connect, useSelector, useDispatch } from 'react-redux';
import { AppColors, AppConstants } from "../Theme";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    const dimensions = useWindowDimensions();
    const dispatch = useDispatch()
    useEffect(async () => {
        // DataManager.clearLocalStorage()
        const StoreResponse = await DataManager.getStore();
        console.log('StoreResponse===>1111',StoreResponse );
        if (StoreResponse !== null) {
            console.log('StoreResponse===>2222',StoreResponse );
         
            dispatch(setCurentCitiesDataAction(StoreResponse))
            const units = await DataManager.getUnits();
           
            console.log('StoreResponse units-->', units);
            if (units === null) {
                await DataManager.setUnitsFirstly();
            }
            else {
                dispatch({ type: 'CustomizeUnits', payload: units });
            }
        }
        else {
            alert('else')
            dispatch(cityDataAction("Mohali", AppConstants.constants.APIKEY))
            await DataManager.setUnitsFirstly();
        }
    }, [])

    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{
                header: () => null,
                drawerPosition: "right",
                drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
            }}
        >
            <Drawer.Screen name="HomeStack" component={HomeStack} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator