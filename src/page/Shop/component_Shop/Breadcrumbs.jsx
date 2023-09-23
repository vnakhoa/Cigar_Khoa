

import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { back } from '../../../redux/slice/backHome';

function Breadcrumbs() {
    const dispatch = useDispatch();

    function handleBackHome(e) {
        console.log('kkk', dispatch);
        // e.preventDefault();

        dispatch(back(''));

    }

    return (
        <div className="breadcrumbs_area">
            <div className="container">
                <div className="breadcrumbs_inner">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <h3>shop</h3>
                                <ul>
                                    <li><NavLink to={'/'} onClick={handleBackHome}>Home</NavLink></li>
                                    <li><i className="fa fa-angle-right"></i></li>
                                    <li>shop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs