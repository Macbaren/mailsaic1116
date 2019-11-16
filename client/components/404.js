import React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'

const NotFound = (props) => (
  <div className="text-center page404">
    <img className="img404" src="images/inspector-2858806_1280.png" alt=" " />
    <p />
    <h1> 404: URL Is not found </h1>
    <p />
    <button type="button" tabIndex="0" onClick={props.goRoot} className="btn no-bg btn-contact">Go to root</button>
  </div>
);

NotFound.propTypes = {
  goRoot: PropTypes.func
}

NotFound.defaultProps = {
  goRoot: () => {},
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  goRoot: () => push('/')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)
