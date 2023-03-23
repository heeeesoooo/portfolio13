import styled from "styled-components";
import { Inner, H2, P, Itm } from "./common";


const ProductList = styled.section`
    .inner {
    padding: 100px 0;
    border-bottom: 1px solid #ddd;
    }
    `

const ProductWrap = styled.div`
    display: flex;
    gap: 30px;
    `


const ItmList03 = () => {
    return (
        <ProductList>
            <Inner className="inner">
                <H2>집꾸미기 SNS 인기템🔥</H2>
                <P></P>
                <ProductWrap>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/product09.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">보만</p>
                            <p className="prod_name">요거트메이커 우든디자인 간식 홈메이드</p>
                            <strong>29%</strong>
                            <span>52,900</span>
                        </div>
                    </Itm>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/product10.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">알럽하우스</p>
                            <p className="prod_name">짜파게티냄비 양은 주전자 라면 짜장 냄비 18cm</p>
                            <strong>52%</strong>
                            <span>12,900</span>
                        </div>
                    </Itm>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/product11.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">심플아이콘</p>
                            <p className="prod_name">국내생산 티타늄코팅 붕어빵팬 타코야키팬 호두과자팬 와플팬 간식팬모음</p>
                            <strong>65%</strong>
                            <span>13,900</span>
                        </div>
                    </Itm>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/product12.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">윈프라이스</p>
                            <p className="prod_name">360도 회전 다용도 주방 싱크선반 트레이</p>
                            <strong>26%</strong>
                            <span>5,900</span>
                        </div>
                    </Itm>
                </ProductWrap>
            </Inner>
        </ProductList >
    );
}

export default ItmList03;