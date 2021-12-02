import { apiConstants as types } from "../ActionTypes";



function cityDataAction(cityName, apiKey) {
    
    console.log('called city data action',cityName,apiKey);
    const action = {
        type: types.CITY_WEATHER_LOAD,
        cityName:cityName,
        apiKey:apiKey
    }
    return action;
}

const searchCityDataAction = (apiKey,cityName) => {
    console.log('called search city data action',cityName,apiKey);
    const action = {
        type: types.API_SEARCH_CITY_LOAD,
        apiKey,
        cityName
    }
    return action
}

const setCurentCitiesDataAction = (storageData) => {
    console.log('storageData data action',storageData);
    const action = {
        type: types.SET_STORAGE_DATA,
        storageData
    }
    return action
}

const deletItemAction = (deleteItem) => {
    console.log('storageData data action',deleteItem);
    const action = {
        type: types.Delete_CITY,
        deleteItem
    }
    return action
}





module.exports = {
    cityDataAction,
    searchCityDataAction,
    setCurentCitiesDataAction,
    deletItemAction
}