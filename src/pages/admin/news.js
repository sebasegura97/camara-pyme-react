import React from 'react'
// import Layout from '../../components/admin/admin-layout'
import UploadFile from '../app/components/upload-file'
import { createNew, getNews, deleteNew } from '../../firebase/firestore'
import { uploadImageNew } from '../../firebase/storage'
import { addNew, removeNew } from '../../redux/actions'
import { connect } from 'react-redux';
import CardNew from '../app/components/card-new'
import { Icon } from 'react-icons-kit'
import { androidDelete } from 'react-icons-kit/ionicons/androidDelete'

class Admin extends React.Component {
    
    componentWillMount(){
        getNews().then((news)=>{
            console.log("news: ", news)
            this.props.dispatch(addNew(news))
        })
    }
    state = {
        titulo: null,
        subtitulo: null,
        cuerpo: null,
        progress: 0,
        news: this.props.news
    }
    publish = () => {
        const reader = new FileReader()
        var file = document.getElementById('inputFile').files[0];
        reader.readAsDataURL(file)

        // Subimos la imagen al storage:
        var task = uploadImageNew(file);
        task.on('state_changed', (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({ progress })
        }, function (error) {
            console.log(error)
        }, () => {
            task.snapshot.ref.getDownloadURL().then(
                (imageURL) => {
                    var data = {
                        titulo: this.state.titulo,
                        subtitulo: this.state.subtitulo,
                        cuerpo: this.state.cuerpo,
                        imageURL,
                        imageRef: task.snapshot.ref.fullPath,
                        timeCreated: Date.now()
                    }
                    // Subimos la noticia con la imageURL a firestore:
                    createNew(data).then( () => {
                        this.props.dispatch(addNew(data))
                        }
                    )
                    this.setState({
                        progress: 0,
                        titulo: null,
                        subtitulo: null,
                        cuerpo: null,
                    })
                }
            )
        });
    }

    deleteNewFunction = (id) => {
        console.log("si recibe on click")
        deleteNew(id)
            .then(
                () => {
                    this.props.dispatch(removeNew(id))
                }
            )
    }
    render(){
        var { news, admin } = this.props
        var { progress } = this.state
        if(progress > 0){
            return(
                <div>
                    <div><p>Cargando</p></div>
                </div>
            )
        }
        if (!admin) {
            this.props.history.push("/admin/")
        }
        return(
            <div>
                <div className='row m-0'>
                    <UploadFile 
                        imagePreview = {this.state.imagePreview} 
                    />
                </div>
                <div className='row m-0'>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Titulo</span>
                        </div>
                        <input
                            onChange={(e)=> this.setState({titulo: e.target.value}) }
                            type="text" 
                            className="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Subtitulo</span>
                        </div>
                        <textarea 
                            onChange={(e) => this.setState({ subtitulo: e.target.value })}
                            className="form-control" 
                            aria-label="With textarea"
                            ></textarea>
                    </div>
                    <div className="input-group mt-4">
                        <div className='container-fluid scroll-container p-0 '>
                            <textarea 
                                onChange={(e) => this.setState({ cuerpo: e.target.value })}
                                className="form-control h-100" 
                                rows='40' 
                                aria-label="With textarea"></textarea>
                        </div>
                    </div>
                    <button type="button" onClick={this.publish} className="btn btn-outline-primary ml-auto my-4">Publicar</button>
                </div>
                <div id="newsLayout" className="row m-0">
                    {
                        news.map((item, index) => {
                            return (
                                <CardNew
                                key={index}
                                item={item}
                                // onClick={() => this.openNew(item)}
                                >
                                    <Icon 
                                        icon={androidDelete}
                                        size={32}
                                        className="icon-delete"
                                        onClick={()=>this.deleteNewFunction(item.id)}
                                    />
                                </CardNew>
                            )
                        })
                    }

                </div>
                <style jsx>{`
                    .scroll-container{
                        height: 70vh;
                    }
                    .icon-delete{
                        position: absolute;
                        color: red;
                        right: 0; 
                        z-index: 2;
                    }
                `}</style>
            </div> 
        )
    }
}

function mapStateToProps(state){
    return{
        news: state.news,
        admin: state.membership.admin
    }
}

export default connect(mapStateToProps)(Admin) 