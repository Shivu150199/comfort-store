
import { formatPrice } from '../utils'
import { useSelector } from 'react-redux'

const CartTotals = () => {
  const {cartTotal,shipping,tax,orderTotal}=useSelector((state)=>state.cartState);
  return (
  <div className="card ">
    <div className="card-body w-max">
      {/* subtotal */}
      <p className="flex justify-between text-xs border-b border-base-300 pb-2">
        <span>subTotal</span>
        <span className="font-medium">{formatPrice(cartTotal)}</span>
      </p>
      {/* shipping */}
      <p className="flex justify-between text-xs border-b border-base-300 pb-2">
        <span>Shipping</span>
        <span className="font-medium">{formatPrice(shipping)}</span>
      </p>
      {/* tax*/}
      <p className="flex justify-between text-xs border-b border-base-300 pb-2">
        <span>Tax</span>
        <span className="font-medium">{formatPrice(tax)}</span>
      </p>
      {/* total*/}
      <p className="mt-4 flex justify-between text-sm pb-2">
        <span className='font-bold'>Order Total</span>
        <span className="font-bold">{formatPrice(orderTotal)}</span>
      </p>
    </div>
  </div>
  )
}

export default CartTotals
