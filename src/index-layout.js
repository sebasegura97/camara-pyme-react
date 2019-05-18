import React from 'react'
// import Logo from '../icons/components/logo.js'
import './index-layout.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Footer from './app-page/footer/components/footer'
// import './index-layout.css'

function IndexLayout(props) {
    return(
        <div className='container-fluid p-0'>
            {props.children}
        </div>
    )
    // }
}

function mapStateToProps(state){
    return({
        path: state.path
    })
}

export default withRouter(connect(mapStateToProps)(IndexLayout))