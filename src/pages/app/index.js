// import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Portada from './components/portada';
import Layout from './components/layout';
import Contacto from './components/contacto'
import QuienesSomos from './components/quienes-somos'
import { connect } from 'react-redux'


class Index extends React.Component {
    
    render() {
        return(
            <div >
                <div className="container-fluid p-0">
                    <Portada />
                    <Contacto />
                    <QuienesSomos />
                </div>
                {/* <Link href="/admin/news">
                    <a>
                        admin-news
                    </a> 
                </Link> */}
            </div>
        )   
    }
}


export default connect()(Index)

