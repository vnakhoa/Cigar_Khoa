

import React from 'react';
import Newsletter from '../../component/Newsletter';
import ShopWrapper from './ShopWrapper/ShopWrapper';
import Breadcrumbs from './component_Shop/Breadcrumbs';

function Shop() {
  return (
    <>
   
      <Breadcrumbs />
      <ShopWrapper />

      <Newsletter />
   
    </>
  )
}

export default Shop;