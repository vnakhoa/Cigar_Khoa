

import React from 'react';
import imgVisha from "../../assets/img/visha/payment.png";
import logoCigar from "../../assets/img/logo/logo.png";
import img320x320 from "../../assets/img/instagram/instagram1.jpg";

const image1 = [
    {
        id: 1,
        image: 'https://htmldemo.hasthemes.com/cigar/cigar/assets/img/instagram/instagram1.jpg'
    },
    {
        id: 2,
        image: 'https://htmldemo.hasthemes.com/cigar/cigar/assets/img/instagram/instagram2.jpg'
    },
    {
        id: 3,
        image: 'https://htmldemo.hasthemes.com/cigar/cigar/assets/img/instagram/instagram3.jpg'
    },
    {
        id: 4,
        image: 'https://htmldemo.hasthemes.com/cigar/cigar/assets/img/instagram/instagram4.jpg'
    },
]

const image2 = [
    {
        id: 1,
        image: 'https://htmldemo.hasthemes.com/cigar/cigar/assets/img/instagram/instagram5.jpg'
    },
    {
        id: 2,
        image: 'https://htmldemo.hasthemes.com/cigar/cigar/assets/img/instagram/instagram6.jpg'
    },
    {
        id: 3,
        image: 'https://htmldemo.hasthemes.com/cigar/cigar/assets/img/instagram/instagram7.jpg'
    },
    {
        id: 4,
        image: 'https://htmldemo.hasthemes.com/cigar/cigar/assets/img/instagram/instagram8.jpg'
    },
]

function Footer() {
    return (
        <div className="footer_area">
            <div className="container">
                <div className="footer_top">
                    <div className="row">
                        <div className="col-lg-4 col-md-8">
                            <div className="single_footer">
                                <div className="footer_logo">
                                    <a><img src={logoCigar} alt="" /></a>
                                </div>
                                <div className="footer_desc">
                                    <p>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</p>
                                </div>
                                <div className="footer_contact">
                                    <ul>
                                        <li><i className="ion-location"></i> Ullenhall, Henley-in-Arden B578 5CC, England</li>
                                        <li><i className="ion-ios-telephone"></i> +123.456.789 - +123.456.678</li>
                                        <li><i className="ion-ios-email"></i> <a>support@plazathemes.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="single_footer">
                                <h3>CUSTOMER SERVICE</h3>
                                <ul>
                                    <li><a>Contact Us</a></li>
                                    <li><a>Returns</a></li>
                                    <li><a>Order History</a></li>
                                    <li><a>Site Map</a></li>
                                    <li><a>My Account</a></li>
                                    <li><a>Unsubscribe</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="single_footer">
                                <h3>Information</h3>
                                <ul>
                                    <li><a>About Us</a></li>
                                    <li><a>Delivery Information</a></li>
                                    <li><a>Privacy Policy</a></li>
                                    <li><a>Terms & Conditions</a></li>
                                    <li><a>Warranty</a></li>
                                    <li><a>FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="single_footer">
                                <h3>instagram</h3>
                                <div className="instagram_active">
                                    <div className="instagram_items">
                                        <div className="instagram_list">
                                            {
                                                image1.map((item) => {
                                                    return (
                                                        <div className="single_instagram" key={item.id}>
                                                            <a><img src={item.image} alt="" /></a>
                                                            <div className="instagram_icone">
                                                                <a className="instagram_popup" ><i className="ion-social-instagram"></i></a>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="instagram_list">
                                        {
                                                image2.map((item) => {
                                                    return (
                                                        <div className="single_instagram" key={item.id}>
                                                            <a><img src={item.image} alt="" /></a>
                                                            <div className="instagram_icone">
                                                                <a className="instagram_popup" ><i className="ion-social-instagram"></i></a>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="row">
                        <div className="col-12">
                            <div className="tag_block">
                                <ul>
                                    <li><a>Online Shopping</a></li>
                                    <li><a>Promotions</a></li>
                                    <li><a>My Orders</a></li>
                                    <li><a>Help</a></li>
                                    <li><a>Customer Service</a></li>
                                    <li><a>Discount</a></li>
                                    <li><a>Support</a></li>
                                    <li><a>Most Populars</a></li>
                                    <li><a>New Arrivals</a></li>
                                    <li><a>Special Products</a></li>
                                    <li><a>Manufacturers</a></li>
                                    <li><a>Our Stores</a></li>
                                    <li><a>Shipping</a></li>
                                    <li><a>Payments</a></li>
                                    <li><a>Warantee</a></li>
                                    <li><a>Refunds</a></li>
                                    <li><a>Checkout</a></li>
                                    <li><a>Terms & Conditions</a></li>
                                    <li><a>Policy</a></li>
                                    <li><a>Shipping</a></li>
                                    <li><a>Payments</a></li>
                                    <li><a>Returns</a></li>
                                    <li><a>Refunds</a></li>
                                </ul>
                            </div>
                            <div className="footer_social">
                                <ul>
                                    <li><a><i className="ion-social-facebook"></i></a></li>
                                    <li><a><i className="ion-social-googleplus-outline"></i></a></li>
                                    <li><a><i className="ion-social-twitter"></i></a></li>
                                    <li><a><i className="ion-social-pinterest"></i></a></li>
                                    <li><a><i className="ion-social-rss"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright_area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="copyright_content">
                                <p>Copyright &copy; 2023, <a>Cigar</a>. All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="footer-payment text-end">
                                <a><img src={imgVisha} alt="" /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer