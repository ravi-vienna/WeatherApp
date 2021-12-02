import AsyncStorage from '@react-native-async-storage/async-storage';

const DataManager = {

  // method to set access token
  setAccessToken(token) {
    // AsyncStorage.setItem('accessToken', JSON.stringify(token))
  },

  async setStoreData(city) {
    AsyncStorage.setItem('city', JSON.stringify(city))
  },
  async setCityData(cityData) {
    AsyncStorage.setItem('cityData', JSON.stringify(cityData))
  },
  async setAllData(allData) {
    AsyncStorage.setItem('allData', JSON.stringify(allData))
  },

  getCityData() {

    try {
      return AsyncStorage.getItem('cityData').then((cityData) => {
         console.log('StoreResponse===>cityData',cityData);
        return JSON.parse(cityData) 
      })
    } catch (error) {
      console.log('user cityData error', error);
    }
  },

  getAllData() {

    try {
      return AsyncStorage.getItem('allData').then((cityData) => {
         console.log('StoreResponse===>cityData',cityData);
        return JSON.parse(cityData) 
      })
    } catch (error) {
      console.log('user cityData error', error);
    }
  },

  getStore() {

    try {
      return AsyncStorage.getItem('city').then((cityData) => {
         console.log('StoreResponse===>cityData',cityData);
        return JSON.parse(cityData) 
      })
    } catch (error) {
      console.log('user cityData error', error);
    }
  },

  async getUnits() {
    try {
      const value = await AsyncStorage.getItem('units');
      //console.log(JSON.parse(value));
      return (JSON.parse(value));
    } catch (error) {
      console.log(error);
    }
  },


  async setUnitsFirstly() {
    try {
      units = '{ "temperature": 0, "windspeed": 0, "pressure": 0, "precipitation": 0, "distance": 0, "timeformat": 0 }';
      await AsyncStorage.setItem('units', units);
      //console.log(JSON.parse(value));
    } catch (error) {
      console.log(error);
    }
  },


  async setUnits(units) {
    try {
      await AsyncStorage.setItem('units', units);
      //console.log(JSON.parse(value));
    } catch (error) {
      console.log(error);
    }
  },

  // clear storage
  clearLocalStorage() {
    AsyncStorage.multiRemove(['city', 'units',])
  }




}

export default DataManager