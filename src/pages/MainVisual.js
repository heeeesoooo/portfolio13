import React from 'react';
import "slick-carousel/slick/slick.css";
import MainSlide from "react-slick";
import styled from 'styled-components';

const MainVisual = styled.div`

figure {
    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
}
`

const Main = () => {
    return (
        <MainVisual>
            <MainSlide>
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