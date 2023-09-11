

import React from 'react';
import img250x250 from "../../../../assets/img/product/product6.jpg";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from "../../../../redux/slice/cart_Products"

function ShopProduct() {
    const dispatch = useDispatch();
    
    return (
        <div className="shop_tab_product">
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="large" role="tabpanel">
                    <div className="row">
                        
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <NavLink to={'/detail'}><img src={img250x250} alt="" /></NavLink>
                                    <div className="btn_quickview">
                                        <NavLink to={'/detail'} data-bs-toggle="modal" data-bs-target="#modal_box" title="Quick View"><i className="ion-ios-eye"></i></NavLink>
                                    </div>
                                </div>
                                <div className="product_content">
                                    <div className="product_ratting">
                                        <ul>
                                            <li><a href="#"><i className="ion-star"></i></a></li>
                                            <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                            <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                            <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                            <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                        </ul>
                                    </div>
                                    <h3><a href="product-details.html">Game Controller</a></h3>
                                    <div className="product_price">
                                        <span className="current_price">$23.00</span>
                                    </div>
                                    <div className="product_action">
                                        <ul>
                                            <li className="product_cart"><NavLink to={'/cart'} title="Add to Cart" onClick={() => dispatch(addProduct({khoa: 'This is product khoa'}))}>Add to Cart</NavLink></li>
                                            <li className="add_links"><NavLink title="Add to Wishlist"><i className="ion-ios-heart-outline"></i></NavLink></li>
                                            <li className="add_links"><NavLink title="Add to Compare"><i className="ion-loop"></i></NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopProduct;