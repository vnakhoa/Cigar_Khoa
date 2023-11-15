
import React from 'react'
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slice/cart_Products";
import PropTypes from 'prop-types'

function CardProduct({ item, image, price, name, size }) {

    const dispatch = useDispatch()

    return (
        <div className="mb-2" key={item._id}>
            <div className="single_product h-100 d-flex flex-column justify-content-between">
                <div
                    className="product_thumb"
                    style={size == 'large'
                        ? { margin: '0 auto', textAlign: 'center', minHeight: '280px', minWidth: '280px' }
                        : size == 'small'
                            ? { margin: '0 auto', textAlign: 'center', minHeight: '165px', width: '155px' }
                            : { margin: '0 auto', textAlign: 'center', minHeight: '255px' }
                    }
                >
                    <NavLink to={`/detail/${item._id}`}><img src={image} alt="" /></NavLink>
                    <div className="btn_quickview">
                        <NavLink to={`/detail/${item._id}`}><i className="ion-ios-eye"></i></NavLink>
                    </div>
                </div>
                <div className="product_content">
                    <div className="product_ratting">
                        <ul>
                            <li><a><i className="ion-star"></i></a></li>
                            <li><a><i className="ion-star"></i></a></li>
                            <li><a><i className="ion-star"></i></a></li>
                            <li><a><i className="ion-star"></i></a></li>
                            <li><a><i className="ion-ios-star-outline"></i></a></li>
                        </ul>
                    </div>
                    <h3><a >{name}</a></h3>
                    <div className="product_price">
                        <span className="current_price">${price}</span>
                    </div>
                    <div className="product_action">
                        <ul>
                            <li className="product_cart"><NavLink to={'/cart'} onClick={() => dispatch(addProduct(item))}>Add to Cart</NavLink></li>
                            <li className="add_links"><a title="Add to Wishlist"><i className="ion-ios-heart-outline"></i></a></li>
                            <li className="add_links"><a title="Add to Compare"><i className="ion-loop"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

CardProduct.propTypes = {}

export default CardProduct
