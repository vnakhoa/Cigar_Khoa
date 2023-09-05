

import React from 'react'

function ShopNavigate() {
    return (
        <div class="row">
            <div class="col-12">
                <div class="shop_toolbar">

                    <div class="list_button">
                        <ul class="nav" role="tablist">
                            <li>
                                <a class="active" data-bs-toggle="tab" href="#large" role="tab" aria-controls="large" aria-selected="true"><i class="ion-grid"></i></a>
                            </li>
                            <li>
                                <a data-bs-toggle="tab" href="#list" role="tab" aria-controls="list" aria-selected="false"><i class="ion-android-menu"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="select_option number">
                        <form action="#">
                            <label>Show:</label>
                            <select name="orderby" id="short">
                                <option selected value="1">9</option>
                                <option value="1">19</option>
                                <option value="1">30</option>
                            </select>
                        </form>
                    </div>
                    <div class="select_option">
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