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
import Header from "../../Component/Header";
import FeatherIcon from 'react-native-vector-icons/Feather';
import { AppColors, AppConstants } from "../../Theme";
import styles from "./style";
import { cityDataAction } from "../../Redux/Actions/CityDataActions";
import { connect, useSelector, useDispatch } from 'react-redux';
import { Loader } from "../../Component/Loader";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import Swiper from 'react-native-swiper'
import { Temperature, MinMaxTemp, TimeFormat, TimeFormatFull, Wind, Visibility } from "../../Support/HelperFunction";
import CustomHome from "./CustomHome";
const Home = (props) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch()
  const units = useSelector(state => state.unitsReducer);
  const cityData = useSelector((state) => state.cityDataReducer.result)
  const allCityData = useSelector((state) => state.cityDataReducer)
  const allWeatherData = useSelector((state) => state.allWeatherDataReducer.result)
  const DataModalArr = useSelector((state) => state.allWeatherDataReducer.DataModalArr)

  const [windSpeed, setWindSpeed] = useState("")
  const [uvIndex, setUvIndex] = useState("")
  const StorageData = useSelector((state) => state.StorageDataReducer.storageData)

  useEffect(() => {
    console.log('useeffect units call', units);
    // dispatch(cityDataAction("Mohali", AppConstants.constants.APIKEY))
  }, [])

  useEffect(() => {
    console.log('cityDataAction useEffect--->', cityData, DataModalArr, allWeatherData);
  }, [cityData, allCityData, DataModalArr])

  useEffect(() => {
    console.log('manage StorageData useEffect--->', StorageData);
  }, [])

  useEffect(() => {
    // alert('isFocused called 1')
    if (isFocused) {
      const searchCityN = props.route.params ? props.route.params.serchCityName ? props.route.params.serchCityName : "" : ""
      console.log('serchCitypsearchCityNCityNameName===>', searchCityN);
      if (searchCityN) {
        // dispatch(cityDataAction(searchCityN, AppConstants.constants.APIKEY))
      }
    }
  }, [props, isFocused])

  useEffect(() => {
    console.log('allWeatherData useEffect--->', allWeatherData);

    // setVisibility(cityData ? cityData.visibility / 1000 : "")
    // getDay(allWeatherData.daily)
  }, [allWeatherData])





  return (
    // <View style={styles.container}>
    //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
    <Swiper style={styles.wrapper} loop={false} showsPagination={true}>
      {
        DataModalArr ? DataModalArr.map((item) => {
          return (
            <>
              <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#043B5D" translucent={true} />
              <CustomHome
                item={item}
                leftClickCustom={() => props.navigation.navigate('ManagesCities')}
              />


            </>
          )
        }) :
          <>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#043B5D" translucent={true} />
            <LinearGradient
              colors={[AppColors.backGround1, AppColors.backGround2]}
              style={styles.linearGradient}
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
            >
              <Text>empty</Text>
            </LinearGradient>
          </>
      }
    </Swiper>
  );
};

export default Home