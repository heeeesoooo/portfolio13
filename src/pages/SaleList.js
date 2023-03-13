



const SaleList = () => {
    return (
        <SaleProduct>
            <Inner>
                <SaleSlide>
                    <figure>
                        <div className="img_box"><img src={process.env.PUBLIC_URL + '/img/sale01'} /></div>
                        <div className="text_box"></div>
                    </figure>
                </SaleSlide>
            </Inner>
        </SaleProduct >
    );
}

export default SaleList;