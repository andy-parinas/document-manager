import {START_LOADING, END_LOADING, START_SUB_LOADING, END_SUB_LOADING} from '../actions/actionTypes';

const initialState = {
    loading: false,
    subLoading: false
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case START_LOADING:
            return {
                ...state,
                loading: true
            }
        
        case END_LOADING:
            return {
                ...state,
                loading: false
            }
        
        case START_SUB_LOADING:
            return {
                ...state,
                subLoading: true
            }
        
        case END_SUB_LOADING:
            return {
                ...state,
                subLoading: false
            }

        default:
            return state;
    }

}

export default reducer;