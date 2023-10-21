import Layout from "../../components/Layout";

import hero from "../../assets/hero.webp";
import { Link } from "react-router-dom";
import Product from "../../components/Product";

function Home() {
  return (
    <Layout className="max-w-full">
      <div className="w-full relative h-[80vh] left-0">
        <div className="dark-overlay" />
        <img src={hero} className="w-full h-full cover" />
        <div className="absolute top-0 w-full h-full">
          <div className="w-6/12 mx-auto text-white mt-48 flex flex-col gap-8 items-center">
            <h2 className="text-7xl text-center">
              The Best Place to Buy and Sell
            </h2>
            <p className="text-lg">
              Want to buy and sell? You&apos;ve come to the right place!
            </p>

            <button className="hover:scale-110 delay-100 transition-all ease-linear">
              <Link to="/auth/login" className="btn primary px-16 p-5">
                Log In
              </Link>
            </button>
          </div>
        </div>
      </div>

      <section className="w-9/12 mt-16 mx-auto">
        <div className="flex flex-col items-center">
          <p className="capitalize text-sm">auctions</p>
          <h2 className="text-3xl">Current Auctions</h2>
        </div>

        <div className="p-5 mt-5 grid grid-cols-3 gap-10">
          {Array(5)
            .fill(0)
            .map((item, idx) => {
              return <Product key={idx} />;
            })}
        </div>

        <p className="text-center mt-20">
          <Link to="/products" className="border-b-2 border-orange-400">
            View All Products
          </Link>
        </p>
      </section>
    </Layout>
  );
}

export default Home;
