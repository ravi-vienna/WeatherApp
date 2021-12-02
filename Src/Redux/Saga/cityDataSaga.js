import { takeLatest, call, put } from "redux-saga/effects";
import axios from "../Axios";
import { apiConstants as types } from "../ActionTypes";
import DataManager from "../../Support/DataManager";
export function* weatherApiFailedSaga(result) {

    yield put({
        type: types.CITY_WEATHER_FAIL,
    })
    setTimeout(() => {
                 
    }, 500)

}

// Generator to run when Authentication Error occured in response
function* weatherApiErrorSaga(result) {
    console.log('errrr', result);
    alert(result.message)
    yield put({
        type: types.CITY_WEATHER_ERROR,
    })

}

export function* cityDataSaga(action) {
    const { payload, navigation } = action;
    console.log('city data saga call', action);
    try {
        const result = yield call(axios.cityData, action.cityName, action.apiKey)
        console.log('cityData--> result', result);
        if (result.status === 1) {
            if(result.result.status == 200){
                DataManager.setCityData(result.result.data,)
                yield put({
                    type: types.CITY_WEATHER_SUCCESS,
                    result: result.result.data,
                })
                console.log('cityData Result', result.result.data);
                const allResult = yield call(axios.allWeatherData, result.result.data.coord.lat,result.result.data.coord.lon, action.apiKey)
               
              
                if(allResult.status == 1){
                    console.log('allResult -->',allResult);
                    if(allResult.result.status == 200){
                        DataManager.setAllData(result.result.data,)
                        yield put({
                            type: types.API_ALL_WEATHER_DATA_SUCCESS,
                            result: allResult.result.data,
                            cityData:result.result.data,
                        })
                    }
                }
            }
        }
        else {
            yield call(weatherApiFailedSaga, result)
        }
    }
    catch (error) {
        yield call(weatherApiErrorSaga, error)
    }
}

export function* searchCitySaga(action) {
    const { payload, navigation } = action;
    console.log('SEARCHcity data saga call', action);
    try {
        const result = yield call(axios.searchCity, action.apiKey, action.cityName)
        console.log('SEARCH cityData--> result', result);
        if (result.status === 1) {
            if(result.result.status == 200){
                yield put({
                    type: types.API_SEARCH_CITY_SUCCESS,
                    result: result.result.data,
                })
                console.log('cityData Result', result.result.data);
            }
        }
        else {
            // yield call(weatherApiFailedSaga, result)
            yield put({
                type: types.API_SEARCH_CITY_FAIL,
            })
        }
    }
    catch (error) {
        // yield call(weatherApiErrorSaga, error)
        yield put({
            type: types.API_SEARCH_CITY_ERROR,
        })
    }
}