import { Link, useLoaderData } from 'react-router-dom'
import { customFetch, formatPrice ,generateAmountOptions} from '../utils'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addItem } from '../features/cart/cartSlice';


export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`)
  return { product: response.data.data }
}

const SingleProducts = () => {
  const { product } = useLoaderData()
  const { image, title, price, description, colors, company } =
    product.attributes
  const dollarsAmount = formatPrice(price)
  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)
  const handleAmount=(e)=>{
    setAmount(parseInt(e.target.value))
  }
const dispatch=useDispatch();
const cartProduct={
  cartID:product.id+productColor,
  productID:product.id,
  image,
  title,
  price,
  amount,productColor,
  company
}
const addToCart=()=>{
  dispatch(addItem({product:cartProduct}))
}

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* products */}
      <div className="grid mt-6 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* colors */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              Colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && 'border-2 border-secondary'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                )
              })}
            </div>
          </div>
          {/* Amount */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select className="select select-secondary select-bordered select-md" value={amount} onChange={handleAmount}>
             {generateAmountOptions(20)}
            </select>
          </div>
          {/* cart button */}
          <div className="mt-10">
            <button
              className="btn btn-secondary btn-md"
              onClick={addToCart}
            >
              Add to Tag
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProducts
