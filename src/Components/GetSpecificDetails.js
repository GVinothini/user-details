import  { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SpecificDetails from './SpecificDetails'
import { fetchSpecificDetails } from '../Actions/Actions'

const mapStateToProps = state => ({ specdetails: state.specreducer.specdetails });
const mapDispatchToProps = dispatch => bindActionCreators({fetchSpecificDetails}, dispatch);

const GetSpecificDetails = connect(
    mapStateToProps,
    mapDispatchToProps 
)(SpecificDetails)

export default GetSpecificDetails;