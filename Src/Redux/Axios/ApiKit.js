import axios from "axios";
import { AppConstants } from "../../Theme";

const http =  axios.create({
  baseURL:"https://api.openweathermap.org/data/2.5/"
});

http.interceptors.request.use(async (config)=> {
    config.headers['Content-Type'] = 'application/json';
  return config;
});

export default http