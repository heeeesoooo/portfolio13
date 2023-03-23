import { Inner } from "./common";
import { Link } from 'react-router-dom';
import React from 'react';
import styled from "styled-components";

const BannerWrapper = styled.section`
position: relative;
margin: -70px auto 0;
`
const ContWrap = styled.div`
    display: flex;
    background: #fff;
    padding: 20px 0;
    border-radius: 30px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`
const Left = styled.div`
width: 50%;
border-right: 1px solid #ddd;
    ul {
    display: flex;
    justify-content: center;
    gap: 30px;
    text-align: center;
    li {
        width: 80px;
        img {
            width: 100%;
            border-radius: 50%;
            margin-bottom: 10px;
        }
    }
    }
`
const Right = styled.div`
padding: 0 30px;
flex: 1;
display: flex;
justify-content: space-between;
align-items: center;
    p {
    width: 70%;
    font-size: 20px;
    line-height: 1.5;
    b{
        font-weight: 700;
    }
    }
    span {
    display: block;
    text-align: center;
    width: 150px;
    border-radius: 30px;

    font-size: 20px;
    font-weight: 700;
    line-height: 40px;
    color: #fff;
    background: linear-gradient(rgb(248, 106, 69) 0%, rgb(255, 104, 142) 100%);
    cursor: pointer;
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
                        <p>집꾸미기 신규 가입 혜택<br /><b>5% 할인쿠폰 지급</b></p>

                        <span>가입하기</span>
                    </Right>
                </ContWrap>
            </Inner>
        </BannerWrapper>
    );
}

export default MainBanner;