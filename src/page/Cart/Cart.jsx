import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import React from 'react';

import img118x118 from '../../assets/img/cart/cart6.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteItemProduct, descreaseProduct, increaseProduct } from '../../redux/slice/cart_Products';
import { getDetailProduct } from '../../redux/slice/detail_Product';

function Cart() {
    const dispatch = useDispatch();
    const select = useSelector(state => state.cart_Products);
    console.log(select, 'select')
    
    let totalCost = 0;
    let totalRate = 0;
    select.forEach((item) => {
        totalCost+= item.price * item.qty;
        totalRate += (item.price*item.qty*item.rate)/100;
    })


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
                                            {select?.map((item) => {
                                                return (
                                                    <tr key={item._id}>
                                                        <td className="product_remove"><a><i className="fa fa-trash-o" onClick={() => dispatch(deleteItemProduct(item))}></i></a></td>
                                                        <td className="product_thumb"><NavLink to={'/detail'} onClick={() => dispatch(getDetailProduct(item))}><img src={img118x118} alt="" /></NavLink></td>
                                                        <td className="product_name"><a>{item.name}</a></td>
                                                        <td className="product-price">£{item.price}</td>
                                                        <td className="product_quantity">
                                                            <RemoveCircleRoundedIcon onClick={() => dispatch(descreaseProduct(item))} style={{ cursor: 'pointer' }} />
                                                            <span style={{ fontSize: '20px', background: '#E8EAF6', padding: '4px 7px 7px 7px' }}>{item.qty}</span>
                                                            <AddCircleRoundedIcon onClick={() => dispatch(increaseProduct(item))} style={{ cursor: 'pointer' }} />
                                                        </td>
                                                        <td className="product_total">£{item.price * item.qty}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart_submit">
                                    <button type="submit" onClick={(e) => e.preventDefault()}>update cart</button>
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
                                            <p className="cart_amount">£{totalCost}</p>
                                        </div>
                                        <div className="cart_subtotal ">
                                            <p>Shipping</p>
                                            <p className="cart_amount"><span>Flat Rate:</span> £{totalRate}</p>
                                        </div>
                                        <a>Calculate shipping</a>

                                        <div className="cart_subtotal">
                                            <p>Total</p>
                                            <p className="cart_amount">£{totalCost + totalRate}</p>
                                        </div>
                                        <div className="checkout_btn">
                                            <a>Proceed to Checkout</a>
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