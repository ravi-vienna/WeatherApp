import { Dimensions, Platform } from 'react-native';
let widthDevice = Dimensions.get('window').width;

const fontSizes = {
    "twelve":(widthDevice > 400) ? 10 : 9,
    "thirteen": 13,
    "fourteen": (widthDevice > 400) ? 12 : 10, //30
    "sixteen": (widthDevice > 400) ? 14 : 12,
    "seventeen": (widthDevice > 400) ? 15 : 13,
    "eightteen": (widthDevice > 400) ? 16 : 14, // 50
    "twenty": (widthDevice > 400) ? 18 : 16, //55
    "twentyTwo": (widthDevice > 400) ? 20 : 18, //60,
    "twentyFour": (widthDevice > 400) ? 22 : 20, //65
    "twentySix": (widthDevice > 400) ? 24 : 22, //70
}
// const fontSizes = {
//     "twelve": 12,
//     "thirteen": 13,
//     "fourteen": (widthDevice > 400) ? 14 : 12, //30
//     "sixteen": (widthDevice > 400) ? 16 : 14,
//     "eightteen": (widthDevice > 400) ? 18 : 16, // 50
//     "twenty": (widthDevice > 400) ? 20 : 18, //55
//     "twentyTwo": (widthDevice > 400) ? 22 : 20, //60,
//     "twentyFour": (widthDevice > 400) ? 24 : 22, //65
//     "twentySix": (widthDevice > 400) ? 26 : 24, //70
// }

const fontFamily = {
    medium: "",
    regular: "",
    donketStone : ""
}

const fontWeight = {
    'bold': 'bold'
}

module.exports = {
    fontSizes,
    fontFamily,
    fontWeight
}