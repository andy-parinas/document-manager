import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import { TextField, Grid, Paper, Button, Typography } from '@material-ui/core';


import {loadUsers} from '../../store/actions/userActions';
import {addProject} from '../../store/actions/projectActions';
import ProjectForm from './project-form/ProjectForm';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    menu: {
        width: '100%',
    },
    formWrapper: {
        marginTop: 50
    },
    paper: {
        color: theme.palette.text.secondary,
        padding: 50
      },
    button: {
        margin: theme.spacing.unit,
    },
    formControl: {
        marginTop: 10
    }
})


class NewProjectComponent extends Component {

    state = {
        data: {
            name: '',
            siteNumber: '',
            siteName: '',
            assignedToId: ''
        }
    }

    componentDidMount(){
        this.props.loadUsers()
    }

    handleInputChange = (event) => {
        const id = event.target.id;
        const value = event.target.value

        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                [id]: value
            }
        })
    }

    handleSaveEvent = () => {

        const selectedUser = this.props.users.find(user => {
            return user.id === this.state.data.assignedToId
        })
        const project = {
            ...this.state.data,
            assignedToName: `${selectedUser.firstName} ${selectedUser.lastName}`
        }

        this.props.addProject(project);
    }

    handleCancelEvent = () => {
        this.props.history.push('/projects/all');
    }

    render(){
        const {classes} = this.props;

        return(
            <div className='container'>
               <Grid container spacing={0} justify='center'>
                    <Grid item xs={8} className={classes.formWrapper}>
                       <ProjectForm onInputChange={this.handleInputChange}
                            users={this.props.users} 
                            onSave={this.handleSaveEvent} 
                            onCancel={this.handleCancelEvent} />
                    </Grid>
               </Grid>
            </div>
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
        addProject: (project) => dispatch(addProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewProjectComponent));