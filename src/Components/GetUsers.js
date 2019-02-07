import  { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserList from './UserList'

import { fetchuserlist } from '../Actions/Actions'

const mapStateToProps = state => ({ userlist: state.userreducer.userlist });

const mapDispatchToProps = dispatch => bindActionCreators({fetchuserlist}, dispatch);

const GetUsers = connect(
    mapStateToProps,
    mapDispatchToProps 
)(UserList)

export default GetUsers