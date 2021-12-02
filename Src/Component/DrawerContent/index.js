import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const DrawerContent = ({ navigation }) => {
    const dispatch = useDispatch();

    const units = useSelector(state => state.unitsReducer);
    useEffect(() => {
        console.log('DrawerContent unitsunits', units);
    }, [units])
    return (
        <>


            <StatusBar backgroundColor="#043B5D" barStyle="light-content" />
            <View style={{ flex: 1, paddingTop: 20, backgroundColor: '#033453' }}>
                <View>
                    <Text style={{ fontSize: 18, marginLeft: 20,marginTop:25, color: '#e0e0e0', marginBottom: 50, fontFamily: 'Lato-Regular' }}>Settings</Text>
                </View>
                <Text style={{ fontSize: 13, marginLeft: 20, color: '#e0e0e0', fontFamily: 'Lato-Regular' }}>Temperature</Text>
                <View style={styles.innerView}>

                    <ButtonGroup
                        onPress={(val) => dispatch({ type: 'CustomizeTemp', payload: val })}
                        selectedIndex={units.temperature}
                        buttons={[`\xB0C`, `\xB0F`]}
                        containerStyle={{ height: 45, width: '50%', borderColor: '#FF9328', borderWidth: 2 }}
                        selectedButtonStyle={{ backgroundColor: '#FF9328' }}
                        buttonStyle={{ backgroundColor: '#043B5D' }}
                    />
                </View>

                <Text style={{ fontSize: 13, marginLeft: 20, color: '#e0e0e0', fontFamily: 'Lato-Regular' }}>Wind speed</Text>
                <View style={styles.innerView}>

                    <ButtonGroup
                        onPress={(val) => dispatch({ type: 'CustomizeWind', payload: val })}
                        selectedIndex={units.windspeed}
                        buttons={[`m/s`, `km/h`, `mph`]}
                        containerStyle={{ height: 45,marginTop:20, width: '75%', borderColor: '#FF9328', borderWidth: 2 }}
                        selectedButtonStyle={{ backgroundColor: '#FF9328' }}
                        buttonStyle={{ backgroundColor: '#043B5D' }}
                    />
                </View>

                <Text style={{ fontSize: 13, marginLeft: 20, color: '#e0e0e0', fontFamily: 'Lato-Regular' }}>Pressure</Text>
                <View style={styles.innerView}>

                    <ButtonGroup
                        onPress={(val) => dispatch({ type: 'CustomizePressure', payload: val })}
                        selectedIndex={units.pressure}
                        buttons={[`hPa`, `inHg`]}
                        containerStyle={{ height: 45,marginTop:20, width: '50%', borderColor: '#FF9328', borderWidth: 2 }}
                        selectedButtonStyle={{ backgroundColor: '#FF9328' }}
                        buttonStyle={{ backgroundColor: '#043B5D' }}
                    />
                </View>

                <Text style={{ fontSize: 13, marginLeft: 20, color: '#e0e0e0', fontFamily: 'Lato-Regular' }}>Precipitation</Text>
                <View style={styles.innerView}>

                    <ButtonGroup
                        onPress={(val) => dispatch({ type: 'CustomizePrecipitation', payload: val })}
                        selectedIndex={units.precipitation}
                        buttons={[`mm`, `in`]}
                        containerStyle={{ height: 45,marginTop:20, width: '50%', borderColor: '#FF9328', borderWidth: 2 }}
                        selectedButtonStyle={{ backgroundColor: '#FF9328' }}
                        buttonStyle={{ backgroundColor: '#043B5D' }}
                    />
                </View>

                <Text style={{ fontSize: 13, marginLeft: 20, color: '#e0e0e0', fontFamily: 'Lato-Regular' }}>Distance</Text>
                <View style={styles.innerView}>

                    <ButtonGroup
                        onPress={(val) => dispatch({ type: 'CustomizeDistance', payload: val })}
                        selectedIndex={units.distance}
                        buttons={[`km`, `mi`]}
                        containerStyle={{ height: 45,marginTop:20, width: '50%', borderColor: '#FF9328', borderWidth: 2 }}
                        selectedButtonStyle={{ backgroundColor: '#FF9328' }}
                        buttonStyle={{ backgroundColor: '#043B5D' }}
                    />
                </View>

                <Text style={{ fontSize: 13, marginLeft: 20, color: '#e0e0e0', fontFamily: 'Lato-Regular' }}>Time format</Text>
                <View style={styles.innerView}>

                    <ButtonGroup
                        onPress={(val) => dispatch({ type: 'CustomizeTimeFormat', payload: val })}
                        selectedIndex={units.timeformat}
                        buttons={[`24`, `12`]}
                        containerStyle={{ height: 45,marginTop:20, width: '50%', borderColor: '#FF9328', borderWidth: 2 }}
                        selectedButtonStyle={{ backgroundColor: '#FF9328' }}
                        buttonStyle={{ backgroundColor: '#043B5D' }}
                    />
                </View>

            </View>

        </>
    );
}

const styles = StyleSheet.create({
    innerView: {

        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,


    }
});


export default DrawerContent;