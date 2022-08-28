import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouselCom extends Component {
    render() {
        return (
            <Carousel showThumbs={false} autoPlay={true} transitionTime={3} >
                {this.props.data.map((item) => {
                    return (
                        <div>
                            <img src={item.imageUrl} height='450px' />
                            <p className="legend">{item.PropertyTitle}</p>
                        </div>
                    )

                })
                }
            </Carousel >
        );
    }
}
export default CarouselCom;