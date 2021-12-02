import { takeEvery, takeLatest } from 'redux-saga/effects';
import { apiConstants as types } from "../ActionTypes";
import { cityDataSaga, searchCitySaga } from "./cityDataSaga";
import { Temperature, WindSpeed, Pressure, Precipitation,Distance ,TimeFormat, CustomizeUnits } from "./UnitsSaga";
export default function* rootSaga(){    
    yield takeEvery(types.CITY_WEATHER_LOAD ,cityDataSaga)
    yield takeEvery(types.API_SEARCH_CITY_LOAD ,searchCitySaga)
    yield takeEvery('CustomizeTemp', Temperature)
    yield takeEvery('CustomizeWind', WindSpeed)
    yield takeEvery('CustomizePressure', Pressure)
    yield takeEvery('CustomizePrecipitation', Precipitation)
    yield takeEvery('CustomizeDistance', Distance)
    yield takeEvery('CustomizeTimeFormat', TimeFormat)
    yield takeEvery('CustomizeUnits', CustomizeUnits)
}

