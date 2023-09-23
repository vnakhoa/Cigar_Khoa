

import React from 'react'

function ShopNavigate() {
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
                                <a className="active" style={{color: '#fff'}}><i className="ion-android-menu"></i></a>
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
                            <select name="orderby" id="short1">
                                <option selected value="1">Position</option>
                                <option value="1">Price: Lowest</option>
                                <option value="1">Price: Highest</option>
                                <option value="1">Product Name:Z</option>
                                <option value="1">Sort by price:low</option>
                                <option value="1">Product Name: Z</option>
                                <option value="1">In stock</option>
                                <option value="1">Product Name: A</option>
                                <option value="1">In stock</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopNavigate