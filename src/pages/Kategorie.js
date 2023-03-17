import { Inner, H2 } from "./common";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import KateSlide from "react-slick";

const KategorieWrap = styled.section`
padding: 100px 0;

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
    return (
        <KategorieWrap>
            <Inner>
                <H2>카테고리별 상품 찾기</H2>
                <KateSlide {...settings}>
                    <li><Link to='/'><img src={process.env.PUBLIC_URL + '/img/header01.png'} /> 가구</Link></li>
                    <li><Link to='/'><img src={process.env.PUBLIC_URL + '/img/header02.png'} />패브릭</Link></li>
                    <li><Link to='/'><img src={process.env.PUBLIC_URL + '/img/header03.png'} />주방</Link></li>
                    <li><Link to='/'><img src={process.env.PUBLIC_URL + '/img/header04.png'} />수납/정리</Link></li>
                    <li><Link to='/'><img src={process.env.PUBLIC_URL + '/img/header05.png'} />생활용품</Link></li>
                    <li><Link to='/'><img src={process.env.PUBLIC_URL + '/img/header06.png'} />조명</Link></li>
                    <li><Link to='/'><img src={process.env.PUBLIC_URL + '/img/header07.png'} />인테리어소품</Link></li>
                    <li><Link to='/'><img src={process.env.PUBLIC_URL + '/img/header08.png'} />가전</Link></li>
                    <li><Link to='/'><img src={process.env.PUBLIC_URL + '/img/header09.png'} />디지털</Link></li>
                    <li><Link to='/'><img src={process.env.PUBLIC_URL + '/img/header10.png'} />캠핑용품</Link></li>
                    <li><Link to='/'><img src={process.env.PUBLIC_URL + '/img/header11.png'} />반려동물</Link></li>
                </KateSlide>
            </Inner>
        </KategorieWrap>
    );
}

export default Kategorie;