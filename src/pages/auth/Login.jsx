import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout className="min-h-[80vh] grid place-items-center">
      <div className="border rounded-md pt-10 pb-12 px-8 shadow-md w-4/12 flex flex-col gap-8">
        <h3 className="font-bold text-3xl">Login In</h3>
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full mt-5 rounded-md border p-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all delay-75 ease-linear"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link to="/auth/signup" className="underline text-blue-400">
            Sign up
          </Link>
        </p>
      </div>
    </Layout>
  );
}

export default Login;
