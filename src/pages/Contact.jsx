import React from 'react'

const Contact = () => {
  return (
   <>
   <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }
                `}
            </style>

            <section className="bg-white px-4 py-16">
                <div className="w-full mx-auto flex flex-col md:flex-row max-md:items-center justify-center gap-12 md:gap-16">
                    {/* Left Side */}
                    <div className="flex flex-col mt-10">
                        <p className="text-sm max-md:text-center font-medium text-zinc-500 uppercase mb-2">Get In Touch</p>
                        <h1 className="text-5xl/14 max-md:text-center font-bold text-primary max-w-2xs mb-4">Everything you need, All in one app.</h1>
                        <p className="text-base/5.5 text-zinc-500 max-md:text-center max-w-2xs">Have a question or need help with your order? We’re here to help.
Reach out to us anytime, and our team will be happy to assist you.
Your satisfaction is our priority at GreenCart.</p>
                        
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full max-w-sm border border-zinc-300 rounded-2xl p-8">
                        <h2 className="text-base font-medium text-zinc-800 mb-5.5">Send Message</h2>
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2.5">
                                <label className="text-xs text-zinc-400">Name</label>
                                <input type="text" placeholder="Enter your name" className="bg-zinc-50 border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 outline-none focus:border-zinc-500 transition-colors" />
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <label className="text-xs text-zinc-400">Email</label>
                                <input type="email" placeholder="Enter your email" className="bg-zinc-50 border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 outline-none focus:border-zinc-500 transition-colors" />
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <label className="text-xs text-zinc-400">Message</label>
                                <textarea placeholder="Your message.." rows="4" className="bg-zinc-50 border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 outline-none focus:border-zinc-500  transition-colors resize-none"></textarea>
                            </div>
                            <button type="submit" className="bg-primary hover:bg-green-800 text-white text-base py-3 rounded-lg transition-colors cursor-pointer mt-1">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>

  )
}

export default Contact