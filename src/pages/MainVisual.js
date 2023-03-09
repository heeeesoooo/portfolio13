import React from 'react';
import "slick-carousel/slick/slick.css";
import MainSlide from "react-slick";
import styled from 'styled-components';

const MainVisual = styled.section`

figure {
    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
}

/* 슬라이드 설정 */
.slick-arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    background: none;
    border: none;
    font-size: 0;
    width: 50px;
    height: 50px;
    border-top: 2px solid #fff;
    border-left: 2px solid #fff;
}

.slick-prev {
    transform: translate(-50%, -50%) rotate(-45deg);
    margin: 0 0 0 -600px;
}

.slick-next {
    transform: translate(-50%, -50%) rotate(135deg);
    margin: 0 0 0 600px;
}
`

const Main = () => {
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
    }
    return (
        <MainVisual>
            <MainSlide {...settings}>
                <figure><img src={process.env.PUBLIC_URL + '/img/mainVisual01.png'} /></figure>
                <figure><img src={process.env.PUBLIC_URL + '/img/mainVisual02.png'} /></figure>
                <figure><img src={process.env.PUBLIC_URL + '/img/mainVisual03.png'} /></figure>
                <figure><img src={process.env.PUBLIC_URL + '/img/mainVisual04.png'} /></figure>
                <figure><img src={process.env.PUBLIC_URL + '/img/mainVisual05.png'} /></figure>
                <figure><img src={process.env.PUBLIC_URL + '/img/mainVisual06.png'} /></figure>
                <figure><img src={process.env.PUBLIC_URL + '/img/mainVisual07.png'} /></figure>
            </MainSlide>
        </MainVisual>
    );
}

export default Main;