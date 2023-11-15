
import React from 'react'

function ShopNavigate({ sortProduct, setSortProduct }) {
    return (
        <div className="row">
            <div className="col-12">
                <div className="shop_toolbar">

                    <div className="list_button">
                        <ul className="nav" role="tablist">
                            <li>
                                <a className="active"><i className="ion-grid"></i></a>
                            </li>
                            <li>
                                <a className="active" style={{ color: '#fff' }}><i className="ion-android-menu"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="select_option number">
                        <form action="#">
                            <label>Show:</label>
                            <select name="orderby" id="short">
                                <option selected value="1">9</option>
                                <option value="1">19</option>
                                <option value="1">30</option>
                            </select>
                        </form>
                    </div>
                    <div className="select_option">
                        <form action="#">
                            <label>Sort By</label>
                            <select name="orderby" id="short1" onChange={(e) => setSortProduct(e.target.value)}>
                                <option selected value="normal">Normal</option>
                                <option value="lowest">Price: Lowest</option>
                                <option value="highest">Price: Highest</option>
                                <option value="A-Z">Product Name: A-Z</option>
                                <option value="Z-A">Product Name: Z-A</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopNavigate