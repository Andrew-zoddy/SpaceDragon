import axios from "axios";

export const dragonAPI = {

    getDragonData() {
        return axios.get('https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f')
            .then(response => response)
    },
    getAllDragons() {
        return axios.get('https://api.spacexdata.com/v4/dragons')
            .then(response => response)
    },
    logIn(userParams) {
        return axios.post('https://fakestoreapi.com/auth/login', {username: userParams.username, password: userParams.password} )
            .then(response => response)
    },
    getUser() {
        return axios.get('https://fakestoreapi.com/users/1')
            .then(response => response)
    },
    updateUser(userParams,id) {

        return axios.put(`https://fakestoreapi.com/users/${id}`, {...userParams})
            .then(response => response)
    },
}

