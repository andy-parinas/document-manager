import {PROJECT_LIST} from '../actions/actionTypes'

const initialState = {
    projects: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case PROJECT_LIST:
            return {
                ...state,
                projects: action.projects
            }
        default:
            return state
    }



}

export default reducer;