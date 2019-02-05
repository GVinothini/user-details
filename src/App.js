import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import GetUsers from './Components/GetUsers';
import GetUserDetails from './Components/GetUserDetails';
class App extends Component {

    render(){
        return (    
            <div>
              <Router>
                <div>
                    {/* <Route exact path="/" component={UserList} /> */}
                    <Redirect exact from="/" to="/userList"/>
                    <Route path="/userList" component={GetUsers} />
                    <Route path="/userDetails" component={GetUserDetails} />
                    {/* <Route path="/posts" component={SpecificDetails} />
                    {/* <Route path="/todos" component={SpecificDetails} />
                    <Route path="/albums" component={SpecificDetails}   /> */} 
                  </div>                  
                </Router>
            </div>               
        );
     }
}
    
export default App;