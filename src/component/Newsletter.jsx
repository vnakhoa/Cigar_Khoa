
import React from 'react'
import Contact from './Contact'

function Newsletter() {

    const infoArray = [
        {
            id: 1,
            icon: "pe-7s-call",
            contact: "(999) 123456789",
            detail: 'Free support line!',
        },
        {
            id: 2,
            icon: "pe-7s-mail",
            contact: "abc@mail.com",
            detail: 'Orders Support!',
        },
        {
            id: 3,
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
                                <Contact icon={item.icon} contact={item.contact} detail={item.detail} key={item.id} />
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