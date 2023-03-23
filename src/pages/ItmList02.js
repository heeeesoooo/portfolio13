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


const ItmList02 = () => {
    return (
        <ProductList>
            <Inner className="inner">
                <H2>떠나기 좋은 봄! 캠핑용품 기획전 🏕️</H2>
                <P></P>
                <ProductWrap>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/product05.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">모던한잡화점</p>
                            <p className="prod_name">감성 캠핑 가스 버너바람막이 주방 렌지가드 구이바다 M L + 전용에코백 </p>
                            <strong>19%</strong>
                            <span>34,000</span>
                        </div>
                    </Itm>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/product06.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">들살이</p>
                            <p className="prod_name">LED 캠핑 폴딩박스</p>
                            <strong>38%</strong>
                            <span>35,900</span>
                        </div>
                    </Itm>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/product07.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">상승석</p>
                            <p className="prod_name">감성 캠핑가루 매직파이어 10p 오로라불멍 가루 레인보우 도깨비불 25g 크라프트</p>
                            <strong>38%</strong>
                            <span>9,300</span>
                        </div>
                    </Itm>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/product08.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">블럭버너</p>
                            <p className="prod_name">고화력 국내제조 블럭버너 미니 mini 초록 & 빨강 가스버너 가스레인지 휴대용 부르스타</p>
                            <strong>35%</strong>
                            <span>55,000</span>
                        </div>
                    </Itm>
                </ProductWrap>
            </Inner>
        </ProductList >
    );
}

export default ItmList02;