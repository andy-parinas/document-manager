import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';

import {loadProjects} from '../../store/actions/projectActions';
import EnhancedTable from '../../lib/tables/enhanced-table/EnhancedTable';

// import db from '../../config/Firebase';




const columns = [
    { id: 'name', numeric: false, disablePadding: false, label: 'Project Name' },
    { id: 'siteNumber', numeric: true, disablePadding: false, label: 'Site Number' },
    { id: 'siteName', numeric: true, disablePadding: false, label: 'Site Name' },
    { id: 'assignedToName', numeric: true, disablePadding: false, label: 'Assigned To' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
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
    },
    projectListContent: {
        height: 50,
        marginTop: 30,
        padding: 10
    }
})


class ProjectListComponent extends Component {

    state = {
        projects: []
    }


    componentDidMount(){
        this.props.loadProjects()

        /*
        this.listener = db.collection('projects').onSnapshot(querySnapshot => {
            const data = []
            querySnapshot.forEach((doc) => {
                const document = {
                    id: doc.id,
                    ...doc.data()
                }
                data.push(document);
            });

            this.setState({
                ...this.state,
                projects: [...data]
            })
        })
        */

    }

    componentWillUnmount(){
        // this.listener()
    }

    render(){
        const {classes} = this.props;
        console.log(this.props.projects)
        return(
            <div className='container'>
                <div className={classes.projectListContent}>
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