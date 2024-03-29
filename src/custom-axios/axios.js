import axios from "axios";

const instance = axios.create({
    baseURL : 'https://books-backend-application.herokuapp.com/api',
    headers : {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;