import axios from 'axios';

const connection = axios.create({
    baseURL: 'https://ibook-api.herokuapp.com',
});

export default connection;
