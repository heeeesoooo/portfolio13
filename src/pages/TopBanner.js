import { Inner } from "./common";
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
import styled from "styled-components";


const TopBannerWrapper = styled.div`
display: flex;
position: relative;
background: rgb(255, 174, 12);
padding: 10px 0;
height: auto;
overflow: hidden;
transition: all 0.5s;

&.on {
    height: 0;
    padding: 0 0;
}

.inner {
    position: relative;
    display: flex;
    gap: 30px;
    justify-content: center;
    img {
        width: 70px;
    }
    p {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    }
    .x_icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    color: #fff;
    }
}

`

const TopBanner = () => {
    const [on, setOn] = useState(false);
    return (
        <TopBannerWrapper className={on ? 'on' : ''}>
            <Inner className="inner">
                <img src={process.env.PUBLIC_URL + '/img/topBanner01.png'} />
                <p>지금 앱 다운로드하고 회원가입하면 할인 쿠폰 즉시 지급!</p>
                <img src={process.env.PUBLIC_URL + '/img/topBanner01.png'} />
                <GrClose className="x_icon" onClick={() => setOn(true)} />
            </Inner>
        </TopBannerWrapper>
    )
}

export default TopBanner;