import React, { useState } from 'react'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

import img118x118 from '../../assets/img/cart/cart6.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../redux/slice/cart_Products';

function Cart() {
    const [currentQuantity, setCurrentQuantity] = useState(1);
    const select = useSelector(state => state.cart_Products);
    console.log(select, 'select')

    const dispatch = useDispatch();

    return (
        <div className="shopping_cart_area">
            <div className="container">
                <form action="#">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_desc">
                                <div className="cart_page table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product_remove">Delete</th>
                                                <th className="product_thumb">Image</th>
                                                <th className="product_name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product_quantity">Quantity</th>
                                                <th className="product_total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {select.map((item, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td className="product_remove"><a href="#"><i className="fa fa-trash-o" onClick={() => dispatch(deleteProduct(item))}></i></a></td>
                                                        <td className="product_thumb"><a href="#"><img src={img118x118} alt="" /></a></td>
                                                        <td className="product_name"><a href="#">{item.khoa}</a></td>
                                                        <td className="product-price">£65.00</td>
                                                        <td className="product_quantity"><RemoveCircleRoundedIcon style={{ cursor: 'pointer' }} /><span style={{ fontSize: '20px', background: '#E8EAF6', padding: '4px 7px 7px 7px' }}>{currentQuantity}</span><AddCircleRoundedIcon style={{ cursor: 'pointer' }} /></td>
                                                        <td className="product_total">£130.00</td>
                                                    </tr>
                                                )
                                            })} 
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart_submit">
                                    <button type="submit">update cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="coupon_area">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="coupon_code left">
                                    <h3>Coupon</h3>
                                    <div className="coupon_inner">
                                        <p>Enter your coupon code if you have one.</p>
                                        <input placeholder="Coupon code" type="text" />
                                        <button type="submit">Apply coupon</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="coupon_code right">
                                    <h3>Cart Totals</h3>
                                    <div className="coupon_inner">
                                        <div className="cart_subtotal">
                                            <p>Subtotal</p>
                                            <p className="cart_amount">£215.00</p>
                                        </div>
                                        <div className="cart_subtotal ">
                                            <p>Shipping</p>
                                            <p className="cart_amount"><span>Flat Rate:</span> £255.00</p>
                                        </div>
                                        <a href="#">Calculate shipping</a>

                                        <div className="cart_subtotal">
                                            <p>Total</p>
                                            <p className="cart_amount">£215.00</p>
                                        </div>
                                        <div className="checkout_btn">
                                            <a href="#">Proceed to Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cart