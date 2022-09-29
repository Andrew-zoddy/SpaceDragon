import React from 'react';
import 'antd/dist/antd.dark.css';
import {Carousel} from "antd";


const Slider = ({dragonData}) => {

    const {
        flickr_images: [...tailImages] = [],
    } = dragonData || {}


    return (
        <div style={{width:'90%', height:'50vh', margin:'0 auto'}}>
            <Carousel
                dotPosition='top'
                autoplay={true}>
                {
                    tailImages.map(i =>
                        <div key={i}>
                            <img style={
                                {
                                    objectFit:'contain',
                                    width:'100%',
                                    height:'65vh'

                                }} src={i} alt={'img' + i}/>
                        </div>)
                }

            </Carousel>
        </div>
    );
};

export default Slider;