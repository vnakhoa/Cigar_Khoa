

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import img250x250 from "../../../../assets/img/product/product6.jpg";
import { addProduct } from "../../../../redux/slice/cart_Products";
import { getDetailProduct } from '../../../../redux/slice/detail_Product';
import DetailPopUp from '../../../Detail/DetailPopUp';


function ShopProduct() {
    const [onPopUp, setOnPopUp] = useState(false);
    const dispatch = useDispatch();
    const data = useSelector(state => state.data_Products);
    console.log(data)

    return (
        <>
            <div className="shop_tab_product">
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="large" role="tabpanel">
                        <div className="row">
                            {
                                data.map((item) => {
                                    return (
                                        <div className="col-lg-3 col-md-4 col-sm-6" key={item._id}>
                                            <div className="single_product">
                                                <div className="product_thumb" onClick={() => dispatch(getDetailProduct({ ...item, qty: 1 }))}>
                                                    <NavLink to={'/detail'}><img src={item.img} alt="" /></NavLink>
                                                    <div className="btn_quickview">
                                                        <NavLink onClick={() => setOnPopUp(pre => !pre)}><i className="ion-ios-eye"></i></NavLink>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_ratting">
                                                        <ul>
                                                            <li><a><i className="ion-star"></i></a></li>
                                                            <li><a><i className="ion-ios-star-outline"></i></a></li>
                                                            <li><a><i className="ion-ios-star-outline"></i></a></li>
                                                            <li><a><i className="ion-ios-star-outline"></i></a></li>
                                                            <li><a><i className="ion-ios-star-outline"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <h3><a href="product-details.html">{item.name}</a></h3>
                                                    <div className="product_price">
                                                        <span className="current_price">${item.price}</span>
                                                    </div>
                                                    <div className="product_action">
                                                        <ul>
                                                            <li className="product_cart"><NavLink to={'/cart'} title="Add to Cart" onClick={() => dispatch(addProduct(item))}>Add to Cart</NavLink></li>
                                                            <li className="add_links"><NavLink title="Add to Wishlist"><i className="ion-ios-heart-outline"></i></NavLink></li>
                                                            <li className="add_links"><NavLink title="Add to Compare"><i className="ion-loop"></i></NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {onPopUp ? <DetailPopUp setOnPopUp={setOnPopUp}/> : <></>}
        </>
    )
}

export default ShopProduct;