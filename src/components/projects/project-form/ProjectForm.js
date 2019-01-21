import React, {Fragment} from 'react'
import {withStyles} from '@material-ui/core/styles';
import { Paper, Typography, TextField, Button } from '@material-ui/core';


const style = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    menu: {
        width: '100%',
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

class ProjectForm extends React.Component {

    state = {
        data: {
            id: '',
            name: '',
            siteNumber: '',
            siteName: '',
            assignedToId: 0
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        console.log('getDeriveStatefromProps')
        if(nextProps.data){
            if(nextProps.data.id !== prevState.data.id){
                console.log('Changing State')
                return {
                    ...prevState,
                   data: {
                       ...prevState.data,
                       id: nextProps.data.id,
                       name: nextProps.data.name,
                       siteNumber: nextProps.data.siteNumber,
                       siteName: nextProps.data.siteName,
                       assignedToId: nextProps.data.assignedToId
                   }
                }
            }
        }

        return null
    }


    onInputChangeHandler = event => {
        const id = event.target.id;
        const value = event.target.value;

        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                [id]: value
            }
        })
    }

    render(){

        console.log(this.state)

        const {classes, onInputChange, onSave, onCancel} = this.props

        return(
            <Fragment>
                <TextField id="name"
                    label="Project Name"
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{shrink: true}}
                    value={this.state.data.name}
                    variant="outlined" onChange={this.onInputChangeHandler} />
                <TextField id="siteNumber"
                    label="Site Number"
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{shrink: true}}
                    value={this.state.data.siteNumber}
                    variant="outlined" onChange={this.onInputChangeHandler} />
                <TextField id="siteName"
                    label="Site Name"
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{shrink: true}}
                    value={this.state.data.siteName}
                    variant="outlined" onChange={this.onInputChangeHandler} />
                 <TextField id="assignedToId"
                    select label="Assigned To"
                    className={classes.textField}
                    SelectProps={{ native: true, MenuProps: { className: classes.menu,}}}
                    margin="normal"
                    InputLabelProps={{ shrink: true}}
                    value={this.state.data.assignedToId}
                    variant="outlined" onChange={this.onInputChangeHandler} >
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
                        className={classes.button} onClick={onSave} > Save </Button>
                <Button variant="contained" 
                        color="secondary" 
                        className={classes.button} onClick={onCancel} > Cancel </Button>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(style)(ProjectForm)