import React from 'react'
import { mapMarker } from 'react-icons-kit/fa/mapMarker'
import { Icon } from 'react-icons-kit'
import { Colors } from '../../../constants/Colors';
import logo from '../../../static/logo.svg'


export default function Footer() {
    return (
        <div className="row mx-0 container-fluid footer">
            <div className="col-12 col-md-6 footerContent">
                <a className="navbar-brand footerText" href="/">
                    <img src={logo} className="customLogo"></img>
                </a> 
            </div>
            <div className="col-12 col-md-6 footerContent">
                <div className="icon mr-2">
                    <a href=""></a>
                    <Icon icon={mapMarker} size={18} />
                </div>
                <small className="" href="/">
                    Dirección: Mitre 265, Salta - Argentina.
                </small> 
            </div>
            <style jsx>{`
                .icon{
                    color: ${Colors.accentColor};

                }   
                
                .footer{
                    background: white;
                    color: #212121;
                    position: sticky;
                    height: 20vh;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    background: -moz-linear-gradient(top, rgba(255,255,255,1) 30%, rgba(0,171,205,0.8) 100%);
                    background: -webkit-linear-gradient(top, rgba(255,255,255,1) 30%, rgba(0,171,205,0.8) 100%);
                    background: -o-linear-gradient(top, rgba(255,255,255,1) 30%, rgba(0,171,205,0.8) 100%);
                    background: linear-gradient(to bottom, rgba(255,255,255,1) 30%, rgba(0,171,205,0.8) 100%);
                }
                .footerText{
                    color: #303F9F;
                }
                .footerContent {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .icon:hover{
                    cursor: pointer;
                    color: #E040FB;
                }
                .customLogo{
                    height: 5rem;
                }
            `}</style>
        </div>
    )
}