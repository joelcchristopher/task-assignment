import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SignIn = ({ onAuthenticate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mockUsername = "test@test.com";
  const mockPassword = "test";
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Call to backend API to sign in
  //     const response = await fetch('/api/signin', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email, password }),
  //     });
  //     if (response.ok) {
  //       onAuthenticate(true);
  //     } else {
  //       // Handle sign-in error
  //       console.log('Sign-in failed');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if input matches mock credentials
    if (email === mockUsername && password === mockPassword) {
      // Set authenticated state to true
      onAuthenticate(true);
      // Redirect to home page
      navigate("/");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
<div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <img
    alt="Your Company"
    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    className="mx-auto h-10 w-auto"
  />
  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
    Sign in to your account
  </h2>
</div>

<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
    <div>
      <div className="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div>
      <div className="mt-2">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign in
      </button>
    </div>
  </form>
</div>
</div>
  );
};

export default SignIn;
