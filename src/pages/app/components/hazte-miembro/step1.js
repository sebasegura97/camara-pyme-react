import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { addFormData } from '../../../../redux/actions/index'

class Step1 extends React.Component{
    state = {}
    handleSubmit = (event, errors, values) => {
        this.setState({ errors, values });
    }

    handleValidSubmit = (event, values) => {
        this.props.dispatch(addFormData(values))
        this.props.dispatch(addFormData({step: 2}))
    }
    render(){
        
        return(
            <div className="container-fluid col-md-8 offset-md-2 mt-2">
                <h3 className="text-center mt-4 mb-4">
                    Datos de la empresa
                </h3>
                <h5 className="text-center mt-4 mb-4">
                    Completa este simple formulario para formar parte de la cámara pyme
                </h5>
                <AvForm
                    onSubmit={this.handleSubmit}
                    onValidSubmit={this.handleValidSubmit}
                    className=" d-flex flex-column"
                >
                    <AvField 
                        type="text"
                        name="nombreFantasia" 
                        label="Nombre de fantasia"
                        validate={{ 
                            required: { value: true, errorMessage: 'Por favor ingrese el nombre de fantasia de su empresa' },
                        }} 
                        />
                    <AvField
                        name="email"
                        label="Email"
                        type="email"
                        required
                        validate={{
                            required: { value: true, errorMessage: 'Este es un campo requerido' },
                        }} 

                    />
                    <AvField 
                        name="password" 
                        label="Contraseña" 
                        type="password" 
                        validate={{
                        required: { value: true, errorMessage: 'Este es un campo requerido' },
                        pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'La contraseña debe estar compuesta solo de letras o numeros.' },
                        minLength: { value: 6, errorMessage: 'Por favor ingrese una contraseña de mas de 6 caracteres' },
                        }} 
                    />
                    <FormGroup
                        className="align-self-end"
                    >
                        <button
                            className="btn btn-outline-primary text-right "
                            onClick={this.handleSubmit  }
                        >
                            Continuar</button>
                    </FormGroup>
                </AvForm>
    
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        membership: state.membersipForm
    }
}
export default connect(mapStateToProps)(Step1)