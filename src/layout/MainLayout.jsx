import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../page/Footer/Footer'
import Header from '../page/Header/Header'
import { getProduct } from '../service/api/product'
import { getDataProducts } from '../redux/slice/data_Products'
import DetailPopUp from '../page/Detail/DetailPopUp'

function MainLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleGetData = async () => {
    const { data } = await getProduct();
    console.log(data, 'data');

    dispatch(getDataProducts(data));
  };

  useEffect(() => {
    navigate('/home');
    handleGetData();
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