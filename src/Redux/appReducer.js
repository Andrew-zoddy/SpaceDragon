//Types

import {dragonAPI} from "./api/dragonEndpoints";
import {setDragon} from "./dragonReducer";

const SET_ERROR_DATA = 'APP/SET_ERROR_DATA'
const SET_SUCCESS = 'APP/SET_SUCCESS'
const SET_LOADING = 'APP/SET_LOADING'
const SET_AUTH = 'SET_AUTH'


//Initial state for reducer
const initialState = {
    error: '',
    success: '',
    loading: false,
    isAuth: localStorage.getItem('isAuth'),
};

//Reducer
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR_DATA:
            return {...state, error: action.payload};
        case SET_SUCCESS:
            return {...state, success: action.payload};
        case SET_LOADING:
            return {...state, loading: action.payload};
        case SET_AUTH:
            return {...state, isAuth: action.payload};
        default:
            return state
    }
};

//thunk
export const loggingIn = (userParams) => async (dispatch) => {
    try {
        dispatch(setError(''))
        dispatch(setSuccess(''))
        dispatch(setLoading(true))
        // setting time out for emulating server delay
        setTimeout(async () => {
            const response = await dragonAPI.logIn(userParams);
            if (response.status === 200) {
                dispatch(setAuth(true))
                localStorage.setItem('token', JSON.stringify(response.data));
                dispatch(setLoading(false))
                dispatch(setSuccess('Hello John)'))

            }
        }, 1000);

    } catch (error) {
        dispatch(setError(error))
    }
};

// Actions
export const setError = (error) => {
    return {
        type: SET_ERROR_DATA,
        payload: error
    }
}
export const setSuccess = (success) => {
    return {
        type: SET_SUCCESS,
        payload: success
    }
}
export const setLoading = (bool) => {
    return {
        type: SET_LOADING,
        payload: bool
    }
}
export const setAuth = (bool) => {
    return {
        type: SET_AUTH,
        payload: bool
    }
}
