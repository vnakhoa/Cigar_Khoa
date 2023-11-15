import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import paypal from "../../assets/img/visha/papyel.png"
import { billingDetail } from '../../constant/image_homepage'

function Checkout() {

    const selectCheckout = useSelector(state => state.cart_Products)
    console.log(selectCheckout)

    let totalCost = 0;
    let totalRate = 0;
    selectCheckout.forEach((item) => {
        totalCost += item.price * item.qty;
        totalRate += ((item.price * item.qty * item.rate) / 100);
    })

    return (
        <div class="Checkout_section mb-4">
            <div class="container">
                <div class="row">
                    <div class="breadcrumb_content">
                        <h3>checkout</h3>
                        <ul>
                            <li><NavLink to={'/cart'}>cart</NavLink></li>
                            <li><i class="fa fa-angle-right"></i></li>
                            <li><NavLink to={'/'}>home</NavLink></li>
                            <li><i class="fa fa-angle-right"></i></li>
                            <li>checkout</li>
                        </ul>
                    </div>
                </div>
                <div class="checkout_form">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <form>
                                <h3>Billing Details</h3>
                                <div class="row">
                                    {
                                        billingDetail.map((item) => {
                                            if (item.name != '') {
                                                return (
                                                    <div class="col-lg-6 mb-20" key={item.id}>
                                                        <label>{item.name}<span>*</span></label>
                                                        {
                                                            !item.children
                                                                ? <input type="text" />
                                                                : <select name="country" id="country">
                                                                    {
                                                                        item.children.map((item) => {
                                                                            return <option value={item.id + 1} key={item.id}>{item.name}</option>
                                                                        })
                                                                    }
                                                                </select>
                                                        }

                                                    </div>
                                                )
                                            }
                                            else {
                                                return (
                                                    <div class="col-lg-6 mb-20" key={item.id}>
                                                        <input placeholder="Apartment, suite, unit etc. (optional)" type="text" />
                                                    </div>
                                                )
                                            }
                                        })
                                    }

                                    <div class="col-12">
                                        <div class="order-notes">
                                            <label for="order_note">Order Notes</label>
                                            <textarea id="order_note" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <form>
                                <h3>Your order</h3>
                                <div class="order_table table-responsive mb-30">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                selectCheckout.length > 0
                                                    ? selectCheckout.map((item) => {
                                                        return (
                                                            <tr key={item._id}>
                                                                <td>{item.name}<strong> ×{item.qty}</strong></td>
                                                                <td>${item.price}</td>
                                                            </tr>
                                                        )
                                                    })
                                                    : <span>Don't have any products to checkout</span>
                                            }

                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Cart Subtotal</th>
                                                <td>${totalCost}</td>
                                            </tr>
                                            <tr>
                                                <th>Shipping</th>
                                                <td><strong>${totalRate}</strong></td>
                                            </tr>
                                            <tr class="order_total">
                                                <th>Order Total</th>
                                                <td><strong>${totalCost + totalRate}</strong></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div class="panel-default">
                                    <input type="radio" name="check_method" id='pay_receive' />
                                    <label for="pay_receive">Pay when receive products</label>
                                    <br />
                                    <input id="payment_defult" name="check_method" type="radio" />
                                    <label for="payment_defult">
                                        PayPal <img src={paypal} alt="" />
                                    </label>
                                </div>
                                <div class="order_button text-right">
                                    <button onClick={(e) => { e.preventDefault() }}>Proceed to PayPal</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout