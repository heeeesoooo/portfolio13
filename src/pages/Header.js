import { Inner } from "./common";
import { Link } from 'react-router-dom';
import { FiUser, FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import styled from "styled-components";

const HeaderWrapper = styled.header`
`

//헤더
const HeaderTop = styled.div`
padding: 20px 0;
border-bottom: 1px solid #ddd;
.inner {
    display: flex;
    justify-content: space-between;
}
`

const H1 = styled.h1`
img {
    width: 200px;
}
`
const Right = styled.div`
display: flex;
align-items: center;
font-size: 30px;
gap: 30px;
`
// 헤더 메뉴
const HeaderBottom = styled.div`
z-index: 999;
position: relative;
line-height: 50px;
box-shadow: 0px 2px 5px #ddd;

.inner {
    display: flex;
    justify-content: space-between;
}
.globalNav {
}
.globalNav>ul {
    position: relative;
    display: flex;
    gap: 30px;
    font-size: 20px;
    font-weight: 700;
}

.globalNav>ul>li .smenu_wrap{
    position: absolute;
    top: auto;
    left: 0;

    font-size: 16px;
    font-weight: 500;
    background: #fff;

    display: none;
}

.globalNav>ul>li:hover .smenu_wrap{
    display: block;
}

.globalNav>ul>li .smenu_wrap .smenu {
    display: flex;
    gap: 10px;
    text-align: center;

    width: 1200px;
    margin: 0 auto;
}

.globalNav>ul>li .smenu_wrap .smenu img{
    width: 100px;
    height: 70px;
}
`
const User = styled.div`

ul {
    display: flex;
    gap: 30px;
}
`

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderTop>
                <Inner className="inner">
                    <H1>
                        <Link to='/'>
                            <img src={process.env.PUBLIC_URL + '/img/logo.png'} />
                        </Link>
                    </H1>
                    <Right>
                        <FiUser />
                        <FiHeart />
                        <FiShoppingCart />
                        <FiSearch />
                    </Right>
                </Inner>
            </HeaderTop>
            <HeaderBottom>
                <Inner className="inner">
                    <nav className="globalNav">
                        <ul>
                            <li><Link to='/'>홈</Link></li>
                            <li><Link to='/'>카테고리</Link>
                                <div className="smenu_wrap">
                                    <ul className="smenu">
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
                                    </ul>
                                </div>
                            </li>
                            <li><Link to='/'>베스트</Link></li>
                            <li><Link to='/'>스토어</Link></li>
                            <li><Link to='/'>매거진</Link></li>
                        </ul>
                    </nav>
                    <User>
                        <ul>
                            <li><Link to='/'>로그인</Link></li>
                            <li><Link to='/'>회원가입</Link></li>
                            <li><Link to='/'>비회원</Link></li>
                            <li><Link to='/'>고객센터</Link></li>
                        </ul>
                    </User>
                </Inner>
            </HeaderBottom>
        </HeaderWrapper>
    );
}

export default Header;