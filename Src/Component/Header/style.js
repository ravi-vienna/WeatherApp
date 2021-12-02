import { StyleSheet } from 'react-native'
import { AppDimensions, AppFonts, AppColors } from '../../Theme'; 

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        justifyContent: 'center',
        backgroundColor: "#043B5D",
        marginTop: 30,
        flexDirection: "row"

    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: "#fff"
    },
    leftIconView:{ 
        flex: 0.15, 
        justifyContent:"center", 
        alignItems:"center" 
    },
    titleView:{ 
        flex: 0.7, 
    },
    linearGradient: {
        width: "100%",
        height: 50 ,
        justifyContent: 'center',
        alignItems: "center"
      },
})

export default styles