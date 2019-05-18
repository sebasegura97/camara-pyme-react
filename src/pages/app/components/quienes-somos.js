import React from 'react'
import Divisor from './divisor'

export default function QuienesSomos() {
    return (
        <div className="container-fluid ">
            <h1 className="text-center m-4" >
                ¿Quienes somos?
            </h1>
            <p className="text-center">
                Somos un equipo compuesto por profesionales y empresarios con una amplia experiencia
                y trayectoria en materia de emprendedurismo a nivel provincial.
                Brindamos asistencia especializada a los diferentes procesos de negocios a través
                de servicios profesionales idóneos tales como: Asesoramiento, Capacitación, 
                Financiamiento y Comunicación.
                Buscamos contribuir al desarrollo de las Economías Regionales fortaleciendo 
                la competitividad, la sustentabilidad y las políticas públicas a favor de las PyMEs de Salta.
            </p>
            <Divisor />
            <style jsx>{` 
                .divisor{
                    height: 2px;
                    width: 60%;
                    background-color: #E040FB;
                }
                
            `}</style>
        </div>
    )
}