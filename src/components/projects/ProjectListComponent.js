import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';

import {loadProjects} from '../../store/actions/projectActions';

import EnhancedTable from '../../lib/tables/enhanced-table/EnhancedTable';




const columns = [
    { id: 'name', numeric: false, disablePadding: false, label: 'Project Name' },
    { id: 'siteNumber', numeric: true, disablePadding: false, label: 'Site Number' },
    { id: 'siteName', numeric: true, disablePadding: false, label: 'Site Name' },
    { id: 'assignedTo', numeric: true, disablePadding: false, label: 'Assigned To' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
  ];

const data = [
    {id: 1, name: 'Project 1', siteNumber: '123456', siteName: 'Site A1', assignedTo: 'John Doe', status: 'ongoing'},
    {id: 2, name: 'Project 2', siteNumber: '123456', siteName: 'Site A1', assignedTo: 'John Doe', status: 'ongoing'},
    {id: 3, name: 'Project 3', siteNumber: '123456', siteName: 'Site A1', assignedTo: 'John Doe', status: 'ongoing'},
    {id: 4, name: 'Project 4', siteNumber: '123456', siteName: 'Site A1', assignedTo: 'John Doe', status: 'ongoing'},
    {id: 5, name: 'Project 5', siteNumber: '123456', siteName: 'Site A1', assignedTo: 'John Doe', status: 'ongoing'},
    {id: 6, name: 'Project 6', siteNumber: '123456', siteName: 'Site A1', assignedTo: 'John Doe', status: 'ongoing'},
    {id: 7, name: 'Project 7', siteNumber: '123456', siteName: 'Site A1', assignedTo: 'John Doe', status: 'ongoing'},
    {id: 8, name: 'Project 8', siteNumber: '123456', siteName: 'Site A1', assignedTo: 'John Doe', status: 'ongoing'},
    {id: 9, name: 'Project 9', siteNumber: '123456', siteName: 'Site A1', assignedTo: 'John Doe', status: 'ongoing'}
  ];

const styles = theme => ({
    textField: {
        flex: 1,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    },
    projectListSearch: {
        display: 'flex',
        alignItems: 'center'
    }
})


class ProjectListComponent extends Component {


    componentDidMount(){
        this.props.loadProjects()
    }

    render(){
        const {classes} = this.props;
        console.log(this.props.projects)
        return(
            <div className='container'>
                <div className='project-list-content'>
                    <div className={classes.projectListSearch}>
                        <TextField id="standard-search" label="Search Project"
                            type="search" className={classes.textField}  margin="normal" />
                        <Button variant="contained" color="primary">
                            Search
                        </Button>
                    </div>               
                    <div className='project-list-table'>
                        <EnhancedTable columns={columns} data={this.props.projects} />
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        projects: state.projects.projects
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadProjects: ()=>dispatch(loadProjects())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProjectListComponent));