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


    render(){

        const {classes, onInputChange, onSave, onCancel} = this.props

        return(
            <Fragment>
                <TextField id="name"
                    label="Project Name"
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{shrink: true}}
                    variant="outlined" onChange={onInputChange} />
                <TextField id="siteNumber"
                    label="Site Number"
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{shrink: true}}
                    variant="outlined" onChange={onInputChange} />
                <TextField id="siteName"
                    label="Site Name"
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{shrink: true}}
                    variant="outlined" onChange={onInputChange} />
                 <TextField id="assignedToId"
                    select label="Assigned To"
                    className={classes.textField}
                    SelectProps={{ native: true, MenuProps: { className: classes.menu,}}}
                    margin="normal"
                    InputLabelProps={{ shrink: true}}
                    variant="outlined" onChange={onInputChange} >
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