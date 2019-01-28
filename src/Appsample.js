import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import SpecificDetails from './components/SpecificDetails';
import './App.css';

class App extends Component {

    render(){
        return (    
            <div>
              <Router>
                <div>
                    {/* <Route exact path="/" component={UserList} /> */}
                    <Redirect exact from="/" to="/userList"/>
                    <Route path="/userList" component={UserList} />
                    <Route path="/userDetails" component={UserDetails} />
                    <Route path="/posts" component={SpecificDetails} />
                    <Route path="/todos" component={SpecificDetails} />
                    <Route path="/albums" component={SpecificDetails}   />
                  </div>                  
                </Router>
            </div>               
        );
     }
}
    
export default App;
