import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class UserDetails extends Component {

    componentDidMount() {
        console.log('did mount');
        this.props.fetchUserDetails(this.props.params);
        console.log('mounted')
    }

    render() {
        return (
            <div>
                <ul>
                {this.props.userDetails && this.props.userDetails.map(post => {
                    const {id , name} = post
                        return ( <li>hELLO
                             </li>
                            );
                    })}
                </ul>
                
            </div>
        )
     }
}
    
export default UserDetails;