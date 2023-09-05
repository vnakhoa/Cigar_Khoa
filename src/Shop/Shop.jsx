

import React from 'react';
import Header from '../component/Header';
import Newsletter from '../component/Newsletter';
import Footer from '../component/Footer';
import Breadcrumbs from './component_Shop/Breadcrumbs';
import ShopWrapper from './ShopWrapper/ShopWrapper';

function Shop() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <ShopWrapper />

      <Newsletter />
      <Footer />
    </>
  )
}

export default Shop;