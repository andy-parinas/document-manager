import React, {Fragment} from 'react';


import {withStyles} from '@material-ui/core/styles'
import { Avatar, Typography } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';

const styles = theme => ({
    mainTitle: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    titleHeading: {
        display: 'flex',
        alignItems: 'center'
    },
    subtitle: {
        display: 'flex',
        alignItems: 'center',
        width: 600,
        marginTop: 10,
        marginLeft: 50
    },
    typography: {
        marginLeft: 5,
        marginRight: 20
    },
})


const ProjectDetailHeader = props => {

    const {classes, project} = props;

    return(
       <Fragment>
        <div className={classes.mainTitle} >
            <div className={classes.titleHeading}>
                <Avatar className={classes.avatar}><WorkIcon /> </Avatar>
                <Typography variant='h4' className={classes.typography}> {project.name} </Typography>
            </div>
        </div>
        <div className={classes.subtitle} >
            <Typography variant='body1'>Site Number: </Typography>
            <Typography className={classes.typography} variant='subtitle2'>{project.siteNumber}</Typography>
            <Typography variant='body1'>Site Name: </Typography>
            <Typography className={classes.typography} variant='subtitle2'> {project.siteName} </Typography>
        </div>
       </Fragment>
    )
}

export default withStyles(styles)(ProjectDetailHeader)