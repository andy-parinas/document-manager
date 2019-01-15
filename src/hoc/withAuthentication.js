import React from 'react';

import {AuthUserContext} from '../config/context';
import {auth} from '../config/Firebase';

const withAuthentication = Component => {

    class ComposedComponent extends React.Component{

        constructor(props){
            super(props);

            this.state = {
                authUser: null
            }
        }

        componentDidMount() {
            this.listener = auth.onAuthStateChanged(authUser => {
                authUser 
                    ? this.setState({authUser: authUser})
                    : this.setState({authUser: null})
            })
        }

        componentWillUnmount(){
            this.listener();
        }

        render(){
            return(
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            )
        }


    }

    return ComposedComponent;
}

export default withAuthentication;
