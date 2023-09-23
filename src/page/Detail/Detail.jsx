import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import img118x118 from "../../assets/img/cart/cart10.jpg"
import model_img from "../../assets/img/product/bigimg1.jpg"
import { back } from "../../redux/slice/backHome"
import { addProduct } from '../../redux/slice/cart_Products'
import { descreaseQuantity, increaseQuantity } from '../../redux/slice/detail_Product'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded'

import { getProduct } from '../../service/api/product'
import { getDataProducts } from '../../redux/slice/data_Products'
import { getDetailProduct } from '../../redux/slice/detail_Product'

import { useSearchParams } from 'react-router-dom'

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
    const [selectDetail, setSelectDetail] = useState()
    const dispatch = useDispatch();
    // const params = useParams();
    const paramsSearch = useLocation().search;
    const params = useParams();
    console.log(paramsSearch, params);

    const select = useSelector(state => state.detail_Product);
    console.log(select)
    
    const handleGetData = async () => {
        if(paramsSearch && paramsSearch != ''){
            const  {data} = await getProduct(paramsSearch);
            console.log(data, 'data');
    
            dispatch(getDetailProduct({...data[0], qty: 1}));
            // setSelectDetail(data)
        }
        else{
            const  {data} = await getProduct(params.id);
            console.log(data, 'data');
            dispatch(getDetailProduct({...data[0], qty: 1}));
            
            setSelectDetail(data[0])
        }

    };
    
    useEffect(() => {
        handleGetData()
    }, [])
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
                                            <a><img src={selectDetail && selectDetail.image} alt="" /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="product_thumb_button">
                                    <ul className="nav product_d_button" role="tablist">
                                        {images.map((item) => {
                                            return (
                                                <li key={item.id}>
                                                    <a className={active == item.id ? "active" : ''} onClick={() => setActive(item.id)} >
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
                                <h3>{selectDetail && selectDetail.name}</h3>
                                <div className="product_price">
                                    <span className="current_price">${selectDetail && selectDetail.price}</span>
                                    <span className="old_price">${selectDetail && selectDetail.price + 20}</span>
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
                                    <p>{selectDetail && selectDetail.description}</p>
                                </div>
                                <div className="product_details_action">
                                    <h3>Available Options</h3>
                                    <div className="product_stock">
                                        <label>Quantity</label>
                                        <RemoveCircleRoundedIcon onClick={() => dispatch(descreaseQuantity(select))} style={{ cursor: 'pointer' }} />
                                        <span style={{ fontSize: '20px', background: '#E8EAF6', padding: '4px 7px 7px 7px' }}>{select.qty ? select.qty : 1}</span>
                                        <AddCircleRoundedIcon onClick={() => dispatch(increaseQuantity(select))} style={{ cursor: 'pointer' }} />
                                    </div>
                                    <div className="product_action_link">
                                        <ul>
                                            <li className="product_cart"><NavLink to={'/cart'} onClick={() => dispatch(addProduct(select))}>Add to Cart</NavLink></li>
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
