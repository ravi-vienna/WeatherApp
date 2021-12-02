import { StyleSheet } from 'react-native'
import { AppDimensions, AppFonts, AppColors } from '../../Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  linearGradient: {
    width: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: "#fff"
},
listText: {
    textAlign: "center",
    color: AppColors.white,
    fontSize: 25,
    marginBottom: 10,
    fontWeight:"500",
  },
})


export default styles