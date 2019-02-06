import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import queryString from 'query-string'


class UserDetails extends Component {

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        console.log(values)   
        console.log('did mount');
       console.log( this.props.fetchUserDetails(values))
        console.log('mounted')
    }

    render() {
        return (
            <div>
                <ul>
                {this.props.userdetails && this.props.userdetails.map(post => {
                    const {id , name, email, address} = post
                        return ( <div>
                            <li>name  : {name}</li>                       
                                <li>EmailID :  {email}</li> 
                                <li>Address: {address.suite} ,  { address.city} , {address.zipcode}</li>                                                                  
                                    <li> <Link to={{ pathname: "/posts", search: "?name=posts&id="+id  }}> Posts</Link></li>                             
                                    <li><Link to={{ pathname: "/albums", search: "?name=albums&id="+id }}>Albums </Link></li>
                                    <li><Link to={{ pathname: "/todos", search: "?name=todos&id="+id }}>Todos</Link></li> 
                            </div>
                            );
                    })}
                </ul>
                
            </div>
        )
     }
}
    
export default UserDetails;