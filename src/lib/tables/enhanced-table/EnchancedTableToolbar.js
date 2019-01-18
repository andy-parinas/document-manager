import React from 'react';

import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete';
import RefreshIcon from '@material-ui/icons/Refresh'
import FilterListIcon from '@material-ui/icons/FilterList';
import FileCopyIcon from '@material-ui/icons/FileCopy';
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
    },
    toolTip: {
        display: 'flex'
    }
})

const EnhancedTableToolbar = props => {

    const { classes, numSelected, tableTitle } = props;

    const title = numSelected > 0 ? (
        <Typography color='inherit' variant='subtitle1'> { numSelected } Selected </Typography>
    ) : (
        <Typography variant='h6' id='tableTitle'> { tableTitle } </Typography>
    )


    let toolTip = ( <Tooltip title='Filter'>
                        <IconButton aria-label='Filter'>
                            <RefreshIcon />
                        </IconButton>
                    </Tooltip>)

    if(numSelected === 1){
        toolTip = (
            <div className={classes.toolTip}>
                <Tooltip title='Copy'>
                    <IconButton aria-label='Duplicate'>
                        <FileCopyIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Delete'>
                    <IconButton aria-label='Delete'>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </div>
        )
    }else if (numSelected > 1) {
        toolTip = (
            <Tooltip title='Delete'>
                <IconButton aria-label='Delete'>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        )
    }

    // const toolTip = numSelected > 0 ? (
    
    // ) : (
    //     <Tooltip title='Filter'>
    //         <IconButton aria-label='Filter'>
    //             <RefreshIcon />
    //         </IconButton>
    //     </Tooltip>
    // )

    return (
        <ToolBar className={classes.root}>
            <div className={classes.title}> {title} </div>
            <div className={classes.spacer} />
            <div className={classes.actions}> {toolTip} </div>
        </ToolBar>
    )


}

export default withStyles(styles)(EnhancedTableToolbar);