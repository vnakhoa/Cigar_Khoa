
import React from 'react'

function Newsletter() {

    const infoArray = [
        {
            icon: "pe-7s-call",
            contact: "(999) 123456789",
            detail: 'Free support line!',
        },
        {
            icon: "pe-7s-mail",
            contact: "abc@mail.com",
            detail: 'Orders Support!',
        },
        {
            icon: "pe-7s-timer",
            contact: 'Mon - Fri / 8:00 - 18:00',
            detail: 'Working Days/Hours!',
        },
    ] 

    return (
        <div className="shipping_area shipping_contact ">
            <div className="container">
                <div className="shipping_contact">
                    <div className="row">
                        {infoArray.map(item => {
                            return (
                                <div className="col-lg-4 col-md-4" key={item.contact}>
                                    <div className="single_shipping">
                                        <div className="shipping_icone">
                                            <span className={item.icon}></span>
                                        </div>
                                        <div className="shipping_content">
                                            <h3>{item.contact}</h3>
                                            <p>{item.detail}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="newsletter_area">
                        <div className="row">
                            <div className="col-12">
                                <div className="field_newsletter">
                                    <div className="newsletter_text">
                                        <h3>Sign Up For Newsletter</h3>
                                        <p>Be the First to Know. Sign up to newsletter today</p>
                                    </div>
                                    <div className="subscribe_form">
                                        <form id="mc-form" className="mc-form footer-newsletter" >
                                            <input id="mc-email" type="email" autocomplete="off" placeholder="Please enter your email to subscribe" />
                                            <button id="mc-submit">Subscribe</button>
                                            <div className="email_icon">
                                                <i className="icon-mail"></i>
                                            </div>
                                        </form>
                                        <div className="mailchimp-alerts text-centre">
                                            <div className="mailchimp-submitting"></div>
                                            <div className="mailchimp-success"></div>
                                            <div className="mailchimp-error"></div>
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