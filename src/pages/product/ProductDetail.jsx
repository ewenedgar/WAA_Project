import React from "react";
import { Dialog } from "@headlessui/react";

function ProductDetail({ isOpen, setIsOpen }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto rounded-md bg-zinc-100 w-[45rem] overflow-hidden">
          <Dialog.Title className="text-center bg-slate-200 p-5">
            Place your Bid
          </Dialog.Title>

          <div className="mt-10 flex mb-10 gap-10 p-5">
            <div className="border border-gray-100 flex-1 rounded-md overflow-hidden">
              <img src="https://dummyimage.com/440x360/fff/aaa" />
            </div>
            <div className="flex flex-col justify-between flex-1 h-[16rem]">
              <div className="text-sm">
                <div className="space-y-2">
                  <p className="text-gray-600">
                    Price: <span className="text-green-400">$100</span>
                  </p>
                  <p className="text-gray-600">
                    Number of Bids: <span>20</span>
                  </p>
                  <p className="text-gray-600">
                    Current Bid Price:{" "}
                    <span className="text-red-400 font-bold">$200</span>
                  </p>
                </div>
              </div>
              <form className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <input
                    className="border p-1 rounded-md outline-none placeholder:text-xs"
                    placeholder="Enter Bid Amount"
                  />
                </div>
                <div className="flex items-center justify-end gap-2">
                  <button className="text-sm border rounded bg-green-300 p-2">
                    Place bid
                  </button>
                  <button
                    className="text-sm text-white border rounded bg-red-600 p-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default ProductDetail;
