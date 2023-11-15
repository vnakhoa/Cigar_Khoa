
import React from 'react';
import { NavLink } from 'react-router-dom';

function BreadcrumbsBackHome({ name }) {

    return (
        <div className="breadcrumbs_area">
            <div className="container">
                <div className="breadcrumbs_inner">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <h3>{name}</h3>
                                <ul>
                                    <li><NavLink to={'/'}>Home</NavLink></li>
                                    <li><i className="fa fa-angle-right"></i></li>
                                    <li>{name}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



BreadcrumbsBackHome.propTypes = {}

export default BreadcrumbsBackHome
