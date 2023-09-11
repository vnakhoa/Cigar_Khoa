import React from 'react'

import img118x118 from "../../assets/img/cart/cart10.jpg"
import model_img from "../../assets/img/product/bigimg1.jpg"
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {back} from "../../redux/slice/backHome"

function Detail() {
    const dispatch = useDispatch();
    
    return (
        <>
            <div className="breadcrumbs_area">
                <div className="container">
                    <div className="breadcrumbs_inner">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_content">
                                    <h3>product details</h3>
                                    <ul>
                                        <li><NavLink to={'/home'} onClick={() => dispatch(back('HOME'))}>home</NavLink></li>
                                        <li><i className="fa fa-angle-right"></i></li>
                                        <li>product details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single_product_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="product_gallery">
                                <div className="tab-content produc_thumb_conatainer">
                                    <div className="tab-pane fade show active" id="p_tab1" role="tabpanel" >
                                        <div className="modal_img">
                                            <a href="#"><img src={model_img} alt=""/></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="product_thumb_button">    
                                    <ul className="nav product_d_button" role="tablist">
                                        <li >
                                            <a className="active" data-bs-toggle="tab" href="#p_tab1" role="tab" aria-controls="p_tab1" aria-selected="false"><img src={img118x118} alt=""/></a>
                                        </li>
                                        <li>
                                             <a data-bs-toggle="tab" href="#p_tab2" role="tab" aria-controls="p_tab2" aria-selected="false"><img src={img118x118} alt=""/></a>
                                        </li>
                                        <li>
                                           <a data-bs-toggle="tab" href="#p_tab3" role="tab" aria-controls="p_tab3" aria-selected="false"><img src={img118x118} alt=""/></a>
                                        </li>
                                        <li>
                                           <a data-bs-toggle="tab" href="#p_tab4" role="tab" aria-controls="p_tab4" aria-selected="false"><img src={img118x118} alt=""/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="product_details">
                                <h3>Nonstick Dishwasher PFOA</h3>
                                <div className="product_price">
                                    <span className="current_price">$23.00</span>
                                    <span className="old_price">$28.00</span>
                                </div>
                                <div className="product_ratting">
                                    <ul>
                                        <li><a href="#"><i className="ion-star"></i></a></li>
                                        <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                        <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                        <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                        <li><a href="#"><i className="ion-ios-star-outline"></i></a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="#">1 Review</a></li>
                                    </ul>
                                </div>
                               <div className="product_description">
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis laborum, facilis in provident pariatur, assumenda accusantium asperiores iste corrupti laboriosam quasi eius illum minus aperiam doloribus, distinctio unde? Nam recusandae ipsam repellendus repellat eum nisi obcaecati, doloremque mollitia iste, ab delectus, error quia, quae eligendi!</p>
                               </div>
                                <div className="product_details_action">
                                    <h3>Available Options</h3>
                                    <div className="product_stock">
                                        <label>Quantity</label>
                                        <input min="1" value="1" max="100" type="number" />
                                    </div>
                                    <div className="product_action_link">
                                        <ul>
                                            <li className="product_cart"><a href="cart.html" title="Add to Cart">Add to Cart</a></li>
                                            <li className="add_links"><a href="#" title="Add to Wishlist"><i className="ion-ios-heart-outline"></i> Add to wishlist</a></li>
                                            <li className="add_links"><a href="#" title="Add to Compare"><i className="ion-loop"></i> Add to compare</a></li>
                                        </ul>
                                    </div>
                                    <div className="social_sharing">
                                        <span>Share</span>
                                        <ul>
                                            <li><a href="#" className="bg-facebook" data-bs-toggle="tooltip" title="Facebook"><i className="fa fa-facebook"></i> Share</a></li>
                                            <li><a href="#" className="bg-Tweet" data-bs-toggle="tooltip" title="twitter"><i className="fa fa-twitter"></i> Tweet</a></li>
                                            <li><a href="#" className="bg-google" data-bs-toggle="tooltip" title="google-plus"><i className="fa fa-google-plus"></i> Google+</a></li>
                                            <li><a href="#" className="bg-pinterest" data-bs-toggle="tooltip" title="pinterest"><i className="fa fa-pinterest"></i> Pinterest</a></li>
                                        </ul>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail
