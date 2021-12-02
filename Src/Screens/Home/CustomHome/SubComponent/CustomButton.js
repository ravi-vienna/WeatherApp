import React, { useEffect, useState } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { AppColors, AppConstants } from "../../../../Theme";
import styles from "./style";
// import { cityDataAction } from "../../Redux/Actions/CityDataActions";
import { connect, useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Temperature, MinMaxTemp, TimeFormat, TimeFormatFull, Wind, Visibility } from "../../../../Support/HelperFunction";
const CustomButton = (props) => {

    const { item } = props
    const units = useSelector(state => state.unitsReducer);

    return(
        <View style={{ flex: 0.15, justifyContent: "center", paddingHorizontal: 15 }}>

        <TouchableOpacity
            onPress={() => props.navigation.navigate('CityForecast', { dailyData: allWeatherData.daily, cityName: cityData.name })}
            style={{ height: 50, backgroundColor: AppColors.Orange, borderRadius: 25, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: AppColors.white, fontSize: 15, fontWeight: "bold" }}>5-day forecast</Text>
        </TouchableOpacity>
    </View>
    )
}

export default CustomButton