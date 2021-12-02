
import DataManager from "../../Support/DataManager";
import {call, put, takeLatest } from 'redux-saga/effects';

export function* Temperature(action){
    const units = yield call(DataManager.getUnits());
    newJSON = { ...units, temperature:action.payload};
    const response = yield call(setUnits, JSON.stringify(newJSON));
    yield put({type: 'temperature', payload: newJSON});
    // console.log('get units ->',units);
}

export function* WindSpeed(action){
    const units = yield call(DataManager.getUnits());
    newJSON = { ...units, windspeed:action.payload};
    const response = yield call(setUnits, JSON.stringify(newJSON));
    // console.log('windspeed', action.payload);
    yield put({type: 'windspeed', payload: newJSON});
}

export function* Pressure(action){
    const units = yield call(DataManager.getUnits());
    newJSON = { ...units, pressure:action.payload};
    const response = yield call(DataManager.setUnits(), JSON.stringify(newJSON));
    // console.log('pressure', action.payload);
    yield put({type: 'pressure', payload:newJSON});
}

export function* Precipitation(action){
    const units = yield call(DataManager.getUnits());
    newJSON = { ...units, precipitation:action.payload};
    const response = yield call(DataManager.setUnits(), JSON.stringify(newJSON));
    // console.log('precipitation', action.payload);
    yield put({type: 'precipitation', payload:newJSON});
}

export function* Distance(action){
    const units = yield call(DataManager.getUnits());
    newJSON = { ...units, distance:action.payload};
    const response = yield call(DataManager.setUnits(), JSON.stringify(newJSON));
    // console.log('distance', action.payload);
    yield put({type: 'distance', payload:newJSON});
}

export function* TimeFormat(action){
    const units = yield call(DataManager.getUnits());
    newJSON = { ...units, timeformat:action.payload};
    const response = yield call(DataManager.setUnits(), JSON.stringify(newJSON));
    // console.log('timeformat', action.payload);
    yield put({type: 'timeformat', payload:newJSON});
}

export function* CustomizeUnits(action){
    // console.log('timeformat', action.payload);
    yield put({type: 'setunits', payload:action.payload});
}

// const CustomizeUnitsSaga = [ 
//     takeLatest('CustomizeTemp', Temperature),
//     takeLatest('CustomizeWind', WindSpeed),
//     takeLatest('CustomizePressure', Pressure),
//     takeLatest('CustomizePrecipitation', Precipitation),
//     takeLatest('CustomizeDistance', Distance),
//     takeLatest('CustomizeTimeFormat', TimeFormat),
//     takeLatest('CustomizeUnits', CustomizeUnits),
// ];

// export default CustomizeUnitsSaga;