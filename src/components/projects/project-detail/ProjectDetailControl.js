import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Tooltip, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const styles = theme => ({
    control: {
        display: 'flex',
        justifyContent: 'space-between'
    }
})

const ProjectDetailControl = props => {

    const {classes, onBack, onEdit, onCopy, onDelete} = props;

    return(
        <div className={classes.control} >
            <Tooltip title='Back'>
                <IconButton aria-label="Edit" onClick={onBack} ><ArrowBackIcon /> </IconButton>
            </Tooltip>
            <div>
                <Tooltip title='Edit'>
                    <IconButton aria-label="Edit" onClick={onEdit} ><EditIcon /> </IconButton>
                </Tooltip>
                <Tooltip title='Copy'>
                    <IconButton aria-label="Copy"><FileCopyIcon /> </IconButton>
                </Tooltip>
                <Tooltip title='Delete'>
                    <IconButton aria-label="Delete"><DeleteIcon /> </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}

export default withStyles(styles)(ProjectDetailControl)