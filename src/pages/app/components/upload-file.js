import React from 'react'

export default class wUploadFile extends React.Component{
    
    state = {
        preview: null,
    }
    onClick = () => {
        const input = document.getElementById('inputFile')
        input.click()
    }
    uploadImageOnChange = () => {
        const reader = new FileReader()
        var file = document.getElementById('inputFile').files[0];
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            this.setState({ preview: reader.result })
        }
    }
    render(){
        return(
            <div className="container-fluid col p-0 position-relative">
                <div className='custom-container' onClick={this.onClick}>
                    {
                        this.state.preview == null ? <div className="preview" ></div> :
                        <img className="img-fluid" src={this.state.preview} />
                    }
                    <div className="text-center upload-label">
                        <a  
                            className="btn-upload-file"
                            > + </a>
                        <p>
                            Subir imagen
                        </p>    
                    </div>
                </div>
                <input
                    type='file'
                    id='inputFile'
                    className="invisible"
                    required
                    onChange={this.uploadImageOnChange}
                />
                <style jsx>{`
                        .custom-container {
                            position: relative;
                            width: 100%;
                            height: 100%;
                        }
                        .upload-label{
                            position: absolute;
                            font-size: 24pt;
                            color: white !important;
                            font-weight: bold;
                            z-index: 10;
                            text-align: center;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center; 
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                        }   
                        .preview{
                            padding-top: 56.25%;
                            width: 100%;
                            background-color: grey;
                        }
                        .custom-container:hover{
                            cursor: pointer;
                        }
                    `}</style>
            </div>
        )
    }
}