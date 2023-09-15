import React, { useState } from 'react'

import img118x118 from "../../assets/img/cart/cart10.jpg"
import model_img from "../../assets/img/product/bigimg1.jpg"
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { back } from "../../redux/slice/backHome"
import { addProduct, deleteProduct } from '../../redux/slice/cart_Products'
import { increaseQuantity, descreaseQuantity } from '../../redux/slice/detail_Product'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

const images = [
    {
        id: 1,
        img: img118x118,
    },
    {
        id: 2,
        img: img118x118,
    },
    {
        id: 3,
        img: img118x118,
    },
    {
        id: 4,
        img: img118x118,
    },
]

const URL = [
    {
        id: 1,
        icon: "fa fa-facebook",
        name: 'Share',
    },
    {
        id: 2,
        icon: "fa fa-twitter",
        name: 'Tweet',
    },
    {
        id: 3,
        icon: "fa fa-google-plus",
        name: 'Google+',
    },
    {
        id: 4,
        icon: "fa fa-pinterest",
        name: 'Pinterest',
    },

]

function Detail() {
    const [active, setActive] = useState(1);
    const dispatch = useDispatch();
    const selectDetail = useSelector(state => state.detail_Product);
    console.log(selectDetail, 'selectDe')

    console.log('renderrrrrr')
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
                                            <a><img src={model_img} alt="" /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="product_thumb_button">
                                    <ul className="nav product_d_button" role="tablist">
                                        {images.map((item) => {
                                            return (
                                                <li key={item.id}>
                                                    <a className={active == item.id ? "active" : ''} onClick={() => setActive(item.id)} data-bs-toggle="tab" href="#p_tab1" role="tab" aria-controls="p_tab1" aria-selected="false">
                                                        <img src={item.img} alt="" />
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="product_details">
                                <h3>{selectDetail.name}</h3>
                                <div className="product_price">
                                    <span className="current_price">${selectDetail.price}</span>
                                    <span className="old_price">$28.00</span>
                                </div>
                                <div className="product_ratting">
                                    <ul>
                                        <li><a><i className="ion-star"></i></a></li>
                                        <li><a><i className="ion-ios-star-outline"></i></a></li>
                                        <li><a><i className="ion-ios-star-outline"></i></a></li>
                                        <li><a><i className="ion-ios-star-outline"></i></a></li>
                                        <li><a><i className="ion-ios-star-outline"></i></a></li>
                                    </ul>
                                    <ul>
                                        <li><a>1 Review</a></li>
                                    </ul>
                                </div>
                                <div className="product_description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis laborum, facilis in
                                        provident pariatur, assumenda accusantium asperiores iste corrupti laboriosam quasi eius illum
                                        minus aperiam doloribus, distinctio unde? Nam recusandae ipsam repellendus repellat eum
                                        nisi obcaecati, doloremque mollitia iste, ab delectus, error quia, quae eligendi!
                                    </p>
                                </div>
                                <div className="product_details_action">
                                    <h3>Available Options</h3>
                                    <div className="product_stock">
                                        <label>Quantity</label>
                                        <RemoveCircleRoundedIcon onClick={() => dispatch(descreaseQuantity(selectDetail))} style={{ cursor: 'pointer' }} />
                                        <span style={{ fontSize: '20px', background: '#E8EAF6', padding: '4px 7px 7px 7px' }}>{selectDetail.qty}</span>
                                        <AddCircleRoundedIcon onClick={() => dispatch(increaseQuantity(selectDetail))} style={{ cursor: 'pointer' }} />
                                    </div>
                                    <div className="product_action_link">
                                        <ul>
                                            <li className="product_cart"><NavLink to={'/cart'} onClick={() => dispatch(addProduct(selectDetail))}>Add to Cart</NavLink></li>
                                            <li className="add_links"><a><i className="ion-ios-heart-outline"></i> Add to wishlist</a></li>
                                            <li className="add_links"><a><i className="ion-loop"></i> Add to compare</a></li>
                                        </ul>
                                    </div>
                                    <div className="social_sharing">
                                        <span>Share</span>
                                        <ul>
                                            {URL.map((item) => {
                                                return <li key={item.id}><a><i className={item.icon}></i>{item.name}</a></li>
                                            })}
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
