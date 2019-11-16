import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'
import Header from './common/header'
import Home from './common/home'
import Services from './common/services'
import Clients from './common/clients'
import Contact from './common/contact'
import Footer from './common/footer'

const Landing = () => {
  return (
    <div id="top">
      <Head title="Home" />
      <Header />
      <div className="container testClass">
        <Home />
        <Services />
        <Clients />
        <Contact />
        <Footer />
      </div>
      <div className="text-center footer">
        <div className="container">Copyright @ 2019 Mailsaic | Design: Mailsaic</div>
      </div>
    </div>
  )
}

Landing.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
