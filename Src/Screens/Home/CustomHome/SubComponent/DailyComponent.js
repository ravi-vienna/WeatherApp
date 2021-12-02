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
const DailyCounponent = (props) => {

    const { item } = props
    const units = useSelector(state => state.unitsReducer);


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
   
    return (

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

    );
}

export default DailyCounponent