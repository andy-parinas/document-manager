import React from 'react';
import { CircularProgress } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

// import './LoadScreen.css';

const style = theme => ({
    loading: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
})

const LoadScreen = props => {

    const {classes} = props;

    return (
        <div className={classes.loading}>
            <CircularProgress />
        </div>
    )
}

export default  withStyles(style)(LoadScreen);