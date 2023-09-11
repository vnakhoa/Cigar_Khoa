
import React, { useEffect, useState } from 'react';

import logoCigar from "../assets/img/logo/logo.png";
import img100x71 from "../assets/img/cart/cart1.jpg";

import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { back } from '../redux/slice/backHome';


function Header() {
    const [cartMain, setCartMain] = useState(false);
    const [cartCategori, setCartCategori] = useState(false);
    const [menu, setMenu] = useState(false)
    // const [active, setActive] = useState('HOME');

    const activeRedux = useSelector(state => state.backHome);
    const dispatch = useDispatch();

    console.log(activeRedux, 'activeRedux')

    // useEffect(() => {
    //     setActive(activeRedux)
    // }, [activeRedux])

    function MenuResponsive() {
        return (
            <nav className="mean-nav" onClick={() => setMenu(pre => !pre)}>
                <ul>
                    <li onClick={() => dispatch(back('HOME'))} className={activeRedux == "HOME" ? "active" : ''} ><NavLink to={'/home'}>Home</NavLink></li>
                    <li onClick={() => dispatch(back('SHOP'))} className={activeRedux == "SHOP" ? "active" : ''} ><NavLink to={'/shop'}>Shop</NavLink></li>
                    <li onClick={() => dispatch(back('BLOG'))} className={activeRedux == "BLOG" ? "active" : ''} ><NavLink>Blog</NavLink></li>
                    <li onClick={() => dispatch(back('PAGE'))} className={activeRedux == "PAGE" ? "active" : ''} ><NavLink>Page</NavLink></li>
                    <li onClick={() => dispatch(back('CONTACT US'))} className={activeRedux == "CONTACT US" ? "active" : ''} ><NavLink>Contact Us</NavLink></li>
                </ul>
            </nav>
        )
    }

    function CartItem() {
        return (
            <div className="mini_cart d-block">
                <div className="items_nunber">
                    <span>2 Items in Cart</span>
                </div>
                <div className="cart_button checkout">
                    <NavLink to={'/cart'} onClick={() => setCartMain(false)}> Proceed to Checkout</NavLink>
                </div>
                <div className="cart_item">
                    <div className="cart_img">
                        <a href="#"><img src={img100x71} alt="" /></a>
                    </div>
                    <div className="cart_info">
                        <a href="#">Mr.Coffee 12-Cup</a>
                        <form action="#">
                            <input min="0" max="100" type="number" />
                            <span>$60.00</span>
                        </form>
                    </div>
                </div>

                <div className="cart_button view_cart">
                    <NavLink to={'/cart'} onClick={() => setCartMain(false)}> View and Edit Cart</NavLink>
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

            <div className="header_bottom">
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
                                <div className="main_menu d-none d-lg-block">
                                    <ul>
                                        <li onClick={() => dispatch(back('HOME'))} className={activeRedux == "HOME" ? "active" : ''} ><NavLink to={'/home'}>Home</NavLink></li>
                                        <li onClick={() => dispatch(back('SHOP'))} className={activeRedux == "SHOP" ? "active" : ''} ><NavLink to={'/shop'}>Shop</NavLink></li>
                                        <li onClick={() => dispatch(back('BLOG'))} className={activeRedux == "BLOG" ? "active" : ''} ><NavLink>Blog</NavLink></li>
                                        <li onClick={() => dispatch(back('PAGE'))} className={activeRedux == "PAGE" ? "active" : ''} ><NavLink>Page</NavLink></li>
                                        <li onClick={() => dispatch(back('CONTACT US'))} className={activeRedux == "CONTACT US" ? "active" : ''} ><NavLink>Contact Us</NavLink></li>
                                    </ul>
                                </div>
                                <div className="mobile-menu d-lg-none mean-container">
                                    <div className="mean-bar">
                                        <a className="meanmenu-reveal" onClick={() => setMenu(pre => !pre)}><span></span><span></span><span></span></a>
                                        {menu ? <MenuResponsive /> : <></>}
                                    </div>
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
