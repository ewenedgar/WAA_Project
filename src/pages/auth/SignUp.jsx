import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Layout className="min-h-[80vh] grid place-items-center">
      <div className="border rounded-md pt-10 pb-12 px-8 shadow-md w-4/12 flex flex-col gap-8">
        <h3 className="font-bold text-3xl">Sign Up</h3>
        <form>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-500 text-sm">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="p-2 border rounded-md outline-none"
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
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-500 text-sm">
                Type
              </label>
              <select className="p-2 border rounded-md outline-none">
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
          </div>
          <button className="w-full mt-5 rounded-md border p-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all delay-75 ease-linear">
            Register
          </button>
        </form>
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/auth/signup" className="underline text-blue-400">
            Log In
          </Link>
        </p>
      </div>
    </Layout>
  );
}

export default SignUp;
