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
const HourlyCounponent = (props) => {

    const { item } = props
    const units = useSelector(state => state.unitsReducer);

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

        <View style={styles.listView} >
            <FlatList
                data={item ? item : []}
                renderItem={item => renderList(item.item,)}
                listKey={(item, index) => 'b' + index + item.id.toString()}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ justifyContent: 'center', }}
                horizontal={true}
            />
        </View>



    );
}

export default HourlyCounponent