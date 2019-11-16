import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const Home = () => {
  return (
    <section className="col-md-12 content" id="home">
      <div className="col-lg-6 col-md-6 content-item">
        <img src="images/1.jpg" alt="1" className="tm-image" />
      </div>
      <div className="col-lg-6 col-md-6 content-item content-item-1 background textAlign">
        <h2 className="main-title text-center dark-blue-text">MAILSAIC</h2>
        <p>Now composing and sanding many emails to different addresses is as simple as playing mosaic!</p>
        <p>Mailsaic is a cross-platform service for quickly and easily creating responsive email templates.</p>
        <div className="textAlignBtn1">
          <button type="button" className="btn btn-big dark-blue-bordered-btn textAlignBtn1">Big Button</button>
          <button type="button" className="btn btn-big dark-blue-btn textAlignBtn1">Download</button>
        </div>
      </div>
    </section>
  )
}

Home.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
