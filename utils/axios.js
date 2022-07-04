import axios from 'axios';

// let url = "http://192.168.0.13:8000/api"
let url="http://192.168.0.59:8002/api";
if (process.env.NODE_ENV === 'production')
{
  url = "https://apex.calcgen.com/api"
}

axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  crossDomain: true
});

