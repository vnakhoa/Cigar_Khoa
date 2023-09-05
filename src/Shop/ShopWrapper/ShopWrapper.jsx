

import React from 'react'
import ShopNavigate from './ShopControl/ShopNavigate'
import ShopProduct from './ShopControl/ShopProduct'

function ShopWrapper() {
    return (
        <div class="shop_wrapper shop_fullwidth">
            <div class="container">
                <ShopNavigate />
                <ShopProduct />
            </div>
        </div>
    )
}

export default ShopWrapper