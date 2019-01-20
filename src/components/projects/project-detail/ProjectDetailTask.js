import React from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import AssigmentIcon from '@material-ui/icons/Assignment';

import {getProjectTasks} from '../../../store/actions/projectActions';

const styles = theme => ({

})

const ProjectDetailTask = props => {


    const tasksList = props.tasks.map(task => {
        return (
            <ListItem key={task.id}>
                <ListItemIcon><AssigmentIcon /></ListItemIcon>
                <ListItemText primary= {task.name} />
            </ListItem>
        )
    })

    return(
        <List >
           {tasksList}
        </List>
    )
}



export default withStyles(styles)(ProjectDetailTask);





