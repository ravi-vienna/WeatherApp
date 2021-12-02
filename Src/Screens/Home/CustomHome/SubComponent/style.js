import { StyleSheet } from 'react-native'
import { AppDimensions, AppFonts, AppColors } from '../../../../Theme';

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
  hello: {
    fontSize: 20,
  },
  tempText: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: AppColors.white
  },
  listText: {
    textAlign: "center",
    color: AppColors.white,
    fontSize: 16,
    marginBottom: 10
  },
  weatherView: {
    flex: 0.35,
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  tommorowWeatherView: {
    backgroundColor: AppColors.backGround1,
    flex: 0.45,
    borderRadius: 10,
    justifyContent: 'space-around'
  },
  innerView: {
    // flex: 0.5,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  iconView: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  innerTextView: {
    flex: 0.5,
    justifyContent: "center",
    // alignItems: "center"
  },
  tempInnerView: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  windHumidity: {
    backgroundColor: AppColors.backGround1,
    flex: 0.5,
    borderRadius: 10,
    flexDirection: "row"
  },
  dayText: {
    color: AppColors.white,
    fontSize: 20,
    textAlign: "left"
  },
  icon: {
    height: 25,
    width: 25,
    alignSelf: "center"
  },
  icon2: {
    height: 45,
    width: 45,
    alignSelf: "center"
  },
  feelText: {
    textAlign: 'center',
    fontSize: 15,
    color: AppColors.white
  },
  listView: {
    flex: 0.25,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default styles