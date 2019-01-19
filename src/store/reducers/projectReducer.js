import {PROJECT_LIST, PROJECT_DETAIL} from '../actions/actionTypes'

const initialState = {
    projects: [],
    project: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case PROJECT_LIST:
            return {
                ...state,
                projects: action.projects
            }
        case PROJECT_DETAIL:
            return {
                ...state,
                project: action.project
            }
        default:
            return state
    }



}

export default reducer;