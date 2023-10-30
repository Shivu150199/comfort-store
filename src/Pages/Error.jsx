import { useRouteError,Link} from 'react-router-dom'

const Error = () => {
const error=useRouteError()
console.log(error)

if(error.status===404){
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <div className="text-center">
        <p className="text-7xl font-semibold text-primary sm:text-9xl">404</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mt-4 ">
          Page not found
        </h1>
        <p className='text-lg mt-6 leading-7'> Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-6">
          <Link to='/' className='btn btn-secondary hover:btn-primary'>Back Home</Link>
        </div>
      </div>
    </main>
  )
}


  return (
    <main className='grid min-h-[100vh] place-items-center px-8'>
      <h4 className='text-center font-bold text-4xl'>....there was an error</h4>
    </main>
  )
}

export default Error
