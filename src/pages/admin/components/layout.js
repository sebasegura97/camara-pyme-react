import React from 'react'
import Menu from './navbar'
// import 'bootstrap/dist/css/bootstrap.css';


export default function Layout(props) {
    return (
        <div>
            {/* <Head>
                <title>Administrador</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />

            </Head> */}
            <div className="container-fluid p-0 col-lg-8">
                <div className="container-fluid p-0 sticky-top">
                    <Menu />
                </div>
                <section className="container-fluid p-0">
                    {props.children}
                </section>
            </div>
        </div>
    )
}