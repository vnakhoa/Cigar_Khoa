
import React from 'react'
import PropTypes from 'prop-types'
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import { Widgets } from '@mui/icons-material';

function DealOfWeekCard({ _id, price, name, image, description }) {

    // React countdown time
    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <>
                <div data-countdown="2021/12/15">
                    <div className="countdown_area">
                        <div className="single_countdown">
                            <div className="countdown_number">{days}</div>
                            <div className="countdown_title">days</div>
                        </div>
                        <div className="single_countdown">
                            <div className="countdown_number">{hours}</div>
                            <div className="countdown_title">hrs</div>
                        </div><div className="single_countdown">
                            <div className="countdown_number">{minutes}</div>
                            <div className="countdown_title">mins</div>
                        </div><div className="single_countdown">
                            <div className="countdown_number">{seconds}</div>
                            <div className="countdown_title">secs</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }


    return (
        <div className="active" key={_id}>
            <div className="col-12">
                <div className="countdown_produtc_wrapper">
                    <div className="single_countdown_product">
                        <div className="countdown_product_thumb">
                            <Link to={`/detail/${_id}`}><img src={image} alt="" /></Link>
                            <div className="sale_percent">
                                <span>15%</span>
                            </div>
                        </div>
                        <div className="countdown_product_content">
                            <div className="countdown_product_ratting">
                                <ul>
                                    <li><a ><i className="ion-star"></i></a></li>
                                    <li><a ><i className="ion-star"></i></a></li>
                                    <li><a ><i className="ion-ios-star-outline"></i></a></li>
                                    <li><a ><i className="ion-ios-star-outline"></i></a></li>
                                    <li><a><i className="ion-ios-star-outline"></i></a></li>
                                </ul>
                            </div>
                            <h3>{name}</h3>
                            <div className="countdown_product_price">
                                <span className="old_price">${Math.ceil(price / 0.85)}</span>
                                <span className="current_price">${price} </span>
                            </div>
                            <div className="countdown_product_desc">
                                <p>{description}</p>
                            </div>
                            <div className="product_timing">
                                <h3>Hurry up!</h3>
                                <p>Offer ends in:</p>

                                <Countdown date={Date.now() + 1000000000} renderer={renderer} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

DealOfWeekCard.propTypes = {}

export default DealOfWeekCard
