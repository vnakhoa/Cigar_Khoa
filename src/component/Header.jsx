
import React, { useEffect, useState } from 'react';

import logoCigar from "../assets/img/logo/logo.png"
import { NavLink } from 'react-router-dom';


function Header() {
    const [cartMain, setCartMain] = useState(false);
    const [cartCategori, setCartCategori] = useState(false);
    const [active, setActive] = useState('HOME');

    useEffect(() => {
        console.log(window.location.pathname, 'pảh')
        if(window.location.pathname != '/')
            setActive(window.location.pathname.slice(1).toUpperCase());
    }, []);

    function handleActive(e) {
        let act = e.target.innerText;
        console.log(act, 'act');

        setActive(String(act));
    }

    function CartItem() {
        return (
            <div className="mini_cart d-block">
                <div className="items_nunber">
                    <span>2 Items in Cart</span>
                </div>
                <div className="cart_button checkout">
                    <a href="checkout.html">Proceed to Checkout</a>
                </div>
                <div className="cart_item">
                    <div className="cart_img">
                        <a href="#"><img src="assets/img/cart/cart1.jpg" alt="" /></a>
                    </div>
                    <div className="cart_info">
                        <a href="#">Mr.Coffee 12-Cup</a>
                        <form action="#">
                            <input min="0" max="100" type="number" />
                            <span>$60.00</span>
                        </form>
                    </div>
                </div>
                <div className="cart_item">
                    <div className="cart_img">
                        <a href="#"><img src="assets/img/cart/cart2.jpg" alt="" /></a>
                    </div>
                    <div className="cart_info">
                        <a href="#">Lid Cover Cookware</a>
                        <form action="#">
                            <input min="0" max="100" type="number" />
                            <span>$160.00</span>
                        </form>
                    </div>
                </div>
                <div className="cart_button view_cart">
                    <a href="#">View and Edit Cart</a>
                </div>
            </div>
        )
    }

    function CartCategori() {

        return (
            <div className="categories_menu_inner d-block">
                <ul>
                    <li className="categorie_list"><a href="#">Laptop & Computer <i className="fa fa-angle-right"></i></a>
                        <ul className="categories_mega_menu">
                            <li><a href="#">Headphoness</a></li>
                            <li><a href="#">Laptop & Computers</a></li>
                            <li><a href="#">Camera & Photos</a></li>
                            <li><img src="assets/img/categorie/categorie.png" alt="" /></li>
                        </ul>
                    </li>
                    <li><a href="#"> Fashion  <i className="fa fa-angle-right"></i></a>
                        <ul className="categories_mega_menu">
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">Handbags</a></li>
                            <li><a href="#">shoes</a></li>
                            <li><a href="#">Clothing</a></li>
                        </ul>
                    </li>
                    <li><a href="#"> Furnitured & Decor <i className="fa fa-angle-right"></i></a>
                        <ul className="categories_mega_menu column_3">
                            <li><a href="#">Chair</a></li>
                            <li><a href="#">Lighting</a></li>
                            <li><a href="#">Sofa</a></li>
                        </ul>
                    </li>
                    <li><a href="#"> Toys & Hobbies <i className="fa fa-angle-right"></i></a>
                        <ul className="categories_mega_menu column_2">
                            <li><a href="#">Boys' Toys</a></li>
                            <li><a href="#">Girls' Toys</a> </li>
                        </ul>
                    </li>
                    <li><a href="#"> Accessories</a></li>
                    <li><a href="#"> Jewelry & Watches</a></li>
                    <li><a href="#"> Health & Beauty</a></li>
                    <li><a href="#">Books & Office</a></li>
                    <li><a href="#"> Sport & Outdoor</a></li>
                    <li id="cat_toggle" className="has-sub"><a href="#"> More Categories</a>
                        <ul className="categorie_sub">
                            <li><a href="#"> Computer - Laptop</a></li>
                        </ul>

                    </li>
                </ul>
            </div>
        )
    }


    return (
        <header className="header_area">
            <div className="header_middel">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4">
                            <div className="logo">
                                <a href="index.html"><img src={logoCigar} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-5">
                            <div className="search_bar">
                                <form action="#">
                                    <input placeholder="Search entire store here..." type="text" />
                                    <button type="submit"><i className="ion-ios-search-strong"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="cart_area">
                                <div className="wishlist_link">
                                    <a href="#"><i className="ion-ios-heart-outline"></i></a>
                                </div>
                                <div className="cart_link">
                                    <a href="javascript:void(0)" onClick={() => setCartMain(pre => !pre)}><i className="ion-ios-cart-outline"></i>My Cart</a>
                                    <span className="cart_count">2</span>

                                    {cartMain ? <CartItem /> : <></>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header_bottom sticky-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <div className="categories_menu">
                                <div className="categories_title" onClick={() => setCartCategori(pre => !pre)}>
                                    <h2 className="categori_toggle"> All categories</h2>
                                </div>
                               {cartCategori ? <CartCategori /> : <></>}

                            </div>
                        </div>

                      
                        <div className="col-lg-7 position-relative">
                            <div className="main_menu_inner">
                                <div className="main_menu  d-lg-block">
                                    <ul>
                                        <li onClick={handleActive} className={active == "HOME" ? "active" : ''} ><NavLink to={'/'}>Home</NavLink></li>
                                        <li onClick={handleActive} className={active == "SHOP" ? "active" : ''} ><NavLink to={'/shop'}>Shop</NavLink></li>
                                        <li onClick={handleActive} className={active == "BLOG" ? "active" : ''} ><NavLink>Blog</NavLink></li>
                                        <li onClick={handleActive} className={active == "PAGE" ? "active" : ''} ><NavLink>Page</NavLink></li>
                                        <li onClick={handleActive} className={active == "CONTACT US" ? "active" : ''} ><NavLink>Contact Us</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="contact_phone">
                                <div className="contact_icone">
                                    <span className="pe-7s-headphones"></span>
                                </div>
                                <div className="contact_number">
                                    <p>Call Us:</p>
                                    <span>(999) 1234 56789</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
