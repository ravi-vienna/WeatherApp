import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppColors } from "../../Theme";
import styles from "./style";
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons';;
const Header = (props) => {
    const {
        title,
        leftIcon,
        rightIcon,
        leftClick,
        rightClick
    } = props
    return (
     
        <View style={styles.container}>
            <TouchableOpacity
            onPress={leftClick}
            style={styles.leftIconView}>
                <Icon
                    name={leftIcon}
                    color={AppColors.backGround2}
                    size={25}
                />
            </TouchableOpacity>
            <View style={styles.titleView}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity 
            onPress={rightClick}
            style={styles.leftIconView }>
            <Ionicons
                    name={rightIcon}
                    color={AppColors.backGround2}
                    size={25}
                />
            </TouchableOpacity>
        </View>
    );
};



export default Header