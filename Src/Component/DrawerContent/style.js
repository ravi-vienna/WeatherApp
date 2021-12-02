import { StyleSheet } from 'react-native'
import { AppDimensions, AppFonts, AppColors } from '../../Theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor:
            AppColors.backGround1
    },
    containerView: {
        padding: 30,
        marginBottom: 30,
        backgroundColor: AppColors.backGround1
    },
    settText: {
        fontSize: 25,
        color: '#fff',
        marginBottom: 40
    },
    listContainer: {
        marginBottom: 40
    },
    labelText: {
        fontSize: 15,
        color: '#fff'
    },
    btn1View: {
        width: '75%',
        flexDirection: 'row',
        height: 45,
        borderWidth: 2,
        borderColor: AppColors.Orange,
        marginTop: 15,
        borderRadius: 5
    },
    button: {
        flex: 0.5,
        backgroundColor: AppColors.Orange,
        justifyContent: "center"
    }
})

export default styles