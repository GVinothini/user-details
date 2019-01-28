import React, { Component } from 'react';
import '../App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserDetails from './UserDetails';

class UserList extends Component {

      state = {
        users: []
      };
      
      getUser()   {        
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then(response => response.json())
              .then(details =>
                  this.setState(  {
                      users : details
                    } )
                )
      }

      componentWillMount()  {
          this.getUser();
      }
      
      render() {
      const {users } = this.state;
        return (         
          <div className="App">
          <h1>User List</h1>
          <ul>
            {
              users.map( user =>  {  
                 const { id, name, email } = user;
                 console.log(id); 
                 return   (  
                       <li>
                          <Link to={{ pathname: "/userDetails", search: "?id="+id }}>
                          {name}
                          </Link>                            
                          </li>
                 ) 
                } )        
              }    
            </ul>      
           </div>
        );
      }
    }

export default UserList;
