
import React from 'react'
import imgCart6 from "../../assets/img/cart/cart6.jpg";
import imgProduct44 from '../../assets/img/product/product44.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

import { increaseQuantity, descreaseQuantity } from '../../redux/slice/detail_Product';
import { addProduct } from '../../redux/slice/cart_Products';

const chooseSize = [
    {
        id: 1,
        size: 's',
        nameSize: 'small'
    },
    {
        id: 2,
        size: 'm',
        nameSize: 'medium'
    },
    {
        id: 3,
        size: 'l',
        nameSize: 'large'
    },
    {
        id: 4,
        size: 'xl',
        nameSize: 'x-large'
    },
];

const iconSocial = [
    {
        id: 1,
        name: "fa fa-facebook",
    },
    {
        id: 2,
        name: "fa fa-twitter",
    },
    {
        id: 3,
        name: "fa fa-pinterest",
    },
    {
        id: 4,
        name: "fa fa-google-plus",
    },
    {
        id: 5,
        name: "fa fa-linkedin",
    },
]

function DetailPopUp({setOnPopUp}) {
    const dispatch =useDispatch();
    const selectDetail = useSelector(state => state.detail_Product);
    console.log(selectDetail);

    return (
        <div className="modal fade show d-block" id="modal_box">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <button type="button" className="close" onClick={() => setOnPopUp(pre => !pre)}>
                        <span>x</span>
                    </button>
                    <div className="modal_body">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-12">
                                    <div className="modal_tab">
                                        <div className="tab-content product-details-large">
                                            <div className="tab-pane fade active show" id="tab1" >
                                                <div className="modal_tab_img">
                                                    <a ><img src={selectDetail.image} alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal_tab_button">
                                            <ul className="nav " style={{ width: '100%' }}>
                                                <div className="owl-stage-outer">
                                                    <div className="owl-stage position-relative d-flex">
                                                        <div className="owl-item cloned">
                                                            <li><a className="nav-link button_three" ><img src={imgCart6} alt="" /></a></li>
                                                        </div>
                                                        <div className="owl-item cloned">
                                                            <li><a className="nav-link button_three" ><img src={imgCart6} alt="" /></a></li>
                                                        </div>
                                                        <div className="owl-item cloned">
                                                            <li><a className="nav-link button_three" ><img src={imgCart6} alt="" /></a></li>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="owl-dots-popup position-absolute">
                                                    <div className="owl-dot-popup active-popup" >
                                                        <span></span>
                                                    </div>
                                                    <div className="owl-dot-popup" >
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-12">
                                    <div className="modal_right">
                                        <div className="modal_title mb-10">
                                            <h2>{selectDetail && selectDetail.name}</h2>
                                        </div>
                                        <div className="modal_price mb-10">
                                            <span className="new_price">${selectDetail && selectDetail.price}</span>
                                            <span className="old_price">${selectDetail && selectDetail.price + 20}</span>
                                        </div>
                                        <div className="modal_content mb-10">
                                            <p>Short-sleeved blouse with feminine draped sleeve detail.</p>
                                        </div>
                                        <div className="modal_size mb-15">
                                            <h2>size</h2>
                                            <ul>
                                                {chooseSize.map((item) => {
                                                    return (
                                                        <li key={item.id}>
                                                            <a>{item.size}</a>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <div className="modal_add_to_cart mb-15">
                                    
                                                <RemoveCircleRoundedIcon onClick={() => dispatch(descreaseQuantity(selectDetail))} style={{ cursor: 'pointer' }} />
                                                <span style={{ fontSize: '20px', background: '#E8EAF6', padding: '4px 7px 7px 7px' }}>{selectDetail.qty ? selectDetail.qty : 1}</span>
                                                <AddCircleRoundedIcon onClick={() => dispatch(increaseQuantity(selectDetail))} style={{ cursor: 'pointer' }} />

                                                <NavLink className='popup' to={'/cart'} onClick={() => dispatch(addProduct(selectDetail))}>add to cart</NavLink>
                            
                                        </div>
                                        <div className="modal_description mb-15">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                                        </div>
                                        <div className="modal_social">
                                            <h2>Share this product</h2>
                                            <ul>
                                                {
                                                    iconSocial.map((item) => {
                                                        return (
                                                            <li key={item.id}>
                                                                <a><i className={item.name}></i></a>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
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

export default DetailPopUp