import React from 'react';
import Grid from '@material-ui/core/Grid'
import deepPurple from '@material-ui/core/colors/deepPurple';
import {withStyles} from '@material-ui/core/styles';
import { Paper, Typography, Avatar, FormHelperText, Chip, Divider, List, ListItem, ListItemIcon, ListItemText, TextField, IconButton, Tooltip } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import AssigmentIcon from '@material-ui/icons/Assignment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const styles = theme => ({
    detailWrapper: {
        marginTop: 30
    },
    paper: {
        padding: 20
    },
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
        marginLeft: 60
    },
    typography: {
        marginLeft: 5,
        marginRight: 20
    },
    avatar: {
        margin: 10,
        color: '#fff',
    },
    chip: {
        marginRight: 10
    },
    divider: {
        marginTop: 20,
        marginBottom: 20
    },
    list: {
        // marginLeft: 60
    },
    control: {
        display: 'flex',
        justifyContent: 'space-between'
    }
})



class ProjectDetailComponent extends React.Component {


    render(){

        const {classes} = this.props

        return(
            <div className='container' >
                <Grid container spacing={8}  justify='center' >
                    <Grid item xs={8} className={classes.detailWrapper}>
                        <Paper className={classes.paper}>
                            <div className={classes.mainTitle} >
                                <div className={classes.titleHeading}>
                                    <Avatar className={classes.avatar}><WorkIcon /> </Avatar>
                                    <Typography variant='h4' className={classes.typography}> Project Title </Typography>
                                </div>
                            </div>
                            <div className={classes.subtitle} >
                                <Typography variant='body1'>Site Number: </Typography>
                                <Typography className={classes.typography} variant='subtitle2'>QLD-12312312</Typography>
                                <Typography variant='body1'>Site Name: </Typography>
                                <Typography className={classes.typography} variant='subtitle2'>Gold Coast Site A1</Typography>
                            </div>

                            <Divider className={classes.divider} />

                            <List className={classes.list} >
                                <ListItem>
                                    <ListItemIcon><AssigmentIcon /></ListItemIcon>
                                    <ListItemText primary='Task Item 1' />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><AssigmentIcon /></ListItemIcon>
                                    <ListItemText primary='Task Item 2' />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><AssigmentIcon /></ListItemIcon>
                                    <ListItemText primary='Task Item 3' />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><AssigmentIcon /></ListItemIcon>
                                    <ListItemText primary='Task Item 4' />
                                </ListItem>
                            </List>
                            
                            <Divider className={classes.divider} />
                            <div className={classes.control} >
                                <Tooltip title='Back'>
                                    <IconButton aria-label="Edit"><ArrowBackIcon /> </IconButton>
                                </Tooltip>
                                <div>
                                    <Tooltip title='Edit'>
                                        <IconButton aria-label="Edit"><EditIcon /> </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Copy'>
                                        <IconButton aria-label="Copy"><FileCopyIcon /> </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Delete'>
                                        <IconButton aria-label="Delete"><DeleteIcon /> </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default withStyles(styles)(ProjectDetailComponent);