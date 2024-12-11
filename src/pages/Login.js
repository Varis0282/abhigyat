import React from 'react'

const Login = () => {

  const handleLoginHandler = (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    console.log(email, password);
  };

  return (
    <div className='flex justify-center items-center h-screen p-4'>
      <div className='p-8 flex flex-col gap-y-10'>
        <h2 className='text-center font-semibold text-3xl'>Login</h2>
        <form onSubmit={handleLoginHandler}>
          <div className='flex flex-col gap-y-6'>
            <div className="relative w-96">
              <input
                type="email"
                id="floating_email"
                className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-200 border border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 left-2.5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Enter your email
              </label>
            </div>
            <div className="relative w-96">
              <input
                type="password"
                id="floating_email"
                className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-200 border border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 left-2.5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Enter your password
              </label>
            </div>
            <button
              type="submit"
              className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600'
            >
              Login
            </button>
          </div>
        </form>
      </div >
    </div >
  )
}

export default Login
