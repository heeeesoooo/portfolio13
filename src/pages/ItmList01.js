import styled from "styled-components";
import { Inner, H2, Itm } from "./common";


const ProductList = styled.section`
    padding: 100px 0
    `

const ProductWrap = styled.div`
    display: flex;
    gap: 30px;
    `


const ItmList01 = () => {
    return (
        <ProductList>
            <Inner className="inner">
                <H2>플랜테리어 완성템 🌸</H2>
                <ProductWrap>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/sale01.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">달팽이리빙</p>
                            <p className="prod_name">퀴진드마망 자동오픈 계란 한판 보관함 트레이(3단/30구)</p>
                            <strong>51%</strong>
                            <span>8,900</span>
                        </div>
                    </Itm>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/sale02.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">쉬즈홈</p>
                            <p className="prod_name">스무디 먼지없는 피치스킨 차렵이불 침구세트 5colors</p>
                            <strong>50%</strong>
                            <span>24,900</span>
                        </div>
                    </Itm>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/sale03.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">셀프인테리어</p>
                            <p className="prod_name">미니 포켓 보조배터리 PG-PB02</p>
                            <strong>14%</strong>
                            <span>29,800</span>
                        </div>
                    </Itm>
                </ProductWrap>
            </Inner>
        </ProductList >
    );
}

export default ItmList01;