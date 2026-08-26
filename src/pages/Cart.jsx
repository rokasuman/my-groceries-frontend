import React from "react";
import { UseAppContext } from "../context/AppContext";
import { useParams } from "react-router";

const Cart = () => {
    const { product,removeFromCart, navigate} = UseAppContext();
    const { id } = useParams();

    // Get the selected product using the ID from the URL
    const selectedProduct = product?.find(
        (item) => item._id === id
    );

    console.log("Selected Product:", selectedProduct);

    const [showAddress, setShowAddress] = React.useState(false);

    return (
        <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto">

            {/* LEFT SIDE - CART */}
            <div className="flex-1 max-w-4xl">

                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart{" "}
                    <span className="text-sm text-indigo-500">
                        {selectedProduct ? "1 item" : "0 item"}
                    </span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">
                        Product Details
                    </p>

                    <p className="text-center">
                        Subtotal
                    </p>

                    <p className="text-center">
                        Action
                    </p>
                </div>

                {/* Selected Product */}
                {selectedProduct ? (
                    <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">

                        {/* PRODUCT DETAILS */}
                        <div className="flex items-center md:gap-6 gap-3">

                            <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden">

                                <img
                                    className="max-w-full h-full object-cover"
                                    src={selectedProduct.image?.[0]}
                                    alt={selectedProduct.name}
                                />

                            </div>

                            <div>

                                <p className="hidden md:block font-semibold">
                                    {selectedProduct.name}
                                </p>

                                <div className="font-normal text-gray-500/70">

                                    <p>
                                        Size:{" "}
                                        <span>
                                            {selectedProduct.size || "N/A"}
                                        </span>
                                    </p>

                                    {/* QUANTITY */}
                                    <div className="flex items-center">

                                        <p>
                                            Qty:
                                        </p>

                                        <select className="outline-none">

                                            {Array(5)
                                                .fill("")
                                                .map((_, index) => (
                                                    <option
                                                        key={index}
                                                        value={index + 1}
                                                    >
                                                        {index + 1}
                                                    </option>
                                                ))}

                                        </select>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* SUBTOTAL */}
                        <p className="text-center">
                            ${selectedProduct.offerPrice}
                        </p>

                        {/* REMOVE BUTTON */}
                        <button
                            onClick={()=>removeFromCart()}
                            className="cursor-pointer mx-auto"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
                                    stroke="#FF532E"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                    </div>
                ) : (
                    <p className="text-gray-500 py-10 text-center">
                        Product not found.
                    </p>
                )}

                {/* CONTINUE SHOPPING */}
                <button
                onClick={()=>navigate("/all-products")}
                    className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-500 font-medium"
                >

                    <svg
                        width="15"
                        height="11"
                        viewBox="0 0 15 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1"
                            stroke="#615fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    Continue Shopping

                </button>

            </div>

            {/* RIGHT SIDE - ORDER SUMMARY */}
            <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">

                <h2 className="text-xl md:text-xl font-medium">
                    Order Summary
                </h2>

                <hr className="border-gray-300 my-5" />

                <div className="mb-6">

                    {/* DELIVERY ADDRESS */}
                    <p className="text-sm font-medium uppercase">
                        Delivery Address
                    </p>

                    <div className="relative flex justify-between items-start mt-2">

                        <p className="text-gray-500">
                            No address found
                        </p>

                        <button
                            onClick={() =>
                                setShowAddress(!showAddress)
                            }
                            className="text-indigo-500 hover:underline cursor-pointer"
                        >
                            Change
                        </button>

                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">

                                <p
                                    onClick={() =>
                                        setShowAddress(false)
                                    }
                                    className="text-gray-500 p-2 hover:bg-gray-100"
                                >
                                    New York, USA
                                </p>

                                <p
                                    onClick={() =>
                                        setShowAddress(false)
                                    }
                                    className="text-indigo-500 text-center cursor-pointer p-2 hover:bg-indigo-500/10"
                                >
                                    Add address
                                </p>

                            </div>
                        )}

                    </div>

                    {/* PAYMENT METHOD */}
                    <p className="text-sm font-medium uppercase mt-6">
                        Payment Method
                    </p>

                    <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">

                        <option value="COD">
                            Cash On Delivery
                        </option>

                        <option value="Online">
                            Online Payment
                        </option>

                    </select>

                </div>

                <hr className="border-gray-300" />

                {/* PRICE SUMMARY */}
                <div className="text-gray-500 mt-4 space-y-2">

                    <p className="flex justify-between">
                        <span>
                            Price
                        </span>

                        <span>
                            ${selectedProduct?.offerPrice || 0}
                        </span>
                    </p>

                    <p className="flex justify-between">
                        <span>
                            Shipping Fee
                        </span>

                        <span className="text-green-600">
                            Free
                        </span>
                    </p>

                    <p className="flex justify-between">
                        <span>
                            Tax (2%)
                        </span>

                        <span>
                            $
                            {selectedProduct
                                ? (
                                    selectedProduct.offerPrice * 0.02
                                ).toFixed(2)
                                : "0.00"}
                        </span>
                    </p>

                    <p className="flex justify-between text-lg font-medium mt-3">

                        <span>
                            Total Amount:
                        </span>

                        <span>
                            $
                            {selectedProduct
                                ? (
                                    selectedProduct.offerPrice * 1.02
                                ).toFixed(2)
                                : "0.00"}
                        </span>

                    </p>

                </div>

                {/* PLACE ORDER */}
                <button className="w-full py-3 mt-6 cursor-pointer bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
                    Place Order
                </button>

            </div>

        </div>
    );
};

export default Cart;