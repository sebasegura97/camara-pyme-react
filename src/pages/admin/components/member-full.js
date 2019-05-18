import React from 'react'
import { setLastPayment, deletePayment } from '../../../firebase/firestore'
import { Badge, Button } from 'reactstrap';

function MemberFull(props){
    var { email, cuit, facebook, instagram, location, 
            nombreFantasia, telefono, user, web, ultimoPago} = props.member
    return(
        <div className="container-fluid memberFull">
            <Button outline className="text-left" onClick={props.goBack}>  🔙  </Button>
            <h4> Datos del comercio: </h4>
            <p>
               { `Nombre de fantasia: ${nombreFantasia}`}
            </p>
            <p>
                {`Municipio: ${location.municipio}`}
            </p>
            <p>
                {`cuit: ${cuit}`} <br />
            </p>
            <p>
                {`Telefono: ${telefono}`}
            </p>
            <p>
                {`Direccion: ${location.calle} ${location.numero}`}
                {`Shopping: ${location.galeriaShopping} ${location.numeroDeLocal}`}
            </p>
            <h4> Datos de contacto: </h4>
            <p>
                {`Email: ${email}`} <br />
                {`Facebook: ${facebook}`} <br />
                {`Instagram: ${instagram}`} <br />
                {`Web: ${web}`}
            </p>
            <h4> Datos del socio: </h4>
            <p>
                {`Nombre: ${user.nombre} ${user.apellido}`}
            </p>
            <h4>Historial de pagos:</h4>
            {
                ultimoPago.length == 0 ? <div/> :
                ultimoPago.map(
                    (pago, index) => {
                        var date = pago.toDate()
                        var formatedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
                        return (
                            <div key={index} className="paymenHistory p-2" onClick={() => { deletePayment(cuit, pago)} }>
                                <p className="m-0">{formatedDate.toString()}</p>
                                <Badge color="danger">Eliminar</Badge>
                            </div>
                            )
                    }
                )
            }
            <Button outline className="mt-4" color="success" onClick={ () => setLastPayment(cuit) }>Registrar pago</Button>

            <style jsx>{`
                .paymenHistory{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    width: 300px;
                    border-bottom: 1px solid rgba(0,0,0,0.5)
                }
                .paymenHistory:hover{
                    cursor: pointer
                }
                .memberFull{
                    background-color: rgba(168,168,168,0.2);
                    height: 100%;
                }

            `}</style>
        </div>
    )
}

export default MemberFull