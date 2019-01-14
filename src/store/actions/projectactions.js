import db from '../../config/Firebase';

import {PROJECT_LIST} from './actionTypes'


export const loadProjects = () => dispatch => {

    db.collection("projects").get().then(results => {
        console.log(results)
    })

}