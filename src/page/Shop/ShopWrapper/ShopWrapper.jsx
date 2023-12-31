

import React, { useState } from 'react'
import ShopNavigate from './ShopControl/ShopNavigate'
import ShopProduct from './ShopControl/ShopProduct'
import ShopSidebar from './ShopSidebar'

function ShopWrapper() {
    const [filter, setFilter] = useState({ color: null, size: null, price: null, category: null, changeFilter: false, name: null, _id: null })

    const [sortProduct, setSortProduct] = useState('')

    return (
        <div className="shop_wrapper shop_fullwidth">
            <div className="container">
                <div className='row'>
                    <div class="col-lg-9 col-md-12">
                        <ShopNavigate sortProduct={sortProduct} setSortProduct={setSortProduct} />
                        <ShopProduct filter={filter} setFilter={setFilter} sortProduct={sortProduct} />
                    </div>
                    <ShopSidebar filter={filter} setFilter={setFilter} />
                </div>
            </div>
        </div>
    )
}

export default ShopWrapper