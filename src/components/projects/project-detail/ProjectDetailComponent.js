import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import { Paper,  Divider } from '@material-ui/core';

import ProjectDetailHeader from './ProjectDetailHeader';
import ProjectDetailTask from './ProjectDetailTask';
import ProjectDetailControl from './ProjectDetailControl';

const styles = theme => ({
    detailWrapper: {
        marginTop: 30
    },
    paper: {
        padding: 20
    },
    divider: {
        marginTop: 20,
        marginBottom: 20
    },
   
})



class ProjectDetailComponent extends React.Component {


    render(){

        const {classes} = this.props

        return(
            <div className='container' >
                <Grid container spacing={8}  justify='center' >
                    <Grid item xs={8} className={classes.detailWrapper}>
                        <Paper className={classes.paper}>
                            
                            <ProjectDetailHeader />

                            <Divider className={classes.divider} />

                            <ProjectDetailTask />
                            
                            <Divider className={classes.divider} />

                            <ProjectDetailControl />
                                                     
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default withStyles(styles)(ProjectDetailComponent);