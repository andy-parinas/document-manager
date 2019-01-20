import db from '../../config/Firebase';

import {PROJECT_LIST, ADD_PROJECT, PROJECT_DETAIL, START_LOADING, END_LOADING, PROJECT_TASKS, START_SUB_LOADING, END_SUB_LOADING} from './actionTypes'



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

    const docref = db.collection('projects').doc(id);

    docref.get().then(doc => {

        if(doc.exists){

            const tasks = []

            docref.collection('tasks').get().then(collections => {
                
                if(collections.size > 0){
                    collections.forEach(collection => {
                    
                        const task = {
                            id: collection.id,
                            ...collection.data()
                        }
            
                        tasks.push(task)
            
                    })
                }

                const project = {
                    ...doc.data(),
                    tasks: tasks
                }

                dispatch({
                    type: PROJECT_DETAIL,
                    project: project
                })


                dispatch({
                    type: END_LOADING
                })


            })

        }else {
            dispatch({
                type: PROJECT_DETAIL,
                project: null
            })
        }

    }).catch(error => {
        console.log(error);

        dispatch({
            type: END_LOADING
        })
    })




}

export const getProjectTasks = (id) => dispatch => {

    const docRef = db.collection('projects').doc(id);

    docRef.collection('tasks').get().then(collections => {
        
        dispatch({
            type: START_SUB_LOADING
        })


        const data = [];
        
        if(collections.size > 0){
            collections.forEach(collection => {
            
                const task = {
                    id: collection.id,
                    ...collection.data()
                }
    
                data.push(task)
    
            })
        }

        dispatch({
            type: PROJECT_TASKS,
            tasks: data
        })
        

        dispatch({
            type: END_SUB_LOADING
        })



    }).catch(error => {
        console.log(error);

        dispatch({
            type: END_SUB_LOADING
        })

    })

}

