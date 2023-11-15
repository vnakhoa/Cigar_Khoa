
import React from 'react'
import PropTypes from 'prop-types'

function TopcategoryCard({ image, name }) {
    return (
        <div className="p-1 single_categorie_banner">
            <div className="categorie_banner_thumb">
                <img src={image} alt="" />
                <div className="categorie_banner_content m-0">
                    <h3>{name}</h3>
                    <ul>
                        <li><a>PC Gamepads</a></li>
                        <li><a>Controllers</a></li>
                        <li><a>Video Game</a></li>
                        <li><a>Xbox Consoles</a></li>
                        <li><a>See More</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

TopcategoryCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string
}

export default TopcategoryCard
