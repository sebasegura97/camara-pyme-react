import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'
import { addNew } from '../../../redux/actions'
import { getNews } from '../../../firebase/firestore'
import { withRouter } from 'react-router-dom'

var items = [
    {
        src: '../../../../static/demo1.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: '../../../../static/demo2.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
];

class Portada extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            activeIndex: 0,
            carouselItems: [] 
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }
    async componentWillMount() {
        await getNews().then((news) => {
            this.props.dispatch(addNew(news))
            // Ordenamos las noticias por fecha:
            function comparar(a, b) {
                return b.timeCreated - a.timeCreated;
            }
            // solo las primeras 3 seran parte del carousel
            items = news.sort(comparar).slice(0,3)

            console.log("carousel items", items)
            this.setState({carouselItems: items})
        })
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.carouselItems.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.carouselItems.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
    carouselClick(item){
        const location = {
            pathname: `/app/full-new/${item.id}`,
            state: {item}
        }
        this.props.history.push(location);
    }
    render() {
        const { activeIndex, carouselItems } = this.state;

        var slides = carouselItems.map((item, index) => {
            if (window.matchMedia("(max-width: 700px)").matches) {
                /* The viewport is less than, or equal to, 700 pixels wide */
                var subtitulo = "";
            } else {
                /* The viewport is greater than 700 pixels wide */
                var subtitulo = item.subtitulo;
            }
            return (
                    <CarouselItem
                        onExiting={this.onExiting}
                        onExited={this.onExited}
                        key={index}
                        className="position-relative"
                    >
                        <div 
                            onClick={()=>this.carouselClick(item)}
                            className="touchable"                            
                            >
                            <img src={item.imageURL} className="w-100" alt={item.altText} />
                            <CarouselCaption 
                                className="d-block"
                                captionHeader={item.titulo} 
                                captionText={subtitulo} 
                                />
                        </div>
                    </CarouselItem>
            );
        });
        return (
            <div className="w-100 wideContainer">
                <div className="position-relative carouselContainer" >
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        className="w-100"
                        
                    >
                        <CarouselIndicators 
                            items={carouselItems} 
                            activeIndex={activeIndex} 
                            onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl className="zIndex20" direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl className="zIndex20" direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                        <div className="overlay" />
                
                </div>
                <style jsx>{`
                    .zIndex20{
                        z-index: 20;
                    }
                    .overlay{
                        position: absolute ;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        z-index: 0;
                        background: rgba(0,0,0,0.5)
                    }
                    .carouselContainer:hover{
                        cursor: pointer;
                    }

                    
                    `}</style>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        news: state.news
    }
}

export default withRouter(connect(mapStateToProps)(Portada));

