import db from '../../config/Firebase';

import {PROJECT_LIST} from './actionTypes'


export const loadProjects = () => dispatch => {

    const data = []

    db.collection("projects").get().then(querySnapshot => {

        querySnapshot.forEach((doc) => {
            const document = {
                id: doc.id,
                ...doc.data()
            }
            data.push(document);
        });

        dispatch({
            type: PROJECT_LIST,
            projects: data
        })


    }).catch(error => {
        console.log(error)

    })



}