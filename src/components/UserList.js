import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class UserList extends Component {

    componentDidMount() {
        console.log('did mount');
        this.props.fetchuserlist();
        console.log('mounted')
    }

    render() {
        return (
            <div>
                <ul>
                {this.props.userlist && this.props.userlist.map(post => {
                    const {id , name} = post
                        return ( <li>
                            <Link to={{pathname : "/userDetails", search : "?id=" + id}}> {name}
                            </Link> </li>
                            );
                    })}
                </ul>
                
            </div>
        )
     }
}
    
export default UserList;