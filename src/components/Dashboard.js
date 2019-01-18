import React, {Fragment} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import NavComponent from './layouts/navigations/NavComponent';
import ProjectListComponent from './projects/ProjectListComponent';
import NewProjectComponent from './projects/NewProjectComponent';
import UserListComponent from './users/UserListComponent';
import NewUserComponent from './users/UserListComponent';
import { AuthUserContext } from '../config/context';
import withAuthorization from '../hoc/withAuthorization';

import {logoutUser} from '../store/actions/authActions';
import ProjectDetailComponent from './projects/project-detail/ProjectDetailComponent';

class Dashboard extends React.Component {

    static contextType = AuthUserContext;


    handleLogout = () => {
        this.props.logoutUser(() => this.props.history.push('/login'))
    }

    render(){
        console.log('Context ', this.context);
        return (
           <Fragment>
                <NavComponent onLogout={this.handleLogout}  />
                <div className='content'>
                    <Switch>
                        <Route path='/projects/all' component={ProjectListComponent} />
                        <Route path='/projects/new' component={NewProjectComponent} />
                        <Route path='/projects/:id' component={ProjectDetailComponent} />
                        <Route path='/users/all' component={UserListComponent} />
                        <Route path='/users/new' component={NewUserComponent} />
                        <Redirect to='/projects/all' from='/' />
                    </Switch>
                </div>
           </Fragment>
        )
    }


}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: (callback) => dispatch(logoutUser(callback))
    }
}

export default withAuthorization(
    connect(null, mapDispatchToProps)(Dashboard));



