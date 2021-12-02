import { apiConstants as types } from "../ActionTypes";
import DataManager from "../../Support/DataManager";
const initialState = {
    isLoading: false,
    result: null,
    errorState: null,
    isExpired: null,
    status: 0,
    fcmToke: "",
    result: null,
    searchCities: [],
    allWeatherDataArr: [],
    DataModalArr: [],
    cityResult: null,
    storageData:[]

}

// cityDataReducer 
const cityDataReducer = (state = initialState, action) => {
    console.log('city data REDUCER=---->', action);
    switch (action.type) {

        case types.CITY_WEATHER_LOAD:
            return { ...state, isLoading: true };

        case types.CITY_WEATHER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                result: action.result,
                cityResult: action.result,
            };
        case types.CITY_WEATHER_FAIL:
            return { ...state, isLoading: false, };

        case types.CITY_WEATHER_ERROR:
            return { ...state, isLoading: false };

        default:
            return state;
    }
}

const createDataModal = (allData, cityData) => {
    console.log('weather data modal', allData, cityData);
    
    const manageData =  {
            "daily":allData.daily,
            "hourly":allData.hourly,
            "weather":cityData.weather,
            "cityTemp":cityData.main,
            "visibility":cityData.visibility,
            "name":cityData.name,
            "id":cityData.id,
            "wind":cityData.wind,
            "dt":cityData.dt
        }
      
        console.log('manageData->',manageData);
    return manageData
}

const deleteItem = (deleteItem, stateArray) => {
    console.log('deleteItem, stateArraya modal', deleteItem, stateArray);
    for(let i of stateArray){
        console.log('for loop item', i.id);
        if(i.id == deleteItem.id){
            stateArray.splice(stateArray[i],1)
        }
    }
    console.log('stateArray==>', stateArray);
    return stateArray
}

// cityDataReducer 
const allWeatherDataReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.API_ALL_WEATHER_DATA_LOAD:
            return { ...state, isLoading: true };

        case types.API_ALL_WEATHER_DATA_SUCCESS:
            console.log('action.result,action.cityData==>', action.result, action.cityData);
            DataManager.setStoreData([...state.DataModalArr,createDataModal(action.result, action.cityData)])
            return {
                ...state,
                isLoading: false,
                result: action.result,
                DataModalArr: [...state.DataModalArr,createDataModal(action.result, action.cityData)]
            };
        case types.API_ALL_WEATHER_DATA_FAIL:
            return { ...state, isLoading: false, };

        case types.API_ALL_WEATHER_DATA_ERROR:
            return { ...state, isLoading: false };

            case types.Delete_CITY:
                let oldData = [...state.DataModalArr]
                let item = oldData.find(ele => ele.id == action.deleteItem)
                if(item != undefined){
                    oldData.splice(oldData.indexOf(item), 1)
                }
                return{
                    ...state, 
                    isLoading: false,
                    DataModalArr: oldData
                }

                case types.SET_STORAGE_DATA:
                    console.log('action.storage data in reducer', action.storageData);
                    return { 
                        ...state, 
                        isLoading: true ,
                        storageData:action.storageData,
                        DataModalArr:action.storageData,
                    };
        

        default:
            return state;
    }
}

// searchCityDataReducer 
const searchCityReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.API_SEARCH_CITY_LOAD:
            return { ...state, isLoading: true };

        case types.API_SEARCH_CITY_SUCCESS:
            console.log('allWeatherDataReducer data REDUCER=---->', action.result);
            return {
                ...state,
                isLoading: false,
                searchCities: [...state.searchCities, action.result],
                DataModalArr: [...state.DataModalArr,createDataModal(action.result, action.cityData)]
            };
        case types.API_SEARCH_CITY_FAIL:
            return { ...state, isLoading: false, };

        case types.API_SEARCH_CITY_ERROR:
            return { ...state, isLoading: false };

        default:
            return state;
    }
}

// searchCityDataReducer 
const StorageDataReducer = (state = initialState, action) => {

    switch (action.type) {

    
      

        default:
            return state;
    }
}

module.exports = {
    cityDataReducer,
    allWeatherDataReducer,
    searchCityReducer,
    StorageDataReducer
}
