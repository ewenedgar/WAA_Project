import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(email, password1, password2, userType, name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout className="min-h-[100vh] grid place-items-center">
      <div className="border rounded-md pt-10 pb-12 px-8 shadow-md w-4/12 flex flex-col gap-8">
        <h3 className="font-bold text-3xl">Sign Up</h3>
        <form>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-500 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="p-2 border rounded-md outline-none"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-500 text-sm">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="p-2 border rounded-md outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-500 text-sm">
                Password
              </label>
              <input
                type="text"
                name="email"
                className="p-2 border rounded-md outline-none"
                onChange={(e) => setPassword1(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-500 text-sm">
                Confirm Password
              </label>
              <input
                type="text"
                name="email"
                className="p-2 border rounded-md outline-none"
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-500 text-sm">
                Type
              </label>
              <select
                className="p-2 border rounded-md outline-none"
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full mt-5 rounded-md border p-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all delay-75 ease-linear"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/auth/login" className="underline text-blue-400">
            Log In
          </Link>
        </p>
      </div>
    </Layout>
  );
}

export default SignUp;
