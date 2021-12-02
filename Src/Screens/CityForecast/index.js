import React, { useEffect } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from "../../Component/Header";
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppColors } from "../../Theme";
import styles from "./style";

const CityForecast = (props) => {
// cityscreen
  const dailyData = props.route.params.dailyData
  const cityName = props.route.params.cityName

  useEffect(() => {
    console.log('dailyforecastData==>', dailyData);
  }, [dailyData])

  const getDay = (daily) => {
    var timestamp = daily;
    var a = new Date(timestamp * 1000);
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var dayOfWeek = days[a.getDay()]
    console.log('Day name', dayOfWeek);
    return (dayOfWeek);

  }
  
  // render list hourly

  const renderList = (item) => {
    let dayTemperature = item.feels_like.day - 273.15
    let eveTemperature = item.feels_like.eve - 273.15
    let mornTemperature = item.feels_like.morn - 273.15
    let nightTemperature = item.feels_like.night - 273.15
    return (
      <View style={{ flex: 0.5, width: 95, marginHorizontal: 5.5, borderRadius: 5, backgroundColor: AppColors.backGround1, justifyContent: "space-between" }}>
        <Text style={[styles.listText, { marginTop: 15 }]}>{getDay(item.dt)}</Text>
        <View>
          <FeatherIcon
            name="sun"
            color={AppColors.white}
            size={40}
            style={{
              alignSelf: "center",
              marginBottom: 10
            }}
          />
          <Text style={{ textAlign: "center", color: AppColors.white }}>{item.weather[0].main}</Text>
        </View>
        <View>
          <Text style={styles.listText}>{Math.round(dayTemperature)}°</Text>
          <Text style={{ textAlign: "center", color: AppColors.white }}>Day</Text>
        </View>

        <View>
          <Text style={styles.listText}>{Math.round(nightTemperature)}°</Text>
          <Text style={{ textAlign: "center", color: AppColors.white }}>Night</Text>
        </View>

        <View>
          <Icon
            name="speedometer-medium"
            color={AppColors.white}
            size={40}
            style={{
              alignSelf: "center",
              marginBottom: 10
            }}
          />
          <Text style={{ textAlign: "center", color: AppColors.white }}>{Math.round(item.wind_speed)} km/h</Text>
        </View>

        <View>
          <Text style={styles.listText}>{item.uvi}</Text>
          <Text style={{ textAlign: "center", color: AppColors.white, }}>UV Index</Text>
        </View>

        <View>
          <Text style={styles.listText}>{item.humidity}</Text>
          <Text style={{ textAlign: "center", color: AppColors.white, marginBottom: 15 }}>Humidity</Text>
        </View>

      </View>
    )
  }


  // const renderList = (item) => {
  //     return (

  //     )
  // }

  return (
    <>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#043B5D" translucent={true} />
      <LinearGradient
        colors={[AppColors.backGround1, AppColors.backGround2]}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
      >
        <View style={styles.container}>

          <View style={{ flex: 0.08, marginTop: 30, flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{ flex: 0.15 }}>
              <Icon
                name="arrow-left-circle"
                color={AppColors.backGround2}
                size={35}
                style={{
                  marginTop: 15,
                  alignSelf: "center"
                }}
              />
            </TouchableOpacity>
            <View style={{ flex: 0.7, justifyContent: "center", }}>
              <Text style={styles.title}>{cityName ? cityName : ''}</Text>
            </View>

            <View style={{ flex: 0.15 }}>
            </View>
          </View>
          <View style={{ flex: 0.08, }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: AppColors.white, marginLeft: 15 }}>5-Day Forecast</Text>
          </View>

          <View style={{ flex: 0.74, marginHorizontal: 10 }}>
            <FlatList
              data={dailyData ? dailyData : []}
              renderItem={item => renderList(item.item,)}
              listKey={(item, index) => 'b' + index + item.id.toString()}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ justifyContent: 'center', }}
              horizontal={true}
            />
          </View>



        </View>



      </LinearGradient>
    </>
  )
}
export default CityForecast