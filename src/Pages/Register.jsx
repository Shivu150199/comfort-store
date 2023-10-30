import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'
import { customFetch } from '../utils';
import { toast } from 'react-toastify'

export const action =async({request})=>{
  const formData=await request.formData();
  const data=Object.fromEntries(formData);
  try{
    const response=await customFetch.post('/auth/local/register',data)
      toast.success('account created successfully')
return redirect('/login');
  }catch(error){
    const errorMessage=error?.response?.data?.error?.message||'please double check your credential'
     toast.error(errorMessage)
    return null;
  }
}





const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 shadow-lg p-8 bg-base-100 flex flex-col gap-y-4   "
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <button className="btn btn-secondary btn-block">Guest user</button>
        <p className="text-center">
          already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Register
