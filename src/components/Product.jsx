import React, { useState } from "react";
import ProductDetail from "../pages/product/ProductDetail";

function Product() {
  const [openProductModal, setOpenProductModal] = useState(false);
  return (
    <>
      <div className="border relative border-slate-50 rounded-lg shadow-md overflow-hidden">
        <img
          src="https://dummyimage.com/640x360/fff/aaa"
          className="cursor-pointer"
        />
        <div className="p-5 space-y-3">
          <div className="flex justify-between items-center cursor-pointer">
            <p className="text-2xl">Pinky shoes</p>
            <p className="text-orange-500">$100</p>
          </div>
          <div className="text-sm text-gray-400 items-center flex justify-between">
            <p>Shoes</p>
            <p>4 bids</p>
          </div>
          <div className="flex justify-end">
            <button
              className="text-xs p-2 rounded-md bg-gray-300"
              onClick={() => setOpenProductModal(true)}
            >
              Place a Bid
            </button>
          </div>
        </div>
      </div>

      <ProductDetail
        isOpen={openProductModal}
        setIsOpen={setOpenProductModal}
      />
    </>
  );
}

export default Product;
