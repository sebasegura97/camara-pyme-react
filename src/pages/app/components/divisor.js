import React from 'react'
import { Colors } from '../../../constants/Colors';

export default function Divisor(props){
    return(
        <div className="container">
            <div className="left  my-5" />
            <div className="center  my-5 mx-4"></div>
            <div className="right  my-5" />
            <style jsx>{`
                .container{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                }
                .left, .right{
                    height: 2px;
                    width: 30%;
                    background-color: ${Colors.accentColor};
                }
                .center {
                    background: ${Colors.accentColor};
                    height: 10px;
                    width: 10px;
                    border-radius: 50%;
                    transition: .5s;
                }
                .container:hover .center{
                    cursor: pointer;
                    transition: .5s;
                    transform: rotateZ(225deg)scale(1.1);
                    background: ${Colors.darkPrimaryColor};
                }
            `}</style>
        </div>
    )
}