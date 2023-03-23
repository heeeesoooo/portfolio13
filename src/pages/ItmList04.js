import styled from "styled-components";
import { Inner, H2, P, Itm } from "./common";


const ProductList = styled.section`
    .inner {
    padding: 100px 0;
    }
    `

const ProductWrap = styled.div`
    display: flex;
    gap: 30px;
    `


const ItmList04 = () => {
    return (
        <ProductList>
            <Inner className="inner">
                <H2>깔끔한 옷정리가 가능한 행거 모음</H2>
                <P></P>
                <ProductWrap>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/product13.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">까사마루</p>
                            <p className="prod_name">루미나 2단 행거</p>
                            <strong>33%</strong>
                            <span>33,900</span>
                        </div>
                    </Itm>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/product14.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">이지온</p>
                            <p className="prod_name">국민튼튼 행거 드레스룸 옷걸이 고정식 행거 모음</p>
                            <strong>15%</strong>
                            <span>68,400</span>
                        </div>
                    </Itm>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/product15.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">까사마루</p>
                            <p className="prod_name">인테리어 서랍형 행거 모음 4type</p>
                            <strong>20%</strong>
                            <span>42,900</span>
                        </div>
                    </Itm>
                    <Itm>
                        <div className="img_box">
                            <img src={process.env.PUBLIC_URL + '/img/product16.jpg'} />
                        </div>
                        <div className="text_box">
                            <p className="graytext">에투가구</p>
                            <p className="prod_name">로맨스 디자인 철제 스탠드 행거 DIY</p>
                            <strong>30%</strong>
                            <span>59,900</span>
                        </div>
                    </Itm>
                </ProductWrap>
            </Inner>
        </ProductList >
    );
}

export default ItmList04;