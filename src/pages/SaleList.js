import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SaleSlide from "react-slick";
import { Inner } from "./common";

const H2 = styled.h2`
font-size: 40px;
font-weight: 700;
margin-bottom: 15px;
`
const P = styled.p`
font-size: 20px;
margin-bottom: 30px;
`

const SaleProduct = styled.section`
position: relative;
padding: 100px 0;

.slide_wrap {
    margin: 0 -15px;
}
.prod_wrap {
    padding: 0 15px;
}

.img_box img {
    width: 100%;
}

.text_box .graytext {
    font-size: 16px;
    font-weight: 400;
    color: gray;
    margin-bottom: 20px;
}

.text_box .prod_name {
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    min-height: 50px;
    margin-bottom: 10px;
}

.text_box strong {
    font-size: 30px;
    font-weight: 700;
    color: red;
    margin-right: 10px;
}

.text_box span {
    font-size: 16px;
    font-weight: 500;
}




/* 슬라이드 설정 */
.slick-arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
}

.slick-prev {
    background-image: url('/img/arrow_left.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    margin: 0 0 0 -700px;
}

.slick-next {
    background: url('/img/arrow_right.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    margin: 0 0 0 700px;
}

.slick-arrow::before {
    display: none;
}

`


const SaleList = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
    }
    return (
        <SaleProduct>
            <Inner className="inner">
                <H2>투데이특가</H2>
                <P>매일매일 추가되는 100여개의 상품</P>
                <SaleSlide {...settings} className="slide_wrap">
                    <figure className="prod_wrap">
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/sale01.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">달팽이리빙</p>
                            <p className="prod_name">퀴진드마망 자동오픈 계란 한판 보관함 트레이(3단/30구)</p>
                            <strong>51%</strong>
                            <span>8,900</span>
                        </div>
                    </figure>
                    <figure className="prod_wrap">
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/sale02.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">쉬즈홈</p>
                            <p className="prod_name">스무디 먼지없는 피치스킨 차렵이불 침구세트 5colors (S/Q)</p>
                            <strong>50%</strong>
                            <span>24,900</span>
                        </div>
                    </figure>
                    <figure className="prod_wrap">
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/sale03.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">셀프인테리어</p>
                            <p className="prod_name">미니 포켓 보조배터리 PG-PB02</p>
                            <strong>14%</strong>
                            <span>29,800</span>
                        </div>
                    </figure>
                    <figure className="prod_wrap">
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/sale04.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">콜라보스페이스</p>
                            <p className="prod_name">케이블매니저 무타공 멀티탭 거치대 케이블 정리함 선반</p>
                            <strong>35%</strong>
                            <span>29,900</span>
                        </div>
                    </figure>
                    <figure className="prod_wrap">
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/sale05.jpeg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">셀프인테리어</p>
                            <p className="prod_name">벤소닉 캐리어 3종세트</p>
                            <strong>59%</strong>
                            <span>69,900</span>
                        </div>
                    </figure>
                    <figure className="prod_wrap">
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/sale06.jpeg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">셀프인테리어</p>
                            <p className="prod_name">차가우면 벚꽃이 피는 술잔 4p세트</p>
                            <strong>47%</strong>
                            <span>6,900</span>
                        </div>
                    </figure>
                    <figure className="prod_wrap">
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/sale07.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">레드팟</p>
                            <p className="prod_name">콘스쁘띠 디자인 빈백 1인용 쇼파 (12 Type)</p>
                            <strong>29%</strong>
                            <span>70,000</span>
                        </div>
                    </figure>
                    <figure className="prod_wrap">
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/sale08.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">로즈소녀하우스</p>
                            <p className="prod_name">3단 북트롤리 이동식책꽂이</p>
                            <strong>23%</strong>
                            <span>19,900</span>
                        </div>
                    </figure>
                </SaleSlide>
            </Inner>
        </SaleProduct >
    );
}

export default SaleList;