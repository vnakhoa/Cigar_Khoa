
import React from 'react'

function Newsletter() {
    return (
        <div class="shipping_area shipping_contact ">
                <div class="container">
                    <div class="shipping_contact">   
                        <div class="row">
                            <div class="col-lg-4 col-md-4">
                                <div class="single_shipping">
                                    <div class="shipping_icone">
                                        <span class="pe-7s-call"></span>
                                    </div>
                                    <div class="shipping_content">
                                        <h3>(999) 1234 56789</h3>
                                        <p>Free support line!</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="single_shipping">
                                    <div class="shipping_icone">
                                        <span class="pe-7s-mail"></span>
                                    </div>
                                    <div class="shipping_content">
                                        <h3>Support@plazathemes.com</h3>
                                        <p>Orders Support!</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="single_shipping column_3">
                                    <div class="shipping_icone">
                                        <span class="pe-7s-timer"></span>
                                    </div>
                                    <div class="shipping_content">
                                        <h3>Mon - Fri / 8:00 - 18:00</h3>
                                        <p>Working Days/Hours!</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        
                        <div class="newsletter_area">
                            <div class="row">
                                <div class="col-12">
                                    <div class="field_newsletter">
                                        <div class="newsletter_text">
                                            <h3>Sign Up For Newsletter</h3>
                                            <p>Be the First to Know. Sign up to newsletter today</p>
                                        </div>
                                        <div class="subscribe_form">
                                            <form id="mc-form" class="mc-form footer-newsletter" >
                                                <input id="mc-email" type="email" autocomplete="off" placeholder="Please enter your email to subscribe" />
                                                <button id="mc-submit">Subscribe</button>
                                                <div class="email_icon">
                                                    <i class="icon-mail"></i>
                                                </div>
                                            </form>
                                            <div class="mailchimp-alerts text-centre">
                                                <div class="mailchimp-submitting"></div>
                                                <div class="mailchimp-success"></div>
                                                <div class="mailchimp-error"></div>
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

export default Newsletter;