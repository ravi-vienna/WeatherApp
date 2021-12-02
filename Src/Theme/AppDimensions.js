
import { Dimensions } from 'react-native';

//iphone 6s width : 375
//iphone 11 pro width : 414
// iphone 8 plus width : 414

//iphone 6s height : 667
//iphone 11 pro height : 896
//iphone 8 plus height : 736

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const heightLessNum = deviceHeight < 750;
const heightGreaterNum = deviceHeight > 750;
// const heightLessNum = deviceWidth < 400;
// const heightGreaterNum = deviceWidth > 400;

module.exports = {
    deviceWidth,
    deviceHeight,
    heightLessNum,
    heightGreaterNum
}