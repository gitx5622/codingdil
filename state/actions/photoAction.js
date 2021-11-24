import {
    GET_ALL_PHOTOS,
    GET_ALL_PHOTOS_SUCCESS,
    GET_ALL_PHOTOS_ERROR
} from "../dispatchTypes";
import axios from 'axios';


export const getPhotos = async(dispatch) => {
    dispatch({
        type: GET_ALL_PHOTOS
    })
    await axios.get(`${process.env.NEXT_PUBLIC_CODING_INTERVIEW_URL}/photos`)
    .then((response) => {
        console.log(response);
        dispatch({
            type: GET_ALL_PHOTOS_SUCCESS,
            photos: response.data, 
        })
    })
    .catch(error => {
        dispatch({
            type: GET_ALL_PHOTOS_ERROR,
            errorMessage: error.response.data.message,
        });
    })
    .catch(() => {
        dispatch({
            type: GET_ALL_PHOTOS_ERROR,
            errorMessage:
                'Lost connection to the server. Kindly check your internet connection',
        });
    });
}
