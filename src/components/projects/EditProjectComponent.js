import React from 'react';
import {connect} from 'react-redux'

import ProjectForm from './project-form/ProjectForm';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

import {loadUsers} from '../../store/actions/userActions';


class EditProjectComponent extends React.Component{

    state = {
        data: {
            id: '',
            name: '',
            siteNumber: '',
            siteName: '',
            assignedToid: ''
        }
    }

    componentDidMount(){
        this.props.loadUsers();
    }

    render(){

        return(
            <Dialog open={this.props.open} onClose={this.props.onDialogClose} >
                <DialogTitle> Edit Project </DialogTitle>
                <DialogContent>
                    <ProjectForm users={this.props.users} 
                        data={this.props.data} 
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
        loadUsers: () => dispatch(loadUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectComponent)