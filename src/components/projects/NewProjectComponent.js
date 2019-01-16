import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { TextField, Grid, Paper, Button, Typography } from '@material-ui/core';


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

const users = [
    {
      value: '123',
      label: 'Andy Parinas',
    },
    {
      value: '456',
      label: 'Stephen Strange',
    },
    {
      value: '789',
      label: 'Tony Stark',
    },
    {
      value: '190',
      label: 'Peter Parker',
    }
  ]; 


class NewProjectComponent extends Component {


    render(){

        const {classes} = this.props;

        return(
            <div className='container'>
               <Grid container spacing={12} justify='center'>
                    <Grid item xs={8} className={classes.formWrapper}>
                        <Paper className={classes.paper}>
                        <Typography variant='h5'> Create New Project </Typography>
                            <TextField id="standard-name"
                                label="Project Name"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"/>
                            <TextField id="standard-name"
                                label="Site Number"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"/>
                            <TextField id="standard-name"
                                label="Site Name"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"/>
                             <TextField id="standard-select-currency-native"
                                select label="Assigned To"
                                className={classes.textField}
                                SelectProps={{ native: true,
                                    MenuProps: { className: classes.menu,},
                                }}
                                margin="normal"
                                variant="outlined" >
                                {users.map(option => (
                                    <option key={option.value} value={option.value}>
                                    {option.label}
                                    </option>
                                ))}
                                </TextField>
                            <div className={classes.formControl} >
                            <Button variant="contained" color="primary" className={classes.button}>
                                Save
                            </Button>
                            <Button variant="contained" color="secondary" className={classes.button}>
                                Cancel
                            </Button>
                            </div>
                        </Paper>
                    </Grid>
               </Grid>
            </div>
        )
    }

}

export default withStyles(styles)(NewProjectComponent);