import { combineReducers } from 'redux';
import { cityDataReducer,allWeatherDataReducer,searchCityReducer,StorageDataReducer  } from "./CityDataReducer";
import  unitsReducer  from "./UnitsReducer";
const appReducer = combineReducers({
    cityDataReducer,
    allWeatherDataReducer,
    searchCityReducer,
    unitsReducer,
    StorageDataReducer
})

const rootReducer = (state, action) => {
    if(action.type === 'API_LOGOUT_SUCCESS'){

    }
    return appReducer(state, action)
}

export default rootReducer