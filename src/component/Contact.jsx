
import React from 'react'
import PropTypes from 'prop-types'

function Contact({ contact, icon, detail }) {
    return (
        <div className="col-lg-4 col-md-4">
            <div className="single_shipping">
                <div className="shipping_icone">
                    <span className={icon}></span>
                </div>
                <div className="shipping_content">
                    <h3>{contact}</h3>
                    <p>{detail}</p>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {}

export default Contact
