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

// import { Loader } from "../../Component/Loader";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useIsFocused } from '@react-navigation/native';
// import Swiper from 'react-native-swiper'
import { Temperature, MinMaxTemp, TimeFormat, TimeFormatFull, Wind, Visibility } from "../../../Support/HelperFunction";
const CustomHome = (props) => {

    const units = useSelector(state => state.unitsReducer);
    const cityData = useSelector((state) => state.cityDataReducer.result)
    const {
        item,
        leftClickCustom
    } = props

    useEffect(() => {
       console.log('CustomHome item===>', item); 
    },[item])

    const getDay = (daily) => {
        var timestamp = daily;
        var a = new Date(timestamp * 1000);
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var dayOfWeek = days[a.getDay()]
        return (dayOfWeek);
    }



    const renderListTwo = (item) => {

        return (
            <View style={styles.innerView}>
                <View style={styles.iconView}>
                    {/* <FeatherIcon
              name="sun"
              color={AppColors.white}
              size={25}
            /> */}
                    <Image source={{ uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }} style={styles.icon} />
                </View>
                <View style={styles.innerTextView}>
                    <Text style={styles.dayText}>{getDay(item.dt)} - Clear</Text>
                </View>
                <View style={styles.tempInnerView}>
                    <Text style={{ color: AppColors.white, fontSize: 20, }}>{MinMaxTemp(item.temp.max, item.temp.min, units.temperature)}</Text>
                </View>
            </View>
        );
    }

    const renderList = (item) => {

        let unix_timestamp = item.dt
        var date = new Date(unix_timestamp * 1000);
        // part from the timestamp
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2);

        let temperature = item.temp - 273.15

        const mps_to_kmph = (mps) => {
            return (Math.round(3.6 * mps));
            // kmph to mps
            //return (0.277778 * kmph);
        }

        return (
            <View style={{ flex: 1, width: 65, marginHorizontal: 5.5, justifyContent: "center" }}>
                {/* <Text style={styles.listText}>{allWeatherData.hourly[0].dt == item.dt ? "Now" : formattedTime}</Text> */}
                <Text style={styles.listText}>{TimeFormat(item.dt, units.timeformat)} </Text>
                <Image source={{ uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }} style={styles.icon} />
                <Text style={styles.listText}>{Temperature(item.temp, units.temperature)}°</Text>
                <Icon
                    name="speedometer-medium"
                    color={AppColors.white}
                    size={25}
                    style={{
                        alignSelf: "center",
                        marginBottom: 10
                    }}
                />

                <Text style={styles.listText}>{Wind(item.wind_speed, units.windspeed)}</Text>
            </View>
        )
    }

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
                    <View style={{ flex: 0.15, }}>
                      
                         <Image source={{ uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }} style={styles.icon2} />
                        <Text style={{ textAlign: "center", fontSize: 20, color: AppColors.white }}>{item.weather[0].main}</Text>

                      <Text style={styles.feelText}>Air speed {item.wind.speed} m/s</Text>
                    </View>
                    

                    <View style={{ flex: 0.1, }}>
                        {/* <Text style={styles.tempText}> static 25°C</Text> */}
                        <Text style={styles.tempText}>{Temperature(item.cityTemp.temp, units.temperature)}</Text>
                        <Text style={styles.feelText}>Feels like {Temperature(item.cityTemp.feels_like, units.temperature)}</Text>
                    </View>

                    <View style={styles.listView}>
                        <FlatList
                            data={item ? item.hourly : []}
                            renderItem={item => renderList(item.item,)}
                            listKey={(item, index) => 'b' + index + item.id.toString()}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ justifyContent: 'center', }}
                            horizontal={true}
                        />
                    </View>

                    <View style={styles.weatherView}>
                        <View style={styles.tommorowWeatherView}>

                            <FlatList
                                data={item ? item.daily : []}
                                renderItem={item => renderListTwo(item.item,)}
                                listKey={(item, index) => 'b' + index + item.id.toString()}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ justifyContent: 'center', }}

                            />
                        </View>

                        <View style={styles.windHumidity}>
                            <View style={{ flex: 0.5, }}>
                                <View style={{ flex: 0.5, justifyContent: "center", paddingLeft: 15 }}>
                                    <Text style={[styles.listText, { marginBottom: 0, textAlign: "left" }]}>Wind</Text>
                                    <Text style={{ color: AppColors.white, fontSize: 20, textAlign: "left" }}>{Wind(item.wind.speed, units.windspeed)}</Text>
                                </View>
                                <View style={{ flex: 0.5, justifyContent: "center", paddingLeft: 15 }}>
                                    <Text style={[styles.listText, { marginBottom: 0, textAlign: "left" }]}>UV index</Text>
                                    <Text style={{ color: AppColors.white, fontSize: 20, textAlign: "left" }}>{item.daily[0].uvi}</Text>
                                </View>
                            </View>

                            <View style={{ flex: 0.5, }}>
                                <View style={{ flex: 0.5, justifyContent: "center", paddingRight: 15 }}>
                                    <Text style={[styles.listText, { marginBottom: 0, textAlign: "right" }]}>Humidity</Text>
                                    <Text style={{ color: AppColors.white, fontSize: 20, textAlign: "right" }}>{item.cityTemp.humidity} %</Text>
                                </View>
                                <View style={{ flex: 0.5, justifyContent: "center", paddingRight: 15 }}>
                                    <Text style={[styles.listText, { marginBottom: 0, textAlign: "right" }]}>Visibility</Text>
                                    <Text style={{ color: AppColors.white, fontSize: 20, textAlign: "right" }}>{Visibility(item.visibility, units.distance)}</Text>
                                </View>
                            </View>

                        </View>

                    </View>

                    <View style={{ flex: 0.15, justifyContent: "center", paddingHorizontal: 15 }}>

                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('CityForecast', { dailyData: allWeatherData.daily, cityName: cityData.name })}
                            style={{ height: 50, backgroundColor: AppColors.Orange, borderRadius: 25, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: AppColors.white, fontSize: 15, fontWeight: "bold" }}>5-day forecast</Text>
                        </TouchableOpacity>
                    </View>


                </View>
                {/* <Loader loading={allCityData ? allCityData.isLoading : false} /> */}
            </LinearGradient>
        </>

    );
};

export default CustomHome