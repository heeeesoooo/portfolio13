import { Inner } from "./common";
import { Link } from 'react-router-dom';
import React from 'react';
import styled from "styled-components";

const BannerWrapper = styled.section`
background: #ddd;
`
const ContWrap = styled.div`
    display: flex;
    background: #fff;
`
const Left = styled.div`
width: 50%;
    ul {
    display: flex;
    li {
        img {
            width: 100%;
        }
    }
    }
`
const Right = styled.div`
flex: 1;
display: flex;
    p {
    width: 70%;
    }
    span {
    display: block;
    width: 30%;
    }
`

const MainBanner = () => {
    return (
        <BannerWrapper>
            <Inner className="inner">
                <ContWrap>
                    <Left>
                        <ul>
                            <li><Link to='/'><img src={process.env.PUBLIC_URL + '/img/banner01.png'} />쇼핑하기</Link></li>
                            <li><Link to='/'><img src={process.env.PUBLIC_URL + '/img/banner02.png'} />인기상품</Link></li>
                            <li><Link to='/'><img src={process.env.PUBLIC_URL + '/img/banner03.png'} />집들이</Link></li>
                            <li><Link to='/'><img src={process.env.PUBLIC_URL + '/img/banner04.png'} />공간사진</Link></li>
                            <li><Link to='/'><img src={process.env.PUBLIC_URL + '/img/banner05.png'} />집꾸TV</Link></li>
                        </ul>
                    </Left>
                    <Right>
                        <p>집꾸미기 신규 가입 혜택<br />5% 할인쿠폰 지급</p>
                        <span>가입하기</span>
                    </Right>
                </ContWrap>
            </Inner>
        </BannerWrapper>
    );
}

export default MainBanner;