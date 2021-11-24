import {
    GET_ALL_PHOTOS,
    GET_ALL_PHOTOS_SUCCESS,
    GET_ALL_PHOTOS_ERROR,
} from '../dispatchTypes'

export const initialState = {
    photos: [],
    isLoading: false,
    errorMessage: ""
}

export const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PHOTOS: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_ALL_PHOTOS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                photos: action.photos
            };
        }
        case GET_ALL_PHOTOS_ERROR: {
            return {
                ...state,
                isLoading: false,
                errorMessage: action.errorMessage
            };
        }
        default:
            return state
    }
}