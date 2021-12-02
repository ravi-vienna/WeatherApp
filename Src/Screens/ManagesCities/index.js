import React, { useState, useEffect } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    FlatList,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from "../../Component/Header";
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./style";
import { connect, useSelector, useDispatch } from 'react-redux';
import { searchCityDataAction,cityDataAction, deletItemAction  } from "../../Redux/Actions/CityDataActions";
import { Loader } from "../../Component/Loader";
import { AppColors, AppConstants } from "../../Theme";
import { Temperature, MinMaxTemp, } from "../../Support/HelperFunction";

const ManageCities = (props) => {

    const searchCityRedData = useSelector((state) => state.searchCityReducer)
    const searchCityResult = useSelector((state) => state.searchCityReducer.result)
    const searchCitiesArray = useSelector((state) => state.searchCityReducer.searchCities)
    const loader = useSelector((state) => state.searchCityReducer.isLoading)
    const [searchCity, setSearchCity] = useState('')
    const [minTemp, setMinTemp] = useState(searchCityResult != null ? searchCityResult.main.temp_min - 273.15 : "")
    const [maxTemp, setMaxTemp] = useState(searchCityResult != null ? searchCityResult.main.temp_max - 273.15 : "")
    const dispatch = useDispatch();
    const units = useSelector(state => state.unitsReducer);
    const DataModalArr = useSelector((state) => state.allWeatherDataReducer.DataModalArr)
    const StorageData = useSelector((state) => state.StorageDataReducer.storageData)

    
    useEffect(() => {
        console.log('temp min max', minTemp, maxTemp);
        console.log('searchCityResult-->', searchCityResult);
        console.log('searchCitiesArray-->',searchCityRedData, searchCitiesArray);
        setMinTemp(searchCityResult != null ? searchCityResult.main.temp_min - 273.15 : "");
        setMaxTemp(searchCityResult != null ? searchCityResult.main.temp_max - 273.15 : "");
    }, [searchCityResult,searchCityRedData,searchCitiesArray])

    useEffect(() => {
        console.log('manage city useEffect--->',  DataModalArr);
    }, [DataModalArr])

    useEffect(() => {
        console.log('manage StorageData useEffect--->',  StorageData);
    },[])

    const searchCityFun = () => {
        setSearchCity('')
        dispatch(cityDataAction(searchCity,AppConstants.constants.APIKEY))
    }


    const searchCityData = (value) => {
        console.log(value);
        setSearchCity(value)
        // dispatch(searchCityDataAction(AppConstants.constants.APIKEY, value))
    }

    const renderList = (item) => {
        return (
            <TouchableOpacity 
            onPress={() => {props.navigation.navigate('Home' , {serchCityName :  item.name})}}
            style={styles.listItemView}>
                <View style={{ flex: 0.5, justifyContent: 'space-between', alignItems: "center", flexDirection: "row" }}>
                    <Text style={styles.listNameText}>{item.name}</Text>
                    
                  
                     <TouchableOpacity 
                      onPress={() => dispatch(deletItemAction(item.id))}
                     >
                     <Icon
                        name={'minus-circle-outline'}
                        color={AppColors.red}
                        size={25}
                        style={{ marginRight: 15 }}
                    />
                     </TouchableOpacity>
                    {/* <Image source={{ uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }} style={styles.icon} /> */}
                </View>

                <View style={{ flex: 0.5, justifyContent: "center", flexDirection: 'row' }}>
                    <View style={{ flex: 0.6, flexDirection: "row", alignItems: 'center' }}>

                        {item ?
                            <Image source={{ uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }} style={styles.icon} />
                            :
                            <FeatherIcon
                                name={'sun'}
                                color={AppColors.white}
                                size={25}
                                style={{
                                    marginLeft: 15,
                                    alignSelf: "center"
                                }}
                            />
                        }

                        <Text style={{ fontSize: 20, textAlign: "left", marginLeft: 15, color: AppColors.white }}>{item.weather[0].main }</Text>
                    </View>
                    <View style={{ flex: 0.4, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, textAlign: "right", marginRight: 15, color: AppColors.white }}>{MinMaxTemp(item.cityTemp.temp_max, item.cityTemp.temp_min, units.temperature)}°</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#043B5D" translucent={true} />
            <LinearGradient
                colors={[AppColors.backGround1, AppColors.backGround2]}
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
            >
                <View style={styles.container}>
                    <View style={styles.headerView}>
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
                            <Text style={styles.title}>Manage Cities</Text>
                        </View>

                        <View style={{ flex: 0.15 }}>
                        </View>
                    </View>
                    <View style={styles.containerView}>
                        <View style={{ flex: 0.8, justifyContent: "center" }}>
                            <TextInput
                                placeholder='Enter City Name'
                                placeholderTextColor={AppColors.white}
                                style={{ textAlign: 'left', color: AppColors.white }}
                                onChangeText={(value) => searchCityData(value)}
                                value={searchCity}
                            />
                        </View>
                        <TouchableOpacity
                        onPress={() => searchCityFun()}
                        style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }}>
                            <FeatherIcon
                                name="search"
                                color={AppColors.Orange}
                                size={25}
                                style={{
                                    marginTop: 15,
                                    alignSelf: "center"
                                }}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 0.8, }}>
                        

                        <FlatList
                            data={DataModalArr ? DataModalArr : []}
                            renderItem={item => renderList(item.item,)}
                            listKey={(item, index) => 'b' + index + item.id.toString()}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ justifyContent: 'center', }}
                        />

                    </View>
                </View>
                <Loader loading={loader ? loader : false} />
            </LinearGradient>
        </>
    )
}
export default ManageCities