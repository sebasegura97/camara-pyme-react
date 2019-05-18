import React from 'react'
import { socialFacebook } from 'react-icons-kit/metrize/socialFacebook'
import { instagram } from 'react-icons-kit/fa/instagram'
import { sendO } from 'react-icons-kit/fa/sendO'
import { whatsapp } from 'react-icons-kit/fa/whatsapp'
import { phone } from 'react-icons-kit/fa/phone'
import { Icon } from 'react-icons-kit'
import Divisor from './divisor'
import "./contacto.css"
export default function Contacto(){
    return(
        <div className="container-fluid mt-5    ">
            <h1 className="text-center m-4" >
                Contacto
            </h1>
            <Divisor />
            <div className="iconContainer  container-fluid d-flex justify-content-between justify-content-around w-100">
                <div className="row">

                    {/* facebook */}
                    <a 
                        className="col-3" 
                        href="https://www.facebook.com/C%C3%A1mara-de-PYMES-en-Acci%C3%B3n-237854410496088/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <div className=" iconContacto" >
                            <Icon icon={socialFacebook} size={48} />
                            <h6 className="mt-2">facebook</h6>
                        </div>
                    </a>

                    {/* email */}
                    <a className="col-3" href="mailto:infopymesenaccionsalta@gmail.com">
                        <div className=" iconContacto" >
                            <Icon icon={sendO} size={48} />
                            <h6 className="mt-2">email</h6>
                        </div>
                    </a>
                    
                    {/* whatsapp */}
                    {/* <a className="col-3"href="">
                        <div className=" iconContacto" >
                            <Icon icon={whatsapp} size={48} />
                            <h6 className="mt-2">wpp</h6>
                        </div>
                    </a> */}

                    {/* telefono fijo */}
                    <a className="col-3" href="tel:3872423513">
                        <div className=" iconContacto" >
                            <Icon icon={phone} size={48} />
                            <h6 className="mt-2">llamar</h6>
                        </div>
                    </a>

                    {/* instagram */}
                    <a 
                        className="col-3" 
                        href="https://www.instagram.com/pymesenaccionsalta/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className=" iconContacto" >
                            <Icon icon={instagram} size={48} />
                            <h6 className="mt-2">instagram</h6>
                        </div>
                    </a>
                </div>
            </div>
            <Divisor />
        </div>
    )
}
