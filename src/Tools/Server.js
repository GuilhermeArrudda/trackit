import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/"

function LoginRequest(infos){
    return axios.post(`${BASE_URL}auth/login`, infos)
}

function SingUpRequest(infos){
    return axios.post(`${BASE_URL}auth/sign-up`, infos)
}

export {
    LoginRequest,
    SingUpRequest
};