import  { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserDetails from './UserDetails'

import { fetchUserDetails } from '../Actions/Actions'

const mapStateToProps = state => ({ userdetails: state.detailreducer.userdetails });

const mapDispatchToProps = dispatch => bindActionCreators({fetchUserDetails}, dispatch);

const GetUserDetails = connect(
    mapStateToProps,
    mapDispatchToProps 
)(UserDetails)

export default GetUserDetails