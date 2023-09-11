

import React from 'react'
import ShopNavigate from './ShopControl/ShopNavigate'
import ShopProduct from './ShopControl/ShopProduct'

function ShopWrapper() {
    return (
        <div className="shop_wrapper shop_fullwidth">
            <div className="container">
                <ShopNavigate />
                <ShopProduct />
            </div>
        </div>
    )
}

export default ShopWrapper