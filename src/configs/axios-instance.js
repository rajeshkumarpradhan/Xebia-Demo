import axios from 'axios';

let axiosInstance = axios.create({
  baseURL: 'https://swapi.dev/api'
})

export default axiosInstance;