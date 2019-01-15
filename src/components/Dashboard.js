import React, {Fragment} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import NavComponent from './layouts/navigations/NavComponent';
import ProjectListComponent from './projects/ProjectListComponent';
import NewProjectComponent from './projects/NewProjectComponent';
import UserListComponent from './users/UserListComponent';
import NewUserComponent from './users/UserListComponent';
import { AuthUserContext } from '../config/context';
import withAuthorization from '../hoc/withAuthorization';

class Dashboard extends React.Component {

    static contextType = AuthUserContext;

    render(){
        console.log('Context ', this.context);
        return (
           <Fragment>
                <NavComponent />
                <div className='content'>
                    <Switch>
                        <Route path='/projects/all' component={ProjectListComponent} />
                        <Route path='/projects/new' component={NewProjectComponent} />
                        <Route path='/users/all' component={UserListComponent} />
                        <Route path='/users/new' component={NewUserComponent} />
                        <Redirect to='/projects/all' from='/' />
                    </Switch>
                </div>
           </Fragment>
        )
    }


}

export default withAuthorization(Dashboard);



