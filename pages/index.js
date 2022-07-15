import Head from 'next/head'
import React, {useEffect} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '@/components/modules/Footer'
import Form from '@/components/modules/Account/Form'
import Payment from '@/components/modules/Payment'
import Register from '@/components/modules/Account/Register'
import RegisterConfirmation from '@/components/templates/Account/RegisterConfirmation'
import ForgotPassword from '@/components/templates/Account/ForgotPassword'
import RecoveryMethod from '@/components/templates/Account/RecoveryMethod'
import Home from '@/components/templates/Home'
import TopBar from '@/components/modules/TopBar'
import ProductDetails from '@/components/templates/ProductDetails'
import Products from '@/components/templates/Products'
import HomeLayout from '@/components/layouts/HomeLayout';
import { useDispatch } from 'react-redux'
import { loginRefresh } from '@/store/actions/auth'
export default function HomePage() {

  // const token = localStorage.getItem('token')
  const token = 'token'
  const dispatch = useDispatch()

  


  // useEffect(()=>{
  //   dispatch(loginRefresh(token))
  // },[])

  return (
    <HomeLayout>
     <Home />
    </HomeLayout>
    // <Footer />
    // <Form />
    // <ForgotPassword />
    // <RegisterConfirmation />
    // <RecoveryMethod />
    // <Register />
    // <Payment />
    // <TopBar />
    // <ProductDetails />
    // <Products/>
    // <Home/>
  )
}
