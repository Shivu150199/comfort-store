import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'
import { customFetch } from '../utils';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice';
import { toast } from 'react-toastify';
 
export const action =
  (store) =>
  async ({ request }) => {
const formData=await request.formData();
const data=Object.fromEntries(formData);
try{
  const response=await customFetch.post('/auth/local',data);
  store.dispatch(loginUser(response.data));
  toast.success('logged in successfully');
      return redirect('/');
}catch(error){
  console.log(error);
  const errorMessage=error?.response?.data?.error?.message||'please double check your credential';
  // toast.error(errorMessage);
  console.log(errorMessage)
  return null;
}

  }

const Login = () => {

const dispatch=useDispatch()
const navigate=useNavigate();
const loginAsGuestUser=async()=>{
  try{
const response=await customFetch.post('/auth/local',{
  identifier:'test@test.com',
  password:'secret',
})
dispatch(loginUser(response.data))
navigate('/');

  }catch(error){
    console.log(error)
  }
}

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 "
      >
        <h4 className="text-3xl font-bold text-center">Login</h4>
        <FormInput
          type="email"
          name="identifier"
          label="Email"
          defaultValue="testuser@test.com"
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button className="btn btn-secondary btn-block" onClick={loginAsGuestUser}>Guest user</button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Login
