import {SEARCH_LIST_CHANGED,
    SEARCH_LIST_FAILED,
    SEARCH_LIST_SUCCESS} from '../actions/Types';

const INITIAL_STATE = { 
    user: '',
    listSearch: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_LIST_CHANGED:
            return { ...state, user: action.payload };
        case SEARCH_LIST_SUCCESS:
            return {...state, listSearch: action.payload }
        case SEARCH_LIST_FAILED:
            return {...state, listSearch: []}
        default:
            return state;
    }
};