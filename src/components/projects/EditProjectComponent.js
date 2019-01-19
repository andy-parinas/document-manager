import React from 'react';
import {connect} from 'react-redux'

import ProjectForm from './project-form/ProjectForm';


class EditProjectComponent extends React.Component{

    state = {
        data: {
            name: '',
            siteNumber: '',
            siteName: '',
            assignedToid: ''
        }
    }

    render(){

        return(
            <div>
                Project Edit
            </div>
        )
    }

}