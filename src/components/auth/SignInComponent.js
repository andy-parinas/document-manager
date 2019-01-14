import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import { Grid, Paper, TextField, Typography, Button } from '@material-ui/core';



const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        padding: 20
      },
      formWrapper: {
        //   margin: 'auto',
          marginTop: 120
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
      loginControls: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        margin: 'auto',
        marginTop: 50
      },
      button: {
        margin: theme.spacing.unit,
      },
})



class SignInComponent extends Component {

    

    render(){

        const {classes} = this.props

        return (
            <div className={classes.root}>
                <Grid container spacing={24} justify='center' >
                    <Grid item xs={4} className={classes.formWrapper} >
                        <Paper className={classes.paper}>
                            <Typography variant='h5'>
                                LOGIN
                            </Typography>
                            <div className={classes.loginControls} >
                                <TextField 
                                    id="outlined-email-input"
                                    label="Email"
                                    className={classes.textField}
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined" />

                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    className={classes.textField}
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined" />
                                <Button variant="contained" color="primary" className={classes.button}>
                                    Login
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }


}

export default withStyles(styles)(SignInComponent);