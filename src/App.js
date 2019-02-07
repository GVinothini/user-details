import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import GetUsers from './Components/GetUsers';
import GetUserDetails from './Components/GetUserDetails';
import GetSpecificDetails from './Components/GetSpecificDetails';
class App extends Component {

    render(){
        return (    
            <div>
              <Router>
                <div>
                    <Switch>
                    <Redirect exact={true} from="/" to="/userList"/>
                    <Route exact path="/userList" component={GetUsers} />
                    <Route path="/userDetails" component={GetUserDetails} />
                    <Route path="/posts" component={GetSpecificDetails} />
                    <Route path="/todos" component={GetSpecificDetails} />
                    <Route path="/albums" component={GetSpecificDetails}   /> 
                    </Switch>
                  </div>                  
                </Router>
            </div>               
        );
     }
}
    
export default App;