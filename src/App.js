import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Switch, Route} from 'react-router-dom';

import SignInComponent from './components/auth/SignInComponent';
import Dashboard from './components/Dashboard';

import withAuthentication from './hoc/withAuthentication';


class App extends Component {

    state = {
      auth: false
    }

    render() {
      
        return (
            <Fragment>
              <CssBaseline />
                <div className="App">
                    <Switch>
                        <Route path='/login' component={SignInComponent} />
                        <Route path='/' component={Dashboard} />
                    </Switch>
                </div>
            </Fragment>
        );
    }
}

export default withAuthentication(App);
