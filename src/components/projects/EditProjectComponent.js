import React from 'react';
import {connect} from 'react-redux'

import ProjectForm from './project-form/ProjectForm';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

import {loadUsers} from '../../store/actions/userActions';
import {updateProject} from '../../store/actions/projectActions';


class EditProjectComponent extends React.Component{


    componentDidMount(){
        this.props.loadUsers();
    }

    onProjectSaveHandler = (data) => {

        const user = this.props.users.find(u => {
            return u.id === data.assignedToId 
        })

        const project = {
            name: data.name,
            siteNumber: data.siteNumber,
            siteName: data.siteName,
            assignedToId: data.assignedToId,
            assignedToName: `${user.firstName} ${user.lastName}`
        }

        this.props.updateProject(data.id, project, () => {
            this.props.onDialogClose();
            this.props.openSnackbar();
        });
    }

    render(){

        return(
            <Dialog open={this.props.open} onClose={this.props.onDialogClose} >
                <DialogTitle> Edit Project </DialogTitle>
                <DialogContent>
                    <ProjectForm users={this.props.users} 
                        data={this.props.data} 
                        onSave={this.onProjectSaveHandler}
                        onCancel={this.props.onDialogClose} />
                </DialogContent>
            </Dialog>
        )
    }

}


const mapStateToProps = state => {
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => dispatch(loadUsers()),
        updateProject: (id, data, callback) => dispatch(updateProject(id, data, callback))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectComponent)