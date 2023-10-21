import React from "react";
import Layout from "../../components/Layout";
import Product from "../../components/Product";
import { Link } from "react-router-dom";

function Index() {
  return (
    <Layout className="min-h-[100vh] max-w-7xl">
      <div className="mt-10 flex gap-10">
        <div className="flex-[0.2] w-[30rem] border rounded-md shadow h-fit bg-white p-5">
          <h2 className="underline">Categories</h2>
          <div className="mt-5 tex-xs flex flex-col gap-2">
            <Link>Shoes</Link>
            <Link>Clothes</Link>
            <Link>Vehicles</Link>
            <Link>Phones</Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 flex-[0.8]">
          {Array(5)
            .fill(0)
            .map((item, idx) => {
              return <Product key={idx} />;
            })}
        </div>
      </div>
    </Layout>
  );
}

export default Index;
