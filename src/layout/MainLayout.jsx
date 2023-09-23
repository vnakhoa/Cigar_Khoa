import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Footer from '../page/Footer/Footer'
import Header from '../page/Header/Header'
import { getDataProducts } from '../redux/slice/data_Products'
import { getProduct } from '../service/api/product'

function MainLayout() {
  const dispatch = useDispatch();
  
  const handleGetData = async () => {
    const { data } = await getProduct();
    console.log(data, 'data');

    dispatch(getDataProducts(data));
  };

  useEffect(() => {
    handleGetData();
    console.log('render')
  }, [])

  return (
    <>
      <Header/>

      <Outlet />

      <Footer />
    </>
  )
}

export default MainLayout;