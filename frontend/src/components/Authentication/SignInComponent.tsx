import React, { useState } from 'react';
import bgImage from '../../images/bg.png'; // путь к изображению
import { useNavigate } from 'react-router-dom';

function SignInComponent() {

  interface SignIn {
    firstName: string,
    lastName: string,
    email: string,
    password: string
  }

  const [signIn, setSignIn] = useState<SignIn>({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setSignIn((prev) => ({ ...prev, [name]: value }));
  }

  const navigate = useNavigate();


    
  return (
    <div
      className="h-[47rem] bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="h-auto w-[25rem] bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-center">Create an account</h2>

        {/* Social buttons */}
        <div className="flex space-x-4 w-full">
          <button className="flex-1 border rounded-lg py-2 flex items-center justify-center space-x-2 hover:bg-gray-50">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
            <span className="text-sm font-medium">Google</span>
          </button>
          <button className="flex-1 border rounded-lg py-2 flex items-center justify-center space-x-2 hover:bg-gray-50">
            <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" alt="Facebook" className="h-5 w-5" />
            <span className="text-sm font-medium">Facebook</span>
          </button>
        </div>

        <div className="text-gray-400 text-sm">Or</div>

        <input
          type="text"
          placeholder="Enter your first name"
          className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          name='firstName'
          value={signIn.firstName}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Enter your second name"
          className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          name='lastName'
          value={signIn.lastName}
          onChange={handleInputChange}
        />


        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          name='email'
          value={signIn.email}
          onChange={handleInputChange}
        />

        {/* Password Input + Eye Icon */}
        <div className="w-full relative">
          <input
            type={showPassword ? "text":"password"}
            placeholder="Enter your password"
            className="w-full border rounded-md px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            name='password'
            value={signIn.password}
            onChange={handleInputChange}
          />
          <span onClick={()=> setShowPassword(!showPassword)} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer text-sm">
          <img src="https://www.svgrepo.com/show/530378/eye-password-eye-password.svg" alt="Facebook" className="h-5 w-5" />
          </span>
        </div>

        <div className="w-full text-right text-sm text-purple-500 hover:underline cursor-pointer">
          Forgot?
        </div>

        {/* Create Account Button */}
        <button className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition-colors text-sm font-semibold">
          Create account
        </button>

        {/* Log In Prompt */}
        <div className="text-sm text-gray-500 text-center">
          Already Have An Account?{' '}
          <span className="text-purple-600 font-semibold cursor-pointer hover:underline">
            Log In
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignInComponent;