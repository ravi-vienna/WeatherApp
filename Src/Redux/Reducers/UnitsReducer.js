var initialState = { temperature: 0, windspeed: 0, pressure: 0, precipitation: 0, distance: 0, timeformat: 0 };

const unitsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        // Set Temperature Units
        case 'temperature':
        // state = action.payload;
        // console.log(state);      
        return action.payload;

        // Set Wind Speed Units
        case 'windspeed':
        // state = action.payload;
        // console.log(action.payload);      
        return action.payload;

        // Set Pressure Units
        case 'pressure':
        // state = action.payload;
        // console.log(state);      
        return action.payload;

        // Set Precipitation Units
        case 'precipitation':
        // state = action.payload;
        // console.log(state);      
        return action.payload;

        // Set Distance Units
        case 'distance':
        // state = action.payload;
        // console.log(state);      
        return action.payload;

        // Set Time Format Units
        case 'timeformat':
        // state = action.payload;
        // console.log(state);      
        return action.payload;

        case 'setunits':
        // console.log(action.payload);
        // initialState = action.payload;
        return(action.payload);

        default:
        // console.log('default');
        return state;
    }
}

export default unitsReducer;