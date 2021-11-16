import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './shared/Footer'
import Form from '../components/partials/Form'
import Payment from './shared/Payment'
import Register from '../components/partials/Register'
import RegisterConfirmation from '../components/partials/RegisterConfirmation'
import ForgotPassword from '../components/partials/ForgotAccount'
import RecoveryMethod from '../components/partials/RecoveryMethod'
import HomePage from './shared/HomePage'
import TopBar from './shared/TopBar'
import ProductDetails from './shared/ProductDetails'
import SunglassWomens from './shared/SunglassWomens'
export default function Home() {
  return (
    // <Footer />
    // <Form />
    // <ForgotPassword />
    // <RegisterConfirmation />
    // <RecoveryMethod />
    // <Register />
    // <Payment />
    // <TopBar />
    <ProductDetails />
    // <SunglassWomens />
  )
}
