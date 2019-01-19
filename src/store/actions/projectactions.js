import db from '../../config/Firebase';

import {PROJECT_LIST, ADD_PROJECT, PROJECT_DETAIL, START_LOADING, END_LOADING} from './actionTypes'



export const loadProjects = () => dispatch => {

    const data = []

    dispatch({
        type: START_LOADING
    })

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

        dispatch({
            type: END_LOADING
        })

    }).catch(error => {
        console.log(error)

        dispatch({
            type: END_LOADING
        })

    })
}

export const addProject = (project) => dispatch => {

    db.collection('projects').add(project).then(docRef => {

        docRef.get().then(documentSnapshot => {
            console.log(documentSnapshot.data())
        })

    }).catch(error => {
        console.log(error)

    })
}


export const getProject =(id) => dispatch => {

    dispatch({
        type: START_LOADING
    })

    db.collection('projects').doc(id).get().then(doc => {

        if(doc.exists){
            
            console.log(doc.id);

            dispatch({
                type: PROJECT_DETAIL,
                project: doc.data()
            })

        }else {
            dispatch({
                type: PROJECT_DETAIL,
                project: null
            })
        }

        dispatch({
            type: END_LOADING
        })

    }).catch(error => {
        console.log(error);

        dispatch({
            type: END_LOADING
        })
    })

}

