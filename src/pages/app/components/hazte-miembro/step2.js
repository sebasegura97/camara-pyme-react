import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import { connect } from 'react-redux'
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import { addFormData } from '../../../../redux/actions/index'

class Step2 extends React.Component {
    state = {}
    handleSubmit = (event, errors, values) => {
        this.setState({ errors, values });
    }

    handleValidSubmit = (event, values) => {
        this.props.dispatch(addFormData(values))
        this.props.dispatch(addFormData({ step: 3 }))
    }
    render() {
        return (
            <div className="container-fluid col-md-8 offset-md-2 mt-2">
                <h3 className="text-center mt-4 mb-4">
                    Datos de contacto
                </h3>
                <h5 className="text-center mt-4 mb-4">
                    Completa este simple formulario para formar parte de la camara pyme.
                </h5>
                <AvForm
                    onSubmit={this.handleSubmit}
                    onValidSubmit={this.handleValidSubmit}
                    className=" d-flex flex-column"
                >
                    <AvField
                        name="teléfono"
                        label="Telefono"
                        placeholder="Ej: 3874030303"
                        type="tel"
                        required
                    />
                    <AvField
                        name="web"
                        label="Página web:"
                        type="url"
                        placeholder="Ej: https://camarapyme.com"
                    />
                    <AvField
                        name="facebook"
                        label="Página de facebook:"
                        type="url"
                        placeholder="Ej: https://www.facebook.com/CamaraPyMESalta/"
                    />
                    <AvField
                        name="instagram"
                        label="Instagram:"
                        type="url"
                        placeholder="Ej: https://www.instagram.com/camarapymes/"
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
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        membership: state.membersipForm
    }
}
export default connect(mapStateToProps)(Step2)