import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux'

class Step5 extends React.Component {
    mercadoPago = () =>{
        // window.location.href = 'https://www.mercadopago.com/mla/checkout/start?pref_id=127534320-13b7db75-826a-404b-816b-91c26aeec94d';
    }
    render() {
        return (
            <div className="container-fluid col-md-8 offset-md-2 mt-2 ">
                <h3 className="text-center mt-4 mb-4">
                   Último paso!
                </h3>
                <h5 className="text-center mt-4 mb-4">
                    Finaliza tu suscripción en mercado pago o acércate a nuestra sede en mitre 265 
                    para pago en efectivo.
                </h5>
                <FormGroup
                    className="d-flex"                
                >
                    <button
                        className="btn btn-outline-primary text-right ml-auto"
                        onClick={this.mercadoPago}
                    >
                        Ir a Mercado Pago</button>
                </FormGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        membership: state.membersipForm
    }
}
export default connect(mapStateToProps)(Step5)
