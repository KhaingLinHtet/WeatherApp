import axios from 'axios';

export const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5"
})

export const api_key = '839d79d3b36d7828d55a11117f1ded27'