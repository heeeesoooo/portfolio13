import { Inner, H2, P } from "./common";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import KateSlide from "react-slick";
import { useRef } from "react";

const KategorieWrap = styled.section`
/* background: linear-gradient(rgb(238, 241, 245) -28.1%, rgb(243, 245, 251) 132.46%); */
padding: 100px 0;
position: relative;

.inner {
    overflow: hidden;
}

.kateSlide{
    text-align: center;
    margin: 0 -15px;
}

.kateSlide li figure {
    margin: 0 15px;
}


.img_box {
    min-height: 96px;
    border-radius: 50%;
    background: rgb(232, 239, 250);
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 15px;

    img {
    width: 100%;
}
}



.slick-arrow {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 0;
    position: absolute;
    top: -50px;
    transform: translate(-50%, -50%);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 32px;
    height: 32px;
}

.slick-prev {
    background-image: url(${process.env.PUBLIC_URL}/img/arrow_13.png);
    right: 50px;
}

.slick-next {
    background-image: url(${process.env.PUBLIC_URL}/img/arrow_14.png);
    right: 0;
}
`

const Kategorie = () => {
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 10,
    }
    const sl = useRef(null)
    return (
        <KategorieWrap>
            <Inner className="inner">
                <H2>카테고리별 상품 찾기</H2>
                <P></P>
                <KateSlide {...settings} className="kateSlide" ref={sl}>
                    <li>
                        <figure>
                            <Link to='/'>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/header01.png'} />
                                </div>
                                <p>가구</p>
                            </Link>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Link to='/'>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/header02.png'} />
                                </div>
                                <p>패브릭</p>
                            </Link>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Link to='/'>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/header03.png'} />
                                </div>
                                <p>주방</p>
                            </Link>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Link to='/'>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/header04.png'} />
                                </div>
                                <p>수납/정리</p>
                            </Link>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Link to='/'>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/header05.png'} />
                                </div>
                                <p>생활용품</p>
                            </Link>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Link to='/'>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/header06.png'} />
                                </div>
                                <p>조명</p>
                            </Link>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Link to='/'>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/header07.png'} />
                                </div>
                                <p>인테리어소품</p>
                            </Link>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Link to='/'>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/header08.png'} />
                                </div>
                                <p>가전</p>
                            </Link>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Link to='/'>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/header09.png'} />
                                </div>
                                <p>디지털</p>
                            </Link>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Link to='/'>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/header10.png'} />
                                </div>
                                <p>캠핑용품</p>
                            </Link>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Link to='/'>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/header11.png'} />
                                </div>
                                <p>반려동물</p>
                            </Link>
                        </figure>
                    </li>
                </KateSlide>
            </Inner>
        </KategorieWrap>
    );
}

export default Kategorie;