import React from "react";
import Layout from "../../components/Layout";
import Product from "../../components/Product";

function Index() {
  return (
    <Layout className="min-h-[100vh] max-w-7xl">
      <div className="mt-10">
        <div className="p-5 mt-5 grid grid-cols-3 gap-10">
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
