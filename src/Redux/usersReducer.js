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

// thunk
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
 //action
export const setUser = (data) => {
    return {
        type: SET_USERS_DATA,
        payload: data
    }
}