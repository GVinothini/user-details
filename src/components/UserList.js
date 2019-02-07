import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class UserList extends Component {

    componentDidMount() {
        console.log('mount')
        this.props.fetchuserlist();
    }

    render() {
        return (
            <div>
                <h1>USERS LIST</h1>
                <ol>
                    {this.props.userlist && this.props.userlist.map(user  => {
                        const {id , name} = user
                            return ( <li key={id}>
                                <Link to={{pathname : "/userDetails", search : "?id=" + id}}> {name}
                                </Link> </li>
                             );
                        })}
                </ol>
            </div>
        )
     }
}
    
export default UserList;