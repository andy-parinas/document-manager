import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import AssigmentIcon from '@material-ui/icons/Assignment';

const styles = theme => ({

})

const ProjectDetailTask = props => {

    return(
        <List >
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
    )
}

export default withStyles(styles)(ProjectDetailTask)