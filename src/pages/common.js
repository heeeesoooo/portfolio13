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
gap: 30px;
border-radius: 20px;
cursor: pointer;

.img_box img {
    max-width: 100%;
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
`


// 아이템 리스트 기본 설정