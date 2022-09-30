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

// updating user thunk

export const editUser = (userParams, id) => async (dispatch) => {
    try {
        dispatch(setError(''))
        dispatch(setSuccess(''))
        const response = await dragonAPI.updateUser(userParams, id);
        if (response.status === 200) {
            dispatch(setSuccess(`Very  successfully edited ${response.data.title} =).`))
            dispatch(getUserData())


        }
    } catch (error) {
        dispatch(setError(error))

    }
};
