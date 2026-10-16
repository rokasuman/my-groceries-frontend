
import React from "react";
import axios from "axios";
import { UseAppContext } from "../context/AppContext";

const Checkout = () => {
    const {
        product,
        cartItems,
        getTotalCartAmount,
        getTotalItem,
        navigate,
    } = UseAppContext();

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    const cartProducts =
        product?.filter((item) => cartItems[item._id] > 0) || [];

    const subtotal = getTotalCartAmount();
    const tax = subtotal * 0.02;
    const total = subtotal + tax;

    const handlePayment = async () => {
        if (!cartProducts.length) {
            setError("Your shopping bag is empty.");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const { data } = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/payment/create-checkout-session`,
                {
                    amount: Math.round(total * 100),
                }
            );

            if (data.url) {
                window.location.href = data.url;
            } else {
                setError("Unable to start checkout. Please try again.");
            }
        } catch (err) {
            console.error("Payment error:", err);
            setError(
                err.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F7F8F5] text-gray-800">
            {/* HEADER */}
            <header className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">
                  

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <rect x="5" y="10" width="14" height="11" rx="2" />
                            <path d="M8 10V7a4 4 0 1 1 8 0v3" />
                        </svg>
                        <span className="hidden sm:inline">
                            Secure checkout
                        </span>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-5 sm:px-8 py-10 lg:py-14">
                {/* PAGE TITLE */}
                <div className="mb-10">
                    <button
                        onClick={() => navigate("/cart")}
                        className="text-sm text-gray-500 hover:text-[#4F7942] mb-5 flex items-center gap-2"
                    >
                        <span>←</span> Back to shopping bag
                    </button>

                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4F7942] mb-2">
                        Almost yours
                    </p>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                        Checkout
                    </h1>

                    <p className="mt-3 text-gray-500">
                        Fresh choices, just a few steps away.
                    </p>

                    {/* CHECKOUT PROGRESS */}
                    <div className="flex items-center gap-3 mt-7 max-w-md">
                        <div className="flex items-center gap-2 text-[#4F7942]">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#4F7942] text-white text-sm">
                                ✓
                            </span>
                            <span className="text-sm font-medium">
                                Cart
                            </span>
                        </div>

                        <div className="h-px flex-1 bg-[#4F7942]" />

                        <div className="flex items-center gap-2 text-[#4F7942]">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#4F7942] text-sm font-semibold">
                                2
                            </span>
                            <span className="text-sm font-semibold">
                                Checkout
                            </span>
                        </div>

                        <div className="h-px flex-1 bg-gray-200" />

                        <div className="flex items-center gap-2 text-gray-400">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-sm">
                                3
                            </span>
                            <span className="text-sm">Payment</span>
                        </div>
                    </div>
                </div>

                {cartProducts.length === 0 ? (
                    <div className="bg-white rounded-3xl border border-gray-100 p-10 sm:p-16 text-center shadow-sm">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#EDF4E9] flex items-center justify-center text-3xl mb-5">
                            🛍️
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900">
                            Your bag is empty
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Add some fresh favourites before checking out.
                        </p>

                        <button
                            onClick={() => navigate("/all-products")}
                            className="mt-7 rounded-xl px-6 py-3 bg-[#4F7942] hover:bg-[#3F6035] text-white font-semibold transition"
                        >
                            Explore products
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_390px] gap-7 lg:gap-10 items-start">
                        {/* LEFT COLUMN */}
                        <div className="space-y-6">
                            {/* ORDER ITEMS */}
                            <section className="bg-white border border-gray-100 rounded-3xl p-5 sm:p-7 shadow-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">
                                            Your order
                                        </h2>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {getTotalItem()} items in your bag
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => navigate("/cart")}
                                        className="text-sm font-semibold text-[#4F7942] hover:underline"
                                    >
                                        Edit bag
                                    </button>
                                </div>

                                <div className="divide-y divide-gray-100">
                                    {cartProducts.map((item) => (
                                        <div
                                            key={item._id}
                                            className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                                        >
                                            <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-[#F7F8F5] overflow-hidden flex items-center justify-center">
                                                <img
                                                    src={item.image?.[0]}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-gray-900 truncate">
                                                    {item.name}
                                                </h3>

                                                <p className="text-sm text-gray-500 mt-1">
                                                    {item.size || "Standard size"}
                                                </p>

                                                <p className="text-sm text-gray-500 mt-2">
                                                    Qty: {cartItems[item._id]}
                                                </p>
                                            </div>

                                            <p className="font-bold text-gray-900 whitespace-nowrap">
                                                $
                                                {(
                                                    item.offerPrice *
                                                    cartItems[item._id]
                                                ).toFixed(2)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* DELIVERY INFORMATION */}
                            <section className="bg-white border border-gray-100 rounded-3xl p-5 sm:p-7 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-[#EDF4E9] flex items-center justify-center text-[#4F7942] shrink-0">
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                        >
                                            <path d="M3 7h11v11H3zM14 11h4l3 4v3h-7z" />
                                            <circle cx="7.5" cy="19" r="2" />
                                            <circle cx="17.5" cy="19" r="2" />
                                        </svg>
                                    </div>

                                    <div className="flex-1">
                                        <h2 className="font-bold text-gray-900">
                                            Delivery information
                                        </h2>

                                        <p className="text-sm text-gray-500 mt-1 leading-6">
                                            Your delivery address will be
                                            collected and confirmed before
                                            the order is submitted.
                                        </p>

                                        <p className="text-xs text-amber-700 bg-amber-50 rounded-lg p-3 mt-4">
                                            Delivery details are not yet
                                            connected to this checkout.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* PAYMENT INFORMATION */}
                            <section className="bg-white border border-gray-100 rounded-3xl p-5 sm:p-7 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-[#EDF4E9] flex items-center justify-center text-[#4F7942] shrink-0">
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                        >
                                            <rect
                                                x="3"
                                                y="5"
                                                width="18"
                                                height="14"
                                                rx="3"
                                            />
                                            <path d="M3 10h18M7 15h3" />
                                        </svg>
                                    </div>

                                    <div className="flex-1">
                                        <h2 className="font-bold text-gray-900">
                                            Payment method
                                        </h2>

                                        <p className="text-sm text-gray-500 mt-1">
                                            Secure online payment powered
                                            by Stripe.
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {["Visa", "Mastercard", "Stripe"].map(
                                                (method) => (
                                                    <span
                                                        key={method}
                                                        className="px-3 py-2 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600"
                                                    >
                                                        {method}
                                                    </span>
                                                )
                                            )}
                                        </div>

                                        <div className="flex gap-2 items-center text-sm text-gray-500 mt-4">
                                            <svg
                                                width="17"
                                                height="17"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                            >
                                                <rect
                                                    x="5"
                                                    y="10"
                                                    width="14"
                                                    height="11"
                                                    rx="2"
                                                />
                                                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                                            </svg>

                                            Your payment details are handled
                                            by Stripe.
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* RIGHT COLUMN - STICKY ORDER SUMMARY */}
                        <aside className="lg:sticky lg:top-8">
                            <section className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-sm">
                                <h2 className="text-xl font-bold text-gray-900">
                                    Order summary
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    A little freshness, delivered to you.
                                </p>

                                <div className="space-y-4 mt-7 text-sm">
                                    <div className="flex justify-between gap-4 text-gray-600">
                                        <span>Subtotal</span>
                                        <span className="font-medium text-gray-900">
                                            ${subtotal.toFixed(2)}
                                        </span>
                                    </div>

                                    <div className="flex justify-between gap-4 text-gray-600">
                                        <span>Delivery</span>
                                        <span className="font-semibold text-[#4F7942]">
                                            FREE
                                        </span>
                                    </div>

                                    <div className="flex justify-between gap-4 text-gray-600">
                                        <span>Tax (2%)</span>
                                        <span className="font-medium text-gray-900">
                                            ${tax.toFixed(2)}
                                        </span>
                                    </div>
                                </div>

                                <div className="border-t border-dashed border-gray-200 my-6" />

                                <div className="flex items-end justify-between gap-4">
                                    <div>
                                        <p className="font-bold text-gray-900">
                                            Total
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Tax included in total
                                        </p>
                                    </div>

                                    <p className="text-3xl font-bold tracking-tight text-[#31552C]">
                                        ${total.toFixed(2)}
                                    </p>
                                </div>

                                {error && (
                                    <div
                                        role="alert"
                                        className="mt-5 p-3 rounded-xl bg-red-50 border border-red-100 text-sm text-red-700"
                                    >
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="button"
                                    onClick={handlePayment}
                                    disabled={loading}
                                    className="w-full mt-7 py-4 px-5 rounded-2xl bg-[#4F7942] hover:bg-[#3F6035] text-white font-semibold flex items-center justify-center gap-3 transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
                                >
                                    {loading ? (
                                        <>
                                            <svg
                                                className="animate-spin"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="9"
                                                    stroke="currentColor"
                                                    strokeOpacity=".25"
                                                    strokeWidth="3"
                                                />
                                                <path
                                                    d="M21 12a9 9 0 0 0-9-9"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            Connecting to Stripe...
                                        </>
                                    ) : (
                                        <>
                                            Continue to payment
                                            <span className="text-xl">→</span>
                                        </>
                                    )}
                                </button>

                                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                    >
                                        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                    Secure checkout with Stripe
                                </div>

                                <div className="bg-[#F7F8F5] rounded-2xl p-4 mt-7">
                                    <p className="text-sm font-semibold text-gray-800">
                                        🌱 Freshness you can trust
                                    </p>
                                    <p className="text-xs leading-5 text-gray-500 mt-1">
                                        Thank you for choosing GreenCart.
                                        We appreciate your order.
                                    </p>
                                </div>
                            </section>

                            <p className="text-center text-xs text-gray-400 mt-5">
                                By continuing, you agree to our terms
                                and payment conditions.
                            </p>
                        </aside>
                    </div>
                )}
            </main>

            {/* FOOTER */}
            <footer className="border-t border-gray-200 bg-white mt-8">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} GreenCart</p>
                    <p>Fresh groceries. Thoughtfully delivered.</p>
                </div>
            </footer>
        </div>
    );
};

export default Checkout;
