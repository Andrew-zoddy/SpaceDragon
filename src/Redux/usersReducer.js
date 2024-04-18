import {setError, setSuccess} from "./appReducer";
import {dragonAPI} from "./api/dragonEndpoints";


const SET_USERS_DATA = 'SET_USERS_DATA';


const initialState = {
    userData: '',
}

// REDUCER
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {...state, userData: action.payload}
        default:
            return state
    }
};

// thunk gets users data
export const getUserData = () => async (dispatch) => {
    try {
        dispatch(setError(''))
        dispatch(setSuccess(''))
        const response = await dragonAPI.getUser();
        if (response.status === 200) {
            dispatch(setUser(response.data))
            dispatch(setSuccess('Your profile data is loaded'))
        }
    } catch (error) {
        dispatch(setError(error))
    }
};
//action to set users data
export const setUser = (data) => {
    return {
        type: SET_USERS_DATA,
        payload: data
    }
}

// update user thunk
export const editUser = (userParams, id) => async (dispatch) => {
    try {
        dispatch(setError(''))
        dispatch(setSuccess(''))
        const response = await dragonAPI.updateUser(userParams, id);
        if (response.status === 200) {
            dispatch(getUserData())
            dispatch(setSuccess(`updated successfully`))
            console.log(response.data)
        }
    } catch (error) {
        dispatch(setError(error))
    }
};
// delete user
export const deleteUser = (id) => async (dispatch) => {
    try {
        dispatch(setError(''))
        dispatch(setSuccess(''))
        const response = await dragonAPI.deleteUser(id);
        if (response.status === 200) {
            dispatch(getUserData())
            dispatch(setSuccess(`Deleted user ${response.data.username} `))
            console.log(response.data)
        }
    } catch (error) {
        dispatch(setError(error))
    }
};
