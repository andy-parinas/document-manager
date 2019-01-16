import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import { TextField, Grid, Paper, Button, Typography } from '@material-ui/core';


import {loadUsers} from '../../store/actions/userActions';
import {addProject} from '../../store/actions/projectActions';

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

    }

    render(){
        const {classes} = this.props;

        return(
            <div className='container'>
               <Grid container spacing={16} justify='center'>
                    <Grid item xs={8} className={classes.formWrapper}>
                        <Paper className={classes.paper}>
                        <Typography variant='h5'> Create New Project </Typography>
                            <TextField id="name"
                                label="Project Name"
                                className={classes.textField}
                                margin="normal"
                                InputLabelProps={{shrink: true}}
                                variant="outlined" onChange={this.handleInputChange} />
                            <TextField id="siteNumber"
                                label="Site Number"
                                className={classes.textField}
                                margin="normal"
                                InputLabelProps={{shrink: true}}
                                variant="outlined" onChange={this.handleInputChange} />
                            <TextField id="siteName"
                                label="Site Name"
                                className={classes.textField}
                                margin="normal"
                                InputLabelProps={{shrink: true}}
                                variant="outlined" onChange={this.handleInputChange} />
                             <TextField id="assignedToId"
                                select label="Assigned To"
                                className={classes.textField}
                                SelectProps={{ native: true, MenuProps: { className: classes.menu,}}}
                                margin="normal"
                                InputLabelProps={{ shrink: true}}
                                variant="outlined" onChange={this.handleInputChange} >
                                    <option value={0}></option>
                                    {this.props.users.map(user => (
                                        <option key={user.id} value={user.id}>
                                        {user.firstName} {user.lastName}
                                        </option>
                                    ))}
                                </TextField>
                            <div className={classes.formControl} >
                            <Button variant="contained" 
                                    color="primary" 
                                    className={classes.button} onClick={this.handleSaveEvent} > Save </Button>
                            <Button variant="contained" 
                                    color="secondary" 
                                    className={classes.button} onClick={this.handleCancelEvent} > Cancel </Button>
                            </div>
                        </Paper>
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