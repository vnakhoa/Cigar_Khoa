import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { addProduct } from '../../redux/slice/cart_Products'
import { descreaseQuantity, increaseQuantity } from '../../redux/slice/detail_Product'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded'

import Slider from 'react-slick'
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { getDetailProduct } from '../../redux/slice/detail_Product'
import { getProduct } from '../../service/api/product'
import { MinimizeSharp } from '@mui/icons-material'

const imagesArr = [
    {
        id: 1,
        img: 'https://htmldemo.hasthemes.com/cigar/cigar/assets/img/cart/cart10.jpg',
    },
    {
        id: 2,
        img: 'https://htmldemo.hasthemes.com/cigar/cigar/assets/img/cart/cart11.jpg',
    },
    {
        id: 3,
        img: 'https://htmldemo.hasthemes.com/cigar/cigar/assets/img/cart/cart9.jpg',
    },
    {
        id: 4,
        img: 'https://htmldemo.hasthemes.com/cigar/cigar/assets/img/cart/cart12.jpg',
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
    const [active, setActive] = useState(0);
    const [selectDetail, setSelectDetail] = useState()
    const [imageShow, setImageShow] = useState()
    const dispatch = useDispatch();

    const params = useParams();
    const paramsSearch = useLocation().search;
    console.log('jjj', paramsSearch, 'jj', params, 'kknkjnknkjbvkbsvkbv');

    const select = useSelector(state => state.detail_Product);
    console.log(select, 'select useSeletor')

    const newImagesArr = [{ id: 0, img: select.image }, ...imagesArr];
    console.log(imagesArr)

    const handleGetData = async () => {
        if (paramsSearch && paramsSearch != '') {
            const { data } = await getProduct(paramsSearch);
            console.log(data[0], data, 'dataDetail516131166');

            dispatch(getDetailProduct({ ...data[0], qty: 1 }));
            // setSelectDetail(data)
        }
        else {
            const { data } = await getProduct(params.id);
            console.log(data[0], data, 'dataDetail22222222555555');
            dispatch(getDetailProduct({ ...data[0], qty: 1 }));

            setSelectDetail({ ...data[0] })
            setImageShow(data[0].image)
        }

    };

    useEffect(() => {
        handleGetData()

        window.scrollTo({
            top: 43, // Vị trí đầu trang
            behavior: "smooth"
        });
    }, [])
    console.log(selectDetail, 'selectDeuuuuuuu')

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    console.log('renderrrrrr:', active)
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
                                        <li><NavLink to={'/'}></NavLink></li>
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
                                <div className="tab-content produc_thumb_conatainer" style={{ minHeight: '250px' }}>
                                    <div className="tab-pane fade show active" id="p_tab1" role="tabpanel" >
                                        <div className="modal_img">
                                            <a><img src={imageShow} alt="" /></a>
                                        </div>
                                    </div>
                                </div>

                                <Slider {...settings}>
                                    {newImagesArr.map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a
                                                    onClick={() => { setActive(item.id); setImageShow(item.img) }}
                                                    style={active == item.id ?
                                                        { display: 'inline-block', cursor: "pointer", border: '1px solid rgb(128,134,139)' }
                                                        :
                                                        { display: 'inline-block', cursor: "pointer" }}
                                                >
                                                    <img src={item.img} alt="" style={{ height: '118px' }} />
                                                </a>
                                            </li>
                                        )
                                    })}
                                </Slider>

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
