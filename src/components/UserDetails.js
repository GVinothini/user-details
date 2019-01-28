import React,{Component} from 'react';
import queryString from 'query-string'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
class UserDetails extends Component  {

    state = {
        users: [],
      };
       
      componentWillMount()  {
        const values = queryString.parse(this.props.location.search)
        console.log(values.id)
      
        fetch(`https://jsonplaceholder.typicode.com/users?id=`+values.id)
        .then(response => response.json())
            .then(   details =>

                this.setState(  {
                    users : details
                 } )
             )  
      }
     
      
    render()
    { 
        const {users} = this.state;
        
        return (
            <div >
                <h1>User Details</h1>
            {
                users.map( user =>  {  
                    const { id, name, email,address} = user;
                    return   (  
                        <div className="udetails">
                            <ul>
                                <li>name  : {name}</li>                       
                                <li>EmailID :  {email}</li> 
                                <li>Address: </li>
                                <ul>
                                    <li>Street:  {address.suite}</li>
                                    <li>City:  { address.city}</li>
                                    <li>ZipCode: {address.zipcode}</li>
                                </ul>
                               
                                    <li> <Link to={{ pathname: "/posts", search: "?name=posts&id="+id  }}> Posts</Link></li>                             
                                    <li><Link to={{ pathname: "/albums", search: "?name=albums&id="+id }}>Albums </Link></li>
                                    <li><Link to={{ pathname: "/todos", search: "?name=todos&id="+id }}>Todos</Link></li> 
                               
                                                                 
                            
                            </ul>                      
                         </div>  ) 
                } )        
           } 
           </div>
        )
    }

} 

export default UserDetails;