import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-slate-200 p-5 shadow-md">
      <nav className="z-10 relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl">Auction It.</h3>
          <div className="space-x-16">
            <Link to="/" className="hover:link-hover">
              Home
            </Link>
            <Link to="" className="hover:link-hover">
              Buy
            </Link>
            <Link to="" className="hover:link-hover">
              Sell
            </Link>
          </div>
          <Link
            to="/login"
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
