const CustomizeTemp = (temp) => {
    return({
        type: 'CustomizeTemp',
        payload: temp
    });
}

const CustomizeWind = (wind) => {
    return({
        type: 'CustomizeWind',
        payload: wind
    });
}

const CustomizePressure = (pressure) => {
    return({
        type: 'CustomizePressure',
        payload: pressure
    });
}

const CustomizePrecipitation = (precipitation) => {
    return({
        type: 'CustomizePrecipitation',
        payload: precipitation
    });
}

const CustomizeDistance = (distance) => {
    return({
        type: 'CustomizeDistance',
        payload: distance
    });
}

const CustomizeTime = (time) => {
    return({
        type: 'CustomizeTimeFormat',
        payload: time
    });
}

const CustomizeUnits = (units) => {
    return({
        type: 'CustomizeUnits',
        payload: units
    });
}
module.exports = {
     CustomizeTemp, 
     CustomizeWind, 
     CustomizePressure, 
     CustomizePrecipitation, 
     CustomizeDistance, 
     CustomizeTime, 
     CustomizeUnits 
    };