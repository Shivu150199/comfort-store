import { useSelector } from 'react-redux'
import { CheckoutForm, SectionTitle, CartTotals } from '../components'
import { redirect } from 'react-router-dom'

export const loader =(store)=>async()=>{
const user =store.getState().userState.user;
if(!user){
  return redirect('/login');
}
return null;
}


const Checkout = () => {
  const cartItems=useSelector((state)=>state.cartState.cartTotal)
  if(CartTotals.length===0){
    return <SectionTitle text='your cart is empty'/>
  }
  return (
    <>
    <SectionTitle text='your cart is empty'/>
    <div className="mt-8 grip gap-8 md:grid-cols-2 items-start">
      <CheckoutForm/>
      <CartTotals/>
    </div>
    </>
  )
}

export default Checkout
