
import React from "react";
import { UseAppContext } from "../context/AppContext";

const Cart = () => {
    const {
        product,
        cartItems,
        updateCart,
        removeFromCart,
        navigate,
        getTotalItem,
        getTotalCartAmount,
    } = UseAppContext();

    const [showAddress, setShowAddress] = React.useState(false);
    const [paymentMethod, setPaymentMethod] = React.useState("COD");

    // Get only products currently in the cart
    const cartProducts = product?.filter(
        (item) => cartItems[item._id] > 0
    );

    // Handle checkout and order actions
    const handlePlaceOrder = () => {
        if (!cartProducts || cartProducts.length === 0) {
            return;
        }

        if (paymentMethod === "Online") {
            // Navigate to the online checkout page
            navigate("/checkout");
        } else {
            // Add your Cash on Delivery order API logic here
            console.log("Cash on Delivery selected");
        }
    };

    const totalAmount = getTotalCartAmount();
    const tax = totalAmount * 0.02;
    const finalAmount = totalAmount + tax;

    return (
        <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto gap-10">

            {/* LEFT SIDE - CART */}
            <div className="flex-1 max-w-4xl">

                {/* CART TITLE */}
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart{" "}
                    <span className="text-sm text-indigo-500">
                        {getTotalItem()} items
                    </span>
                </h1>

                {/* CART HEADER */}
                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {/* CART PRODUCTS */}
                {cartProducts?.length > 0 ? (
                    cartProducts.map((item) => (
                        <div
                            key={item._id}
                            className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3 border-b border-gray-200 pb-4"
                        >
                            {/* PRODUCT DETAILS */}
                            <div className="flex items-center md:gap-6 gap-3">

                                {/* PRODUCT IMAGE */}
                                <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden">
                                    <img
                                        className="max-w-full h-full object-cover"
                                        src={item.image?.[0]}
                                        alt={item.name}
                                    />
                                </div>

                                {/* PRODUCT INFORMATION */}
                                <div>
                                    <p className="font-semibold text-gray-800">
                                        {item.name}
                                    </p>

                                    <div className="font-normal text-gray-500/70">
                                        <p>
                                            Size:{" "}
                                            <span>{item.size || "N/A"}</span>
                                        </p>

                                        {/* QUANTITY */}
                                        <div className="flex items-center gap-2">
                                            <p>Qty:</p>

                                            <select
                                                value={cartItems[item._id]}
                                                onChange={(e) =>
                                                    updateCart(
                                                        item._id,
                                                        Number(e.target.value)
                                                    )
                                                }
                                                className="outline-none border border-gray-300 rounded px-1 py-0.5 cursor-pointer"
                                            >
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
                                $
                                {(
                                    item.offerPrice *
                                    cartItems[item._id]
                                ).toFixed(2)}
                            </p>

                            {/* REMOVE BUTTON */}
                            <button
                                type="button"
                                onClick={() => removeFromCart(item._id)}
                                aria-label={`Remove ${item.name} from cart`}
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
                    ))
                ) : (
                    /* EMPTY CART */
                    <div className="py-10 text-center">
                        <p className="text-gray-500">
                            Your cart is empty.
                        </p>
                    </div>
                )}

                {/* CONTINUE SHOPPING */}
                <button
                    type="button"
                    onClick={() => navigate("/all-products")}
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
            <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-10 border border-gray-300/70">

                <h2 className="text-xl font-medium">
                    Order Summary
                </h2>

                <hr className="border-gray-300 my-5" />

                {/* DELIVERY ADDRESS */}
                <div className="mb-6">
                    <p className="text-sm font-medium uppercase">
                        Delivery Address
                    </p>

                    <div className="relative flex justify-between items-start mt-2">
                        <p className="text-gray-500">
                            No address found
                        </p>

                        <button
                            type="button"
                            onClick={() =>
                                setShowAddress(!showAddress)
                            }
                            className="text-indigo-500 hover:underline cursor-pointer"
                        >
                            Change
                        </button>

                        {/* ADDRESS DROPDOWN */}
                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full z-10">
                                <p
                                    onClick={() =>
                                        setShowAddress(false)
                                    }
                                    className="text-gray-500 p-2 hover:bg-gray-100 cursor-pointer"
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

                    <select
                        value={paymentMethod}
                        onChange={(e) =>
                            setPaymentMethod(e.target.value)
                        }
                        className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none"
                    >
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

                    {/* PRICE */}
                    <p className="flex justify-between">
                        <span>Price</span>
                        <span>${totalAmount.toFixed(2)}</span>
                    </p>

                    {/* SHIPPING */}
                    <p className="flex justify-between">
                        <span>Shipping Fee</span>
                        <span className="text-green-600">Free</span>
                    </p>

                    {/* TAX */}
                    <p className="flex justify-between">
                        <span>Tax (2%)</span>
                        <span>${tax.toFixed(2)}</span>
                    </p>

                    {/* TOTAL */}
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span>
                        <span>${finalAmount.toFixed(2)}</span>
                    </p>
                </div>

                {/* CONDITIONAL ORDER / CHECKOUT BUTTON */}
                <button
                    type="button"
                    onClick={handlePlaceOrder}
                    disabled={!cartProducts || cartProducts.length === 0}
                    className="w-full py-3 mt-6 cursor-pointer bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {paymentMethod === "Online"
                        ? "Proceed to Checkout"
                        : "Place Order"}
                </button>
            </div>
        </div>
    );
};

export default Cart;
