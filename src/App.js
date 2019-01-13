import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Switch, Route} from 'react-router-dom';

import NavComponent from './components/layouts/navigations/NavComponent';
import ProjectListComponent from './components/projects/ProjectListComponent';
import NewProjectComponent from './components/projects/NewProjectComponent';
import UserListComponent from './components/users/UserListComponent';
import NewUserComponent from './components/users/UserListComponent';


class App extends Component {
  render() {
    return (
     <Fragment>
       <CssBaseline />
        <div className="App">
          <NavComponent />
          <div className='content'>
            <Switch>
              <Route path='/projects/all' component={ProjectListComponent} />
              <Route path='/projects/new' component={NewProjectComponent} />
              <Route path='/users/all' component={UserListComponent} />
              <Route path='/users/new' component={NewUserComponent} />
            </Switch>
          </div>
        </div>
     </Fragment>
    );
  }
}

export default App;
