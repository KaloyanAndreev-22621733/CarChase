import React, { FormEvent, useState } from 'react';
import bgImage from '../../images/bg.png'; // путь к изображению
import { useNavigate } from "react-router-dom";


function LogInComponent() {

  interface Login {
    email: string;
    password: string;
  }

  const[login, setLogin] = useState<Login>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  }

  const navigate = useNavigate(); // хук навигации

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const form = new FormData();
    form.append("email", login.email);
    form.append("password", login.password);

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        body: form,
        credentials: 'include' // Важно для отправки куки
      });

      if (response.ok) {
        const data = await response.json();

        // сохраняем userId в localStorage
        localStorage.setItem("userId", data.userId);

        alert(data.message);

        // редирект на нужную страницу (укажешь позже)
        navigate("/profile"); // например
      } else {
        alert("Incorrect email or password!");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Error while trying to connect with backend!");
    }
  }


  return (
    <div
      className="h-[47rem] bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="h-auto w-[25rem] bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-center">Log in!</h2>

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

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={login.email}
          name='email'
          onChange={handleInputChange}
        />

        {/* Password Input + Eye Icon */}
        <div className="w-full relative">
          <input
            type={showPassword ? "text":"password"}
            placeholder="Enter your password"
            className="w-full border rounded-md px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={login.password}
            name='password'
            onChange={handleInputChange}
          />
          <span onClick={()=> setShowPassword(!showPassword)} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer text-sm">
            <img src="https://www.svgrepo.com/show/530378/eye-password-eye-password.svg" alt="Show password" className="h-5 w-5" />
          </span>
        </div>

        <div className="w-full text-right text-sm text-purple-500 hover:underline cursor-pointer">
          Forgot?
        </div>

        {/* Login Button */}
        <button 
          className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition-colors text-sm font-semibold" 
          onClick={handleSubmit}
        >
          Log In
        </button>

        {/* Sign Up Prompt */}
        <div className="text-sm text-gray-500 text-center">
          Don't have an account?{' '}
          <span 
            className="text-purple-600 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate('/auth/register')}
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
}

export default LogInComponent;