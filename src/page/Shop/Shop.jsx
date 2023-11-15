

import React from 'react';
import BreadcrumbsBackHome from '../../component/Breadcrumbs/Breadcrumbs';
import Newsletter from '../../component/Newsletter';
import ShopWrapper from './ShopWrapper/ShopWrapper';

function Shop() {
  return (
    <>
      <BreadcrumbsBackHome name={'shop'} />
      <ShopWrapper />
      <Newsletter />
    </>
  )
}

export default Shop;