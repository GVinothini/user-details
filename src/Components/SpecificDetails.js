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
                <h1 className="text-capitalize">{values.name}</h1>
                <table className="table table-striped">
                   <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.specdetails && this.props.specdetails.map(post => {
                            const {id,title }= post
                                return ( 
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                </tr>               
                              );
                        })}
                     </tbody>
                </table>
            
        </div>                          
        )
    }
} 

export default SpecificDetails;