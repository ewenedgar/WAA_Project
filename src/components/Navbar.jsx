import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-slate-200 p-5 shadow-md">
      <nav className="z-10 relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl">
            Auction It.
          </Link>
          <div className="space-x-16">
            <Link to="/" className="hover:link-hover">
              Home
            </Link>
            <Link to="" className="hover:link-hover">
              Products
            </Link>
            <Link to="" className="hover:link-hover">
              Create product
            </Link>
          </div>
          <Link
            to="/auth/login"
            className="border rounded-md border-orange-500 px-5 py-2 hover:bg-orange-500 hover:text-white transition-all delay-75 ease-linear"
          >
            Log In
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
