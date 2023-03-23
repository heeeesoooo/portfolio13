import styled, { css } from "styled-components";

export const Inner = styled.div`
width: 1200px;
margin: 0 auto;
`

export const H2 = styled.h2`
font-size: 40px;
font-weight: 700;
margin-bottom: 15px;
`

export const P = styled.p`
font-size: 20px;
margin-bottom: 30px;
`

export const Itm = styled.div`
width: 25%;
box-shadow: 0 2px 10px rgba(0, 0, 0,0.1);
border-radius: 20px;
overflow: hidden;
cursor: pointer;


.img_box:hover img {
    transform: scale(1.1);
    transition: 0.5s;
}
.img_box img {
    width: 100%;
}
.img_box {
    overflow: hidden;
}

.text_box {
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
    font-size: 20px;
    font-weight: 600;
    color: #111;
}

.text_box span::after {
    content: '원';
}
`


// 아이템 리스트 기본 설정