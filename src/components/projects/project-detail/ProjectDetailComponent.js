import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import {withStyles} from '@material-ui/core/styles';
import { Paper,  Divider, CircularProgress, Typography } from '@material-ui/core';

import ProjectDetailHeader from './ProjectDetailHeader';
import ProjectDetailTask from './ProjectDetailTask';
import ProjectDetailControl from './ProjectDetailControl';
import EditProjectComponent from '../EditProjectComponent'

import {getProject, getProjectTasks} from '../../../store/actions/projectActions';
import LoadScreen from '../../../lib/load-screen/LoadScreen';


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

    state = {
        openEdit: false
    }


    closeDialogHandler = () => {
        this.setState({
            ...this.state,
            openEdit: false
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getProject(id);
    }

    onBackHandler = () => {
        this.props.history.goBack();
    }

    onEditHandler = () => {
        this.setState({
            ...this.state,
            openEdit: true
        })
    }

    onCopyHandler = () => {

    }

    onDeleteHandler = () => {

    }


    render(){

        const id = this.props.match.params.id;
        const {classes} = this.props
        
        let details = <LoadScreen />
        let tasks = ''


      

        if(this.props.project && !this.props.loading) {

            if(this.props.project.tasks.length > 0 ){
                tasks = <ProjectDetailTask  tasks={this.props.project.tasks} />
            }
    
            if(this.props.project.tasks.length === 0){
                tasks =  <Typography variant='h6'> No Tasks Found </Typography>
            }

            details = (
                <Fragment> 
                    <ProjectDetailHeader project={this.props.project} />
                    <Divider className={classes.divider} />

                    { tasks }

                    <Divider className={classes.divider} />
                    <ProjectDetailControl onBack={this.onBackHandler} onEdit={this.onEditHandler} />
                </Fragment>
            )
        }

        if(!this.props.project && !this.props.loading){
           details =  <Typography variant='h5'> Project Not Found </Typography>
        }



        return(
            <div className='container' >
                <Grid container spacing={8}  justify='center' >
                    <Grid item xs={8} className={classes.detailWrapper}>
                        <Paper className={classes.paper}>
                            { details }                             
                        </Paper>
                    </Grid>
                    <EditProjectComponent open={this.state.openEdit} onDialogClose={this.closeDialogHandler} data={this.props.project} />
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        project: state.projects.project,
        loading: state.utility.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProject: (id) => dispatch(getProject(id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
)(ProjectDetailComponent);