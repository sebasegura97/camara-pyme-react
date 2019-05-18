import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import { addFormData } from '../../../../redux/actions/index'

class Step3 extends React.Component {
    state = {
        municipios: []
    }
    async componentWillMount(){
        let req = await fetch('https://apis.datos.gob.ar/georef/api/municipios?provincia=66&campos=id,nombre&max=1000');
        var { municipios } = await req.json()
        
        function comparar(a, b) {
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
        this.props.dispatch(addFormData({ step: 4 }))
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
                    Tu empresa
                </h3>
                <h5 className="text-center mt-4 mb-4">
                    Ya casi terminamos.
                </h5>
                <AvForm
                    onSubmit={this.handleSubmit}
                    onValidSubmit={this.handleValidSubmit}
                    className=" d-flex flex-column"
                >
                    <AvField 
                        type="select" 
                        name="location.municipio" 
                        label="Municipio" 
                        required
                        // helpMessage="Idk, this is an example. Deal with it!"
                        >
                        {
                            this.state.municipios.map((municipio)=>{
                                return(
                                    <option key={municipio.id}>{municipio.nombre}</option>
                                )
                            })
                        }
                    </AvField>
                    <Row className="">
                            <Col xs="9" sm="9">
                                {/* With select and AvField */}
                                <AvField
                                    type="text"
                                    name="location.calle"
                                    label="Calle"
                                    required    
                                />
                            </Col>
                            <Col xs="3" sm="3">
                                <AvField 
                                    name="location.numero" 
                                    type="number" 
                                    label="Nª" 
                                    required 
                                    />
                            </Col>
                    </Row>
                    <Row className="">
                            <Col xs="9" sm="9">
                                {/* With select and AvField */}
                                <AvField
                                    type="text"
                                    name="location.galeriaShopping"
                                    label="Galería / Shopping"    
                                />
                            </Col>
                            <Col xs="3" sm="3">
                                <AvField 
                                    name="location.numeroDeLocal" 
                                    label="Local" 
                                    />
                            </Col>
                    </Row>
                    <AvField
                        name="cuit"
                        type="number"
                        label="CUIT / CUIL"
                        required
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
export default connect(mapStateToProps)(Step3)