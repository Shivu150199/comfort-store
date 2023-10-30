import { useSelector } from 'react-redux'
import { CartItemList, CartTotals, SectionTitle } from '../components'
import { Link } from 'react-router-dom'


const Cart = () => {
  const { user } = useSelector((state) => state.userState)
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)
  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />
  }
  return (
    <>
      <SectionTitle text="shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg-col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary mt-8">
              proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary  mt-8">
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
