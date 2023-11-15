
import React from 'react'
import PropTypes from 'prop-types'

function ShippingArea({ title, detail, icon }) {
    return (
        <div className="col-lg-4 col-md-4">
            <div className="single_shipping">
                <div className="shipping_icone">
                    <span className={icon}></span>
                </div>
                <div className="shipping_content">
                    <h3>{title}</h3>
                    <p>{detail}</p>
                </div>
            </div>
        </div>
    )
}

ShippingArea.propTypes = {
    title: PropTypes.string,
    detail: PropTypes.string,
    icon: PropTypes.string
}

export default ShippingArea
