import React from 'react'
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

export default function New(props){
        // console.log(props.item.timeCreated.toDate())
        var cardBody = props.item.cuerpo.slice(0, 140) + "..." 
        var { timeCreated } = props.item
        var date = new Date(timeCreated)
        console.log("date: ", date)
        return(
            <div className="col-md-4 mt-4 cardContainer" onClick={props.onClick}>
                <Card>
                    {props.children}
                    <CardImg top width="100%" src={props.item.imageURL} alt="Card image cap" />
                    <CardBody  >
                        <CardTitle>{props.item.titulo}</CardTitle>
                        <CardText
                            className="d-none d-md-block"
                        >
                            {cardBody}
                        </CardText>
                        <CardText>
                            <small className="text-muted">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}` }</small>
                        </CardText>
                    </CardBody>
                </Card>
                <style jsx>{`
                        .cardContainer {
                            height: fit-content;
                            display: flex;
                        }
                    
                        
                    `}</style>
            </div>
        )
}
