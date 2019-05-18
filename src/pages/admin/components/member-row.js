import React from 'react'

function formatDate(listaDePagos){
    if (listaDePagos.length > 0){
        var ultimoPago = listaDePagos[listaDePagos.length - 1].toDate()
        var pago = `${ultimoPago.getDate()}/${ultimoPago.getMonth()}/${ultimoPago.getFullYear()}`
        pago = pago.toString()
        return pago 
    } 
}

function MemberRow(props){
    var cardBackground = "white"
    var { nombreFantasia, location, user, email, ultimoPago, cuit } = props.member;
    var { bgColor } = props 
    // Formateamos la fecha de ultimo pago:
    var pago = formatDate(ultimoPago)

    return(
        <div className="card mb-3 cardBackground" style={{background: bgColor}}onClick={props.onClick} >
            <div className="row no-gutters">
                <div className="col">
                    <div className="card-body">
                        <h3 className="card-title">{nombreFantasia}</h3>
                        <h6 className="card-text"> <small>CUIT/CUIL: </small>{cuit} </h6>
                        {/* <h6 className="card-text"> {location.municipio} </h6> */}
                        <h6 className="card-text"> <small>Domicilio: </small> {`${location.calle} ${location.numero}`} </h6>
                        <h6 className="card-text"> <small>Miembro asociado: </small> {`${user.nombre} ${user.apellido}`} </h6>
                        {/* <p className="card-text">{email}</p> */}
                        <p className="card-text"><small className="text-muted">Ultimo pago: {pago}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberRow