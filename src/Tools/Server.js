import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/"

function postLoginRequest(infos){
    return axios.post(`${BASE_URL}auth/login`, infos)
}

function postSingUpRequest(infos){
    return axios.post(`${BASE_URL}auth/sign-up`, infos)
}

function getTodayTasks(pass){
    return axios.get(`${BASE_URL}habits/today`, pass)
}

function getHabitsList(pass){
    return axios.get(`${BASE_URL}habits`, pass)
}

function postHabit(infos, pass){
    return axios.post(`${BASE_URL}habits`, infos, pass)
}

function postDeleteRequest(id, pass){
    return axios.delete(`${BASE_URL}habits/${id}`, pass);
}

export {
    postLoginRequest,
    postSingUpRequest,
    getTodayTasks,
    getHabitsList,
    postHabit,
    postDeleteRequest
};