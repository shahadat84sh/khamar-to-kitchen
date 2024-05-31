import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { toast } from 'react-toastify';

const SignUp = () => {
  const {createUser, logOut} = useContext(AuthContext)
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic();
  const signUp = (e) =>{
    e.preventDefault()
    const form = e.target; 
    const email = form.email.value;
    const name = form.name.value
    const pass = form.password.value;
    createUser(email,pass)
    .then(result =>{
      const user = result.user;
      const info = {email:user.email, name:name}
      // const token = localStorage.getItem('access-token')
      axiosPublic.post('/users', info ,{
        headers:{
          'Content-Type': 'application/json',
        }
      })
      
      toast.success('User created successfully!');
      const res = axiosPublic.post('/jwt',info )
      localStorage.setItem('access-token', res.data)
      logOut()

      navigate('/login')
    })
    .catch(err => console.log(err))
    form.reset()
  }
  const signInWithGoogle = () => {
    // Implement Google sign-in functionality here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#D0EEC0] via-[#EAF0E6] to-[#D0EEC0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create a New Account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={signUp}>
          <div className="rounded-md shadow-sm space-y-2">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input name="name" type="text" required className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input name="email" type="email" autoComplete="current-email" required className="  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm" placeholder="Email" />
            </div>
            <div className='mt-2'>
              <label htmlFor="password" className="sr-only">Password</label>
              <input  name="password" type="password" autoComplete="current-password" required className=" relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-lime-500 group-hover:text-lime-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M0 0h20v20H0V0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 4a6 6 0 11-1.74 4.26L4.23 9.28a.75.75 0 010-1.06l3.03-3.02A6 6 0 019 4zm4 7a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1h6z" clipRule="evenodd" />
                </svg>
              </span>
              Sign Up
            </button>
          </div>
        </form>

        <div className="text-center">
          <button onClick={signInWithGoogle} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <FaGoogle className="h-5 w-5 text-red-500 group-hover:text-red-400" />
            </span>
            Sign in with Google
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
           Alradey have an account?{' '}
            <Link to='/login' className="font-medium text-lime-600 hover:text-lime-500">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
