import React,{Component} from 'react';
import queryString from 'query-string'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';

class SpecificDetails extends Component  {

    state = {
        users: [],   
      };
             
      componentWillMount()  {
        const values = queryString.parse(this.props.location.search)
        console.log(values)   
        
        fetch(`https://jsonplaceholder.typicode.com/${values.name}?userId=`+values.id)
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
             <div>
                 <h1>User Specific Details</h1>
                <table >
                <tr>
                <th>ID</th>
                <th>TITLE</th>
                </tr>
                {
                        users.map( user =>  {  
                            const { id, title} = user;
                            return   (
                                <tr>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                </tr>   ) 
                        } )        
                }                 
            </table>
             </div>
           
                                      
        )
    }
} 

export default SpecificDetails;