import React from 'react';

import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';



const styles = theme => ({
    root: {
        paddingRight: theme.spacing.unit,
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    spacer: {
      flex: '1 1 100%',
    },
    actions: {
      color: theme.palette.text.secondary,
    },
    title: {
      flex: '0 0 auto',
    }
})

const EnhancedTableToolbar = props => {

    const { classes, numSelected, tableTitle } = props;

    const title = numSelected > 0 ? (
        <Typography color='inherit' variant='subtitle1'> { numSelected } Selected </Typography>
    ) : (
        <Typography variant='h6' id='tableTitle'> { tableTitle } </Typography>
    )

    const toolTip = numSelected > 0 ? (
        <Tooltip title='Delete'>
            <IconButton aria-label='Delete'>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    ) : (
        <Tooltip title='Filter'>
            <IconButton aria-label='Filter'>
                <FilterListIcon />
            </IconButton>
        </Tooltip>
    )

    return (
        <ToolBar className={classes.root}>
            <div className={classes.title}> {title} </div>
            <div className={classes.spacer} />
            <div className={classes.actions}> {toolTip} </div>
        </ToolBar>
    )


}

export default withStyles(styles)(EnhancedTableToolbar);