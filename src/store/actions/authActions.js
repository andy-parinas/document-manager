import React from 'react';

import {auth} from '../../config/Firebase'

export const loginUser = (email, password, callback) => dispatch => {

    auth.signInWithEmailAndPassword(email, password).then(results => {

        console.log(results)

    }).catch(error => {

        console.log(error);
    })


}