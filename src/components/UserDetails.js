import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import queryString from 'query-string'


class UserDetails extends Component {

    componentWillMount() {
        const values = queryString.parse(this.props.location.search)
        console.log('mount2');
       console.log( this.props.fetchUserDetails(values))
    }

    render() {

        return (
            <div>
                <h1>User Details</h1>
                <ul>
                {this.props.userdetails && this.props.userdetails.map(post => {
                    const {id , name, email, address} = post
                        return ( <div key={id}>
                            <li>User Name  : {name}</li>                       
                                <li>Email-ID :  {email}</li> 
                                <li>Address: {address.suite}, {address.street},<br/>
                                              { address.city} - {address.zipcode}  </li>    
                                <ul className="nav navbar-nav navbar-default">                                                                                          
                                    <li> <Link  to={{ pathname: "/posts", search: "?name=posts&id="+id  }}> Posts</Link></li>                             
                                    <li><Link to={{ pathname: "/albums", search: "?name=albums&id="+id }}>Albums </Link></li>
                                    <li><Link to={{ pathname: "/todos", search: "?name=todos&id="+id }}>Todos</Link></li> 
                                </ul>       
                            </div>
                            );
                    })}
                </ul>
                
            </div>
        )
     }
}
    
export default UserDetails;