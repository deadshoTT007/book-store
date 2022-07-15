import ProductDetails from '@/components/templates/ProductDetails'
import HomeLayout from '@/components/layouts/HomeLayout';
import { useRouter } from 'next/router';

export default function RegisterConfirmationPage() {

  const router = useRouter()
  console.log(router,"router")
  return (
   
      <ProductDetails id={router.query.pid}/>
   
  )
}
