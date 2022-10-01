import axios from "axios";


// const requestedUserId = () => {
//     let token = localStorage.getItem('token')
//     let decoded = jwt_decode(token.token);



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

        const updatedUserData =  {
            email:'John@gmail.com',
            username: userParams.username,
            password:'m38rmF$',
            name:{
                firstname: userParams.name,
                lastname: userParams.lastname
            },
            address:{
                city: userParams.address,
                street:'7835 new road',
                number:3,
                zipcode:'12926-3874',
                geolocation:{
                    lat:'-37.3159',
                    long:'81.1496'
                }
            },
            phone: userParams.phone,
        }

        return axios.put(`https://fakestoreapi.com/users/${id}`, updatedUserData)
            .then(response => response)
    },

    deleteUser(id) {
        return axios.delete(`https://fakestoreapi.com/users/${id}`)
            .then(response => response)
    },

}

