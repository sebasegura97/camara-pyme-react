import React from 'react'
import Layout from './components/layout'
import CardNew from './components/card-new' 
import Portada from './components/portada'
import { connect } from 'react-redux'
import { addNew } from '../../redux/actions'
import { getNews } from '../../firebase/firestore'

class News extends React.Component {

    state = {
        news: this.props.news
    }
    componentWillMount() {
        getNews().then((news) => {
            console.log("news: ", news)
            this.props.dispatch(addNew(news))
        })
    }
    openNew = (item) => {
        console.log(item)
        const location = {
            pathname: `/app/full-new/${item.id}`,
            state: { item }
        }
        this.props.history.push(location);
        // Router.push({
        //     pathname: '/full-new',
        //     query: { 
        //         titulo: item.titulo,
        //         cuerpo: item.cuerpo,
        //         subtitulo: item.subtitulo,
        //         timeCreated: item.timeCreated,
        //         imageURL: item.imageURL
        //     }
        // })
    }
    render(){
        var { news } = this.props
        // console.log("time:", news[2].timeCreated)
        return(
            <div>
                <div className="row container-fluid m-0 p-0 ">
                    <Portada />
                </div>
                <div id="newsLayout" className="row m-0">
                    {
                        news.map( (item, index) => {
                        return(
                            <CardNew
                                key={index}
                                item={item}
                                onClick={()=>this.openNew(item)}
                            />
                        )     
                        })
                    }

                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        news: state.news
    }
}

export default connect(mapStateToProps)(News)