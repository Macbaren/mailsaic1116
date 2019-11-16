import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const Clients = () => {
  return (
    <section className="col-md-12 content" id="clients">
      <div className="col-lg-6 col-md-6 content-item">
        <img src="images/3.jpg" alt="3" className="tm-image" />
      </div>
      <div className="col-lg-6 col-md-6 content-item background flexbox textAlign">
        <h2 className="section-title">It is made for</h2>
        <p className="section-text">- marketers</p>
        <p className="section-text">- news sites</p>
        <p className="section-text">- shops</p>
        <p className="section-text">- business</p>
        <p className="section-text">- ordinary users</p>
        <p />
        <h2 className="section-title">Advantages</h2>
        <p className="section-text">- There is no need to know programming languages</p>
        <p className="section-text">- Intuitive template creation</p>
        <p className="section-text">- The template creation time does not exceed 15 minutes</p>
        <p className="section-text">- Supports mailing through third-party services (Mailgun, Postmark)</p>
        <div className="textAlignBtn2">
          <button type="button" className="btn dark-blue-bordered-btn normal-btn textAlignBtn2">Small Button</button>
          <button type="button" className="btn yellow-btn normal-btn textAlignBtn2">Download</button>
          <button type="button" className="btn green-btn normal-btn textAlignBtn2">Demo</button>
        </div>
      </div>
    </section>
  )
}

Clients.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Clients)
