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
icon:{
  height:30,
  width:30,
  alignSelf:"center",
  marginLeft: 15,
},
headerView:{ 
  flex: 0.08, 
  marginTop: 30, 
  flexDirection: "row" 
},
containerView:{ 
  flex: 0.13, 
  marginTop: 15, 
  flexDirection: "row", 
  paddingLeft: 10, 
  marginHorizontal: 15, 
  borderRadius: 10, 
  backgroundColor: AppColors.backGround1,
 },
 listItemView:{
    height: 150, 
    marginTop: 15, 
    marginHorizontal: 15, 
    borderRadius: 10, 
    backgroundColor: 
    AppColors.backGround1, 
  },
  listNameText:{ 
    fontSize: 20, 
    textAlign: "left", 
    marginLeft: 15, 
    fontWeight: 'bold', 
    color: AppColors.white 
  }
})


export default styles