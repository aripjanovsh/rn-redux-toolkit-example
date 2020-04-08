import axios from 'axios';
import {API_URL} from '../constants/AppConstants';

const HttpClient = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default HttpClient;
