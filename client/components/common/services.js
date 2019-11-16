import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const Services = () => {
  return (
    <section className="col-md-12 content padding" id="services">
      <div className="col-lg-6 col-md-6 col-md-push-6 content-item">
        <img src="images/2.jpg" alt="2" className="tm-image" />
      </div>
      <div className="col-lg-6 col-md-6 col-md-pull-6 content-item background flexbox textAlign">
        <h2 className="section-title">Convenient editor</h2>
        <p className="section-text">The designer allows you to quickly and easily create professional templates for mass mailings. To create a template does not require technical skills or knowledge of HTML. Send letters to your subscriber database without any hassle!</p>
        <h2 className="section-title">Mail Designer</h2>
        <p className="section-text">TTo quickly create a newsletter, use the visual editor of letters and ready-made design templates - just add text, images and links.</p>
        <h2 className="section-title">Trigger Mailings</h2>
        <p className="section-text">Send letters or entire chains automatically under various conditions: registration, birthday, abandoned basket, purchase, and so on.</p>
        <h2 className="section-title">Personalization</h2>
        <p className="section-text">Use the user&apos;s personal information - name, gender, date of birth, interests - to create personalized messages.</p>
      </div>
    </section>
  )
}

Services.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Services)
