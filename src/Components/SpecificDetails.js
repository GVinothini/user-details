import React,{Component} from 'react';
import queryString from 'query-string'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class SpecificDetails extends Component  {
      
      componentWillMount()  {
        const values = queryString.parse(this.props.location.search)
        console.log(values)   
       this.props.fetchSpecificDetails(values);
      }
           
    render()
    {        
        const values = queryString.parse(this.props.location.search)

         return (
            <div>
                <h1>{values.name}</h1>
            <ul>
            {this.props.specdetails && this.props.specdetails.map(post => {
                const {id,title }= post
                    return ( <div>
                        <li>ID  : {id}</li>      
                        <li>Title  :  {title}</li>                 
                            
                        </div>
                        );
                })}
            </ul>
            
        </div>                          
        )
    }
} 

export default SpecificDetails;