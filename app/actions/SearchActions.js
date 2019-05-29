import axios from 'axios';
import {SEARCH_LIST_CHANGED, SEARCH_LIST_SUCCESS, SEARCH_LIST_FAILED} from './Types';
import {host} from '../config/configServer';


export const handleSearchChanged = (text) => {
    return {
        type: SEARCH_LIST_CHANGED,
        payload: text
    };
  };

export const searchList = (user) => {
    return (dispatch) => {  
           
            axios.get(`${host}q=${user}`)
              .then( resp => {
                  dispatch({type: SEARCH_LIST_SUCCESS, payload: resp['data']['items']})
               
              })
              .catch(err => {
                dispatch({type: SEARCH_LIST_FAILED, payload: err})   
              });
       
    };
};