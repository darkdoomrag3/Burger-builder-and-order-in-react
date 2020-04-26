import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://burger-bulder-638c4.firebaseio.com/'
})

export default instance;