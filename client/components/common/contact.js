import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const Contact = () => {
  return (
    <section className="col-md-12 content" id="contact">
      <div className="col-lg-6 col-md-6 col-md-push-6 content-item">
        <img src="images/4.jpg" className="tm-image" alt="4" />
      </div>
      <div className="col-lg-6 col-md-6 col-md-pull-6 content-item background flexbox textAlign">
        <h2 className="section-title">Contact Us</h2>
        <p className="margin-b-25">Nulla eget sem sit amet turpis tempus viverra at et odio. Cras vel eros id ipsum accumsan venenatis ut nec ipsum.</p>
        <form method="post" name="contact-form" className="contact-form">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="form-group">
              <input name="name" type="text" className="form-control" id="name" placeholder="Your Name..." required />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pad-l-3">
            <div className="form-group contact-field">
              <input name="email" type="email" className="form-control" id="email" placeholder="Your Email..." required />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group contact-field">
              <input name="subject" type="text" className="form-control" id="subject" placeholder="Your Subject..." required />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group contact-field">
              <textarea name="message" rows="5" className="form-control" id="message" placeholder="Write your message..." required />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group margin-b-0">
              <button type="submit" id="form-submit" className="btn no-bg btn-contact">Submit</button>
            </div>
          </div>
        </form>
        <div id="msgSubmit" className="h3 text-center hidden">Message Submitted!</div>
      </div>
    </section>
  )
}

Contact.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
