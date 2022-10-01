import {dragonAPI} from "./api/dragonEndpoints";
import {setError, setLoading, setSuccess} from "./appReducer";


const SET_DRAGON_DATA = 'SET_DRAGON_DATA';
const SET_ALL_DRAGONS = 'SET_ALL_DRAGONS';


const initialState = {
    dragonData: JSON.parse(localStorage.getItem('dragonData')) || [],
    allDragons: JSON.parse(localStorage.getItem('allDragonsData')) || [],
}


// REDUCER
export const dragonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DRAGON_DATA:
            return {...state, dragonData: action.payload}
        case SET_ALL_DRAGONS:
            return {...state, allDragons: action.payload};
        default:
            return state
    }
};
// getting Dragon 1 data actions + thunk
export const getDragonsData = () => async (dispatch) => {
    try {
        dispatch(setError(''))
        dispatch(setSuccess(''))
        dispatch(setLoading(true))
            const response = await dragonAPI.getDragonData();
            if (response.status === 200) {
                localStorage.setItem('dragonData', JSON.stringify(response.data));
                dispatch(setDragon(response.data))
                dispatch(setLoading(false))
                dispatch(setSuccess('Dragons Loaded!)'))
            }


    } catch (error) {
        dispatch(setError(error))
    }
};

export const setDragon = (data) => {
    return {
        type: SET_DRAGON_DATA,
        payload: data
    }
}
//================================================
// setTimeout(async () => {  }, 1000);
// getting  all dragons data actions + thunk
export const getAllDragonsData = () => async (dispatch) => {
    try {
        dispatch(setError(''))
        dispatch(setSuccess(''))
        // setting time out for emulating server delay (just for making spinner visible)

            const response = await dragonAPI.getAllDragons();
            if (response.status === 200) {
                localStorage.setItem('allDragonsData', JSON.stringify(response.data));
                dispatch(setAllDragons(response.data))

            }


    } catch (error) {
        dispatch(setError(error))
    }
};

export const setAllDragons = (data) => {
    return {
        type: SET_ALL_DRAGONS,
        payload: data
    }
}

//=================================================
