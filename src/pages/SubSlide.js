import "slick-carousel/slick/slick.css";
import Sub_slide from "react-slick";
import styled from 'styled-components';
import { Inner } from "./common";
import { useRef } from "react";

const SubProduct = styled.section`
position: relative;

.button {
    border: 1px solid #fff;
    border-radius: 50%;
    background-color: transparent;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 56px;
    height: 56px;
    z-index: 999;
    cursor: pointer;
}

.prev {
    background-image: url(${process.env.PUBLIC_URL}/img/arrow_left.png);
    margin: 0 0 0 -700px;
}

.next {
    background-image: url(${process.env.PUBLIC_URL}/img/arrow_right.png);
    margin: 0 0 0 700px;
}


.content01 {
    background-image: url(${process.env.PUBLIC_URL}/img/sub_back01.png);
}
.content02 {
    background-image: url(${process.env.PUBLIC_URL}/img/sub_back02.png);
}
.content03 {
    background-image: url(${process.env.PUBLIC_URL}/img/sub_back03.png);
}
.content04 {
    background-image: url(${process.env.PUBLIC_URL}/img/sub_back04.png);
}
.content05 {
    background-image: url(${process.env.PUBLIC_URL}/img/sub_back05.png);
}

`

const Content = styled.div`
    position: relative;
    width: 100vw;
    min-width: 1440px;
    height: 526px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

.inner {
    display: flex;
    justify-content: space-between;
    position: absolute;
    inset: 50% auto auto 50%;
    transform: translate(-50%, -50%);
}

.left_wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;

    span {
        width:80px;
        font-size: 16px;
        padding: 10px 0;
        background: #222;
        text-align:center;
        margin-bottom: 30px;
    }

    h3 {
        font-size: 26px;
        font-weight: 500;
        line-height: 40px;
        margin-bottom: 20px;
    }

    p {
        font-size: 14px;
        font-weight: 200;
        margin-bottom: 20px;
    }

    a {
        text-align: center;
        padding: 15px 25px;
        border: 1px solid #fff;
    }
}

.prod_wrap {
    display: flex;
    gap: 30px;
    width: 80%;
}


`

const Itm = styled.div`
border-radius: 20px;
box-shadow: rgba(100, 111, 124, 0.2) 0px 2px 8px;
overflow: hidden;
cursor: pointer;

img {
    width: 100%;
}

.text_box {
    background: #fff;
    padding: 20px 20px;
}
.text_box .graytext {
    font-size: 16px;
    font-weight: 400;
    color: gray;
    margin-bottom: 20px;
}

.text_box .prod_name {
    width: auto;
    height: 25px;
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    margin-bottom: 10px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
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

`


const SubSlide = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
    }

    const sl = useRef(null)
    return (
        <SubProduct>
            <button className="prev button" onClick={() => sl.current.slickPrev()}></button>
            <button className="next button" onClick={() => sl.current.slickNext()}></button>
            <Sub_slide {...settings} className="sub_slide" ref={sl} >
                <Content className="content01">
                    <Inner className="inner">
                        <div className="left_wrap">
                            <span>기획전</span>
                            <h3>시공 비용<br />아낄 수 없을까?</h3>
                            <p>셀프 인테리어의 모든 것</p>
                            <a href="">기획전 상품 전체보기</a>
                        </div>
                        <figure className="prod_wrap">
                            <Itm>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/sub01_01.jpg'} />
                                </div>
                                <div className="text_box">
                                    <p className="graytext">퍼니윌</p>
                                    <p className="prod_name">원형 사각 간단 셀프 인테리어 붙이는 템바보드 침대헤드 3종</p>
                                    <strong>33%</strong>
                                    <span>8,000</span>
                                </div>
                            </Itm>
                            <Itm>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/sub01_02.jpeg'} />
                                </div>
                                <div className="text_box">
                                    <p className="graytext">아이띵킹</p>
                                    <p className="prod_name">베어파파 / 펭귄 드라이버 세트</p>
                                    <strong>20%</strong>
                                    <span>19,800</span>
                                </div>
                            </Itm>
                            <Itm>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/sub01_03.jpeg'} />
                                </div>
                                <div className="text_box">
                                    <p className="graytext">핸즈홈</p>
                                    <p className="prod_name">핸즈카페트 14종 1BOX(20장) 타일카페트</p>
                                    <strong>6%</strong>
                                    <span>65,900</span>
                                </div>
                            </Itm>
                        </figure>
                    </Inner>
                </Content>
                <Content className="content02">
                    <Inner className="inner">
                        <div className="left_wrap">
                            <span>기획전</span>
                            <h3>똑똑하게<br />쇼핑하기</h3>
                            <p>NEW 리퍼브 상품 업데이트!</p>
                            <a href="">기획전 상품 전체보기</a>
                        </div>
                        <figure className="prod_wrap">
                            <Itm>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/sub02_01.jpg'} />
                                </div>
                                <div className="text_box">
                                    <p className="graytext">애플</p>
                                    <p className="prod_name">애플 맥북프로 M1 칩 탑재 13형(RAM:8G) 256GB 실버 MYDA2KH/A</p>
                                    <strong>17%</strong>
                                    <span>1,440,000</span>
                                </div>
                            </Itm>
                            <Itm>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/sub02_02.jpg'} />
                                </div>
                                <div className="text_box">
                                    <p className="graytext">이정가구</p>
                                    <p className="prod_name">브레드 1인용 아쿠아텍스 소파</p>
                                    <strong>63%</strong>
                                    <span>60,000</span>
                                </div>
                            </Itm>
                            <Itm>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/sub02_03.jpg'} />
                                </div>
                                <div className="text_box">
                                    <p className="graytext">라쿠진</p>
                                    <p className="prod_name">라쿠진 24시간 보온 온도조절 분유포트 티포트</p>
                                    <strong>66%</strong>
                                    <span>43,900</span>
                                </div>
                            </Itm>
                        </figure>
                    </Inner>
                </Content>
                <Content className="content03">
                    <Inner className="inner">
                        <div className="left_wrap">
                            <span>기획전</span>
                            <h3>자취 생활<br />필수템 모음</h3>
                            <p>혼자서도 예쁘게 살 수 있어!</p>
                            <a href="">기획전 상품 전체보기</a>
                        </div>
                        <figure className="prod_wrap">
                            <Itm>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/sub03_01.jpg'} />
                                </div>
                                <div className="text_box">
                                    <p className="graytext">위닉스</p>
                                    <p className="prod_name">2022년 신상품 위닉스 미니건조기 2종 컴팩트건조기 자동건조 살균까지</p>
                                    <strong>5%</strong>
                                    <span>319,000</span>
                                </div>
                            </Itm>
                            <Itm>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/sub03_02.jpg'} />
                                </div>
                                <div className="text_box">
                                    <p className="graytext">라쿠진</p>
                                    <p className="prod_name">UV 초음파 살균 가습기 4.5L 상부급수 3colors</p>
                                    <strong>44%</strong>
                                    <span>49,900</span>
                                </div>
                            </Itm>
                            <Itm>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/sub03_03.jpg'} />
                                </div>
                                <div className="text_box">
                                    <p className="graytext">위즈홈</p>
                                    <p className="prod_name">오슬러 슬라이딩 옷정리 트레이 옷정리함 3size</p>
                                    <strong>56%</strong>
                                    <span>14,900</span>
                                </div>
                            </Itm>
                        </figure>
                    </Inner>
                </Content>
                <Content className="content04">
                    <Inner className="inner">
                        <div className="left_wrap">
                            <span>기획전</span>
                            <h3>1만 원으로 사는<br />갓성비 찬스</h3>
                            <p>최대 67% 할인</p>
                            <a href="">기획전 상품 전체보기</a>
                        </div>
                        <figure className="prod_wrap">
                            <Itm>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/sub04_01.jpg'} />
                                </div>
                                <div className="text_box">
                                    <p className="graytext">루시아이</p>
                                    <p className="prod_name">타원형 라운드 화장품 진열대 2단 소품 선반</p>
                                    <strong>49%</strong>
                                    <span>9,200</span>
                                </div>
                            </Itm>
                            <Itm>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/sub04_02.jpg'} />
                                </div>
                                <div className="text_box">
                                    <p className="graytext">밀다</p>
                                    <p className="prod_name">하이우드 원터치 휴지통</p>
                                    <strong>71%</strong>
                                    <span>5,800</span>
                                </div>
                            </Itm>
                            <Itm>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/sub04_03.jpg'} />
                                </div>
                                <div className="text_box">
                                    <p className="graytext">달팽이리빙</p>
                                    <p className="prod_name">드마망 규조토 발매트 S/M/L</p>
                                    <strong>43%</strong>
                                    <span>6,900</span>
                                </div>
                            </Itm>
                        </figure>
                    </Inner>
                </Content>
                <Content className="content05">
                    <Inner className="inner">
                        <div className="left_wrap">
                            <span>기획전</span>
                            <h3>하나 사면 하나 더!<br />무조건 득템 찬스</h3>
                            <p>NEW 리퍼브 상품 업데이트!</p>
                            <a href="">기획전 상품 전체보기</a>
                        </div>
                        <figure className="prod_wrap">
                            <Itm>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/sub05_01.jpg'} />
                                </div>
                                <div className="text_box">
                                    <p className="graytext">네이처리빙</p>
                                    <p className="prod_name">(1+1) 모노블 팬트리 정리함 리빙박스 (네임택 증정)</p>
                                    <strong>52%</strong>
                                    <span>6,900</span>
                                </div>
                            </Itm>
                            <Itm>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/sub05_02.jpg'} />
                                </div>
                                <div className="text_box">
                                    <p className="graytext">달팽이리빙</p>
                                    <p className="prod_name">(1+1) 퀴진드마망 올스텐 커트러리 2인세트(4P)</p>
                                    <strong>21%</strong>
                                    <span>11,500</span>
                                </div>
                            </Itm>
                            <Itm>
                                <div className="img_box">
                                    <img src={process.env.PUBLIC_URL + '/img/sub05_03.jpg'} />
                                </div>
                                <div className="text_box">
                                    <p className="graytext">구디푸디</p>
                                    <p className="prod_name">(1+1) 원터치 미니 휴지통 쓰레기통 화장대 책상 테이블</p>
                                    <strong>42%</strong>
                                    <span>7,500</span>
                                </div>
                            </Itm>
                        </figure>
                    </Inner>
                </Content>
            </Sub_slide>
        </SubProduct>
    );
}

export default SubSlide;