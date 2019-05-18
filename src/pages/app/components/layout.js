import React from 'react'
import Menu from '../components/navbar'
// import 'bootstrap/dist/css/bootstrap.css';
// import { addNew } from '../redux/actions'
import Footer from '../components/footer'

export default class Layout extends React.Component {
    static getInitialProps({ reduxStore, req }) {
        return {}
    }
    render(){
        return(
            <div>
                {/* <Head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head> */}
                <div className="container-fluid p-0 col-lg-8 layoutApp">
                    <div className="container-fluid p-0 sticky-top">
                        <Menu />
                    </div>
                    <section className="container-fluid p-0">
                        {this.props.children}
                    </section>
                    <Footer />
                </div>
                <style jsx>{`   
                    .layoutApp{
                        min-height: 100vh;
                        height: max-content;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    `}</style>
            </div>
        )

    }

}