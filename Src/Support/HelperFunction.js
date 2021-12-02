const Temperature = (val,temp) => {
    // console.log(temp);
    if(temp === 0)
    {
        const value = Math.round(val-273.15);
        // console.log(value + '\u00b0C');
        return(value +'\u00b0C');
    }
    if(temp === 1)
    {
        const value = Math.round((val - 273.15) * 9/5 + 32);
        // console.log(value + '\u00b0C');
        return(value + '\u00b0F');
    }
}

const MinMaxTemp = (max,min,temp) => {
    // console.log(temp);
    if(temp === 0)
    {
        const MaxValue = Math.round(max-273.15);
        const MinValue = Math.round(min-273.15);
        // console.log(value + '\u00b0C');
        return(`${MaxValue} / ${MinValue} \u00b0C`);
    }
    if(temp === 1)
    {
        const MaxValue = Math.round((max - 273.15) * 9/5 + 32);
        const MinValue = Math.round((min - 273.15) * 9/5 + 32);
        // console.log(value + '\u00b0C');
        return(`${MaxValue} / ${MinValue} \u00b0F`);
    }
}

const TimeFormat = (val,tf) => {
    // console.log(temp);
    if(tf === 0)
    {
        var date = new Date(val * 1000);
        var hours = date.getHours();
        return(`${hours}:00`);
    }
    if(tf === 1)
    {
        var date = new Date(val * 1000);
        var hours = date.getHours();
        var AmOrPm = hours >= 12 ? 'pm' : 'am';
        hours = (hours % 12) || 12;
        return(`${hours} ${AmOrPm}`);
    }
}

const TimeFormatFull = (val,tf) => {
    // console.log(temp);
    if(tf === 0)
    {
        var date = new Date(val * 1000);
        var hours = date.getHours();
        var minute = date.getMinutes();
        return(`${hours}:${minute}`);
    }
    if(tf === 1)
    {
        var date = new Date(val * 1000);
        var hours = date.getHours();
        var minute = date.getMinutes();
        var AmOrPm = hours >= 12 ? 'pm' : 'am';
        hours = (hours % 12) || 12;
        return(`${hours}:${minute} ${AmOrPm}`);
    }
}

const Wind = (val,speed) => {
    // console.log(speed);
    if(speed === 0){
        newValue = val.toFixed(1);
        return(newValue + ' m/s');
    }
    else if(speed === 1){
        const newValue = (val * 3.6).toFixed(1);
        return(newValue + ' km/h');
    }
    else if(speed === 2){
        const newValue = (val * 2.237).toFixed(1);
        return(newValue + ' mph');
    }
}

const Visibility = (val, distance) => {
    if (distance === 0) {
        newVal = (val / 1000).toFixed(1);
        return (newVal + ' km');
    }
    else if (distance === 1) {
        newVal = (val / 1609).toFixed(1);
        return (newVal + ' mi');
    }
}


module.exports={
    Temperature,
    MinMaxTemp,
    TimeFormat,
    TimeFormatFull,
    Wind,
    Visibility
}