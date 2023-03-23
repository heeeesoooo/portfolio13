import { Inner } from "./common";
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import styled from "styled-components";


const FooterWrapper = styled.footer`
background: rgb(247, 248, 249);

.f_inner {
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #555;
}
`

const UL = styled.ul`
    display: flex;
    font-size: 18px;
    font-weight: 500;
    line-height: 40px;

li~li::before {
    content: "";
    margin: 0 20px;
    display: inline-block;
    width: 1px;
    height: 12px;
    background: #555;
}
`

const SnsWrap = styled.div`
display: flex;
gap: 30px;

font-size: 20px;

a {
    display: flex;
    align-items: center;
    justify-content:center;

    width: 40px;
    height: 40px;
    color: #fff;
    background: #555;
    border-radius: 50%;
}
`

const FooterAddress = styled.div`
line-height:30px;

.flex {
    display: flex;

    li~li::before {
    content: "";
    margin: 0 20px;
    display: inline-block;
    width: 1px;
    height: 12px;
    background: #555;
    }
}
.abc {
    margin: 20px 0;
}
`

const FooterCall = styled.div`
span {
    display:block;
    font-size: 20px;
    font-weight: 500;
}
strong{
    font-size:40px;
    font-weight: 700;
    line-height:70px
}

p {
    line-height:24px;
}
`

const FooterTop = () => {
    return (
        <Inner className="f_inner">
            <UL>
                <li><Link to='/'>이용약관</Link></li>
                <li><Link to='/'>제휴문의</Link></li>
                <li><Link to='/'>입점문의</Link></li>
                <li><Link to='/'>개인정보처리방침</Link></li>
                <li><Link to='/'>회사소개</Link></li>
            </UL>
            <SnsWrap>
                <a href="/" target="_blank"><BsInstagram /></a>
                <a href="/" target="_blank"><BsFacebook /></a>
                <a href="/" target="_blank"><BsYoutube /></a>
            </SnsWrap>
        </Inner>
    );
}

const FooterBottom = () => {
    return (
        <Inner className="f_inner">
            <FooterAddress>
                <ul className="flex">
                    <li>대표이사 : 길경환</li>
                    <li>사업자등록번호 : 142-81-50856</li>
                    <li>통신판매업신고 : 2022-서울강남-06224</li>
                </ul>
                <ul>
                    <li>주소: 서울특별시 강남구 언주로 417, 더체크빌딩 3층</li>
                    <li>개인정보관리책임자 : 길경환</li>
                    <li className="abc">안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 KG 이니시스의 구매안전 서비스를 이용하실 수 있습니다.</li>
                </ul>
            </FooterAddress>
            <FooterCall>
                <span>고객센터</span>
                <strong>1522-7966</strong>
                <p>평일 10:00 ~ 17:00</p>
                <p>주말 및 공휴일 제외</p>
                <p>(점심시간 : 12:30 ~ 13:30)</p>
            </FooterCall>
        </Inner>
    );
}

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterTop />
            <FooterBottom />
        </FooterWrapper>
    );
}

export default Footer;