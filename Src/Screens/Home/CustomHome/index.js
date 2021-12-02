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
import Header from "../../../Component/Header";
import FeatherIcon from 'react-native-vector-icons/Feather';
import { AppColors, AppConstants } from "../../../Theme";
import styles from "./style";
// import { cityDataAction } from "../../Redux/Actions/CityDataActions";
import { connect, useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HourlyCounponent from "./SubComponent/HourlyComponent";
import { Temperature, MinMaxTemp, TimeFormat, TimeFormatFull, Wind, Visibility } from "../../../Support/HelperFunction";
import DailyComponent from "./SubComponent/DailyComponent";
import CustomButton from "./SubComponent/CustomButton";
import HeadComponent from "./SubComponent/HeadComponent";
const CustomHome = (props) => {

    const units = useSelector(state => state.unitsReducer);
    const cityData = useSelector((state) => state.cityDataReducer.result)
    const {
        item,
        leftClickCustom
    } = props

    useEffect(() => {
        console.log('CustomHome item===>', item);
    }, [item])




    return (
        // <View style={styles.container}>
        //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


        <>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#043B5D" translucent={true} />
            <LinearGradient
                colors={[AppColors.backGround1, AppColors.backGround2]}
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
            >
                <Header
                    title={item.name}
                    leftIcon={"plus-circle"}
                    rightIcon={"options"}
                    leftClick={leftClickCustom}
                    rightClick={() => props.navigation.toggleDrawer()}
                />
                <View style={styles.container}>
                    <HeadComponent item={item} />
                    <HourlyCounponent item={item.hourly} />
                    <DailyComponent item={item} />
                    <CustomButton item={item} />

                </View>
            </LinearGradient>
        </>

    );
};

export default CustomHome