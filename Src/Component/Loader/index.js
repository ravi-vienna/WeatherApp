import React from "react";
import {
    StyleSheet,
    View,
    Modal,
    StatusBar,
    ActivityIndicator,
    Platform
} from 'react-native';
import { AppColors } from "../../Theme";
export const Loader = (props) => {
    const {
        loading,
        ...attributes
    } = props;
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
            onRequestClose={() => {
                // console.log('close modal') 
            }}>

            <View style={styles.modalBackground}>
                {/* {(Platform.OS === 'ios') ? <StatusBar backgroundColor={'#3493b7'} style={{ flex: 1, }}  barStyle="dark-content" /> : null} */}
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator color={AppColors.Orange}
                        size={"large"}
                        animating={true} />
                </View>
            </View>
        </Modal>
    )
}



 
const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000070'
    },
    activityIndicatorWrapper: {
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});