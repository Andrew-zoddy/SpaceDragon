import React, {useRef} from 'react';
import WelcomeText from "../WeclomeText/WelcomeText";
import DragonOverview from "../DragonOverview/DragonOverview";
import Slider from "../Carousel/Carousel";
import {Divider} from "antd";
import 'antd/dist/antd.dark.css';


const MainPage = ({dragonData}) => {

    // ref for scrolling in DOM
    const overviewRef = useRef()
    // scroll func on Arrow clicked
    const scrollToOverview = () => {
        window.scrollTo(0, overviewRef.current.offsetTop)

    }
    // return scrolled position back to top
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }


    return (

        <div>

            <WelcomeText scrollToOverview={scrollToOverview}/>
            <DragonOverview ref={overviewRef} dragonDataOverview={dragonData}/>
            <Divider
                style={
                    {
                        color: 'white',
                        fontFamily: 'Lato, sans-serif',
                        fontSize: '2rem',
                        fontStyle: 'italic',
                        textShadow: '1px 1px 10px white'
                    }
                }>
                ...and even more
            </Divider>
            <Slider dragonData={dragonData}/>
        </div>


    );
};

export default MainPage;