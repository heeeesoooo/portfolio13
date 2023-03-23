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


const ItmList01 = () => {
    return (
        <ProductList>
            <Inner className="inner">
                <H2>플랜테리어 완성템 🌸</H2>
                <P></P>
                <ProductWrap>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/product01.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">메이드모드</p>
                            <p className="prod_name">프리지아 부쉬 조화 4color </p>
                            <strong>27%</strong>
                            <span>6,600</span>
                        </div>
                    </Itm>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/product02.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">풀템</p>
                            <p className="prod_name">인테리어 조화 모음 화병 꽃 50종</p>
                            <strong>51%</strong>
                            <span>3,900</span>
                        </div>
                    </Itm>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/product03.jpeg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">앨빈디자인</p>
                            <p className="prod_name">스칸디아모스 탈취제거&실내공기정화 인테리어 액자</p>
                            <strong>36%</strong>
                            <span>16,900</span>
                        </div>
                    </Itm>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/product04.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">그린테라피</p>
                            <p className="prod_name">세라믹 무광 원형 화분 실내공기정화식물 세트</p>
                            <strong>20%</strong>
                            <span>7,900</span>
                        </div>
                    </Itm>
                </ProductWrap>
            </Inner>
        </ProductList >
    );
}

export default ItmList01;