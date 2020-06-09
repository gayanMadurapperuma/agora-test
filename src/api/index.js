import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://localhost:5430/v1/',
  timeout: 5000,
  headers: {
    accept: '*/*',
    'accept-encoding': 'gzip, deflate, br',
    'cache-control': 'no-cache',
    connection: 'keep-alive',
    'content-length': '0',
    host: 'localhost:5430',
    'Content-Type': 'application/json',
  },
});

export default Instance;
