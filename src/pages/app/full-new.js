import React from 'react'

import Layout from "./components/layout";

export default class FullNew extends React.Component{
    // static getInitialProps({query}){
    //     return { imageURL, titulo, subtitulo, cuerpo }
    //     var { imageURL, titulo, subtitulo, cuerpo  } = query
    // }
    // constructor(props){
    //     super(props)
    //     var { imageURL, titulo, subtitulo, cuerpo } = this.props
    // }
    
    render(){
        var { imageURL, titulo, subtitulo, cuerpo } = this.props.location.state.item
        return(
            <div>
                <img src={imageURL} className="w-100"/>
                <div className="container-fluid">
                    <h1 className="text-center m-2 ">{titulo}</h1>
                    <h4 className="text-center m-2 mt-4">{subtitulo}</h4>
                    <p className="text-justify m-2 mt-4" >{cuerpo}</p>
                </div>
            </div>
        )
    }
}