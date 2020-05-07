import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-2d6c3.firebaseio.com/'
});

export default instance;