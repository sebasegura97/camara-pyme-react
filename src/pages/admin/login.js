import React from 'react'
import { Modal, FormGroup } from 'reactstrap';
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import { adminLogin } from '../../firebase/firestore' 
import { frontendLogin } from '../../redux/actions/index'
import { connect } from 'react-redux' 

class Login extends React.Component {
    handleSubmit = (event, errors, values) => {
        this.setState({ errors, values });
    }
    handleValidSubmit =  async (event, values) => {
        console.log(values)
        const login = await adminLogin(values)
        if (login) {
            this.props.dispatch(frontendLogin())
            this.props.history.push("/admin/news")
        }
    }
    render(){
        return(
                <AvForm
                    onSubmit={this.handleSubmit}
                    onValidSubmit={this.handleValidSubmit}
                    className="col-6 offset-3 mt-4 d-flex flex-column"
                >
                    <AvField
                        name="email"
                        label="Email"
                        validate={{
                            required: { value: true, errorMessage: 'Por favor ingrese su nómbre completo.' },
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
                            onClick={this.handleSubmit}
                        >
                            Continuar</button>
                    </FormGroup>
                </AvForm>
        )

    }
}


export default connect()(Login)