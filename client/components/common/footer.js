import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const Footer = () => {
  return (
    <footer className="col-md-12 content" id="externals">
      <div>
        <div className="col-lg-6 col-md-6 last">
          <img src="images/5.png" alt="5" className="tm-image" />
        </div>
        <div className="col-lg-6 col-md-6 background last about-text-container textAlign">
          <h2 className="section-title">About This Website</h2>
          <p1 className="about-text">Service has its own API and is supported by all modern browsers</p1>
          <p1 className="about-text">Our tools for creating an individual design will help you beautifully arrange the newsletter</p1>
          <p1 className="about-text">Get help and personalized recommendations on your actions in the form of real-time analytics and reports</p1>
          <p1 className="about-text">Create and manage your companies(mails) on any device: smartphone, tablet, PC</p1>
          <p1 className="about-text">Operational technical support is ready to answer all your questions as soon as possible</p1>
          <p1 className="about-text">Use your knowledge to convey information to your target audience</p1>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
