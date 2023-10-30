import { Link } from 'react-router-dom'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'
const carouselImages = [hero1, hero2, hero3, hero4]
const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>We are changing the way people shop.</h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          An online store is an e-commerce website or app where buyers can see a
          catalog of products or services and electronically purchase them. A
          typical representation of an online store is a brick-and-mortar retail
          business that also displays and sells
        </p>
        <div className="mt-10">
          <Link to="products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => {
          return <div key={index} className='carousel-item'>
<img src={image} className='rounded-box h-full w-80 object-cover' />
          </div>
        })}
      </div>
    </div>
  )
}

export default Hero
