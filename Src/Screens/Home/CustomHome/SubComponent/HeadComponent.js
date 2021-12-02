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
const HeadComponent = (props) => {

    const { item } = props
    const units = useSelector(state => state.unitsReducer);

    return (
        <View style={{ flex: 0.25, }}>
            <Image source={{ uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }} style={styles.icon2} />
            <Text style={{ textAlign: "center", fontSize: 20, color: AppColors.white }}>{item.weather[0].main}</Text>
            <Text style={styles.feelText}>Air speed {item.wind.speed} m/s</Text>
            <Text style={styles.tempText}>{Temperature(item.cityTemp.temp, units.temperature)}</Text>
            <Text style={styles.feelText}>Feels like {Temperature(item.cityTemp.feels_like, units.temperature)}</Text>
        </View>
    )
}

export default HeadComponent