import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import { addFormData } from '../../../../redux/actions/index'
import { createMember } from '../../../../firebase/firestore'

class Step4 extends React.Component {
    state = {
        municipios: []
    }
    async componentWillMount() {
        let req = await fetch('https://apis.datos.gob.ar/georef/api/municipios?provincia=66&campos=id,nombre&max=1000');
        var { municipios } = await req.json()
        function comparar(a, b) {
            console.log("si me comparo")
            if (a.nombre < b.nombre)
                return -1;
            if (a.nombre > b.nombre)
                return 1;
            return 0;
        }
        this.setState({ municipios: municipios.sort(comparar) })
    }
    handleSubmit = (event, errors, values) => {
        this.setState({ errors, values });
    }
    handleValidSubmit = (event, values) => {
        this.props.dispatch(addFormData(values))
        this.props.dispatch(addFormData({ step: 5 }))
        createMember(this.props.membership)
    }

    render() {
        function orderArray(a, b) {
            if (a.nombre < b.nombre)
                return -1;
            if (a.nombre > b.nombre)
                return 1;
            return 0;
        }
        return (
            <div className="container-fluid col-md-8 offset-md-2 mt-2">
                <h3 className="text-center mt-4 mb-4">
                    Tus datos personales.
                </h3>
                <h5 className="text-center mt-4 mb-4">
                    Este es el último paso.
                </h5>
                <AvForm
                    onSubmit={this.handleSubmit}
                    onValidSubmit={this.handleValidSubmit}
                    className=" d-flex flex-column"
                >
                    <AvField
                        name="user.nombre"
                        label="Tu nómbre"
                        validate={{
                            required: { value: true, errorMessage: 'Por favor ingrese su nómbre completo.' },
                        }}
                    />
                    <AvField
                        name="user.apellido"
                        label="Tu apellido"
                        validate={{
                            required: { value: true, errorMessage: 'Por favor ingrese su apellido completo.' },
                        }}
                    />
                    <AvField
                        type="select"
                        name="user.cargo"
                        label="Cargo"
                        validate={{
                            required: { value: true, errorMessage: 'Por favor ingrese su cargo en la organizacion.' },
                        }}
                    >
                        <option> Dueño/a</option>
                        <option> Administrativo</option>
                        <option> Ventas</option>
                        <option> Recepción</option>
                        <option> Recursos humanos</option>
                        <option> Otro</option>
                    </AvField>
                    
                    
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
        membership: state.membership
    }
}
export default connect(mapStateToProps)(Step4)