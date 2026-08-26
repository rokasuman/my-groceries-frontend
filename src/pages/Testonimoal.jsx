

const Testonimoal = () => {
  const testimonials = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Donald Jackman",
      role: "Content Creator",
      text: "I've been using prebuiltui for nearly two years, primarily for web pages and it has been incredibly user-friendly, making my work much easier.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Richard Nelson",
      role: "Instagram Influencer",
      text: "I've been using this website for nearly a year, primarily for web apps and it has been incredibly amazing, making my work much easier.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: "James Washington",
      role: "Marketing Manager",
      text: "I've been using this awesome website for nearly two years, primarily for my saas app and it has been incredibly user-friendly, making my work much easier.",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          What Our Customers Say
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Hear from our happy customers
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="
              text-sm
              w-full
              max-w-sm
              sm:w-[320px]
              border
              border-gray-200
              pb-6
              rounded-lg
              bg-white
              shadow-[0px_4px_15px_0px]
              shadow-black/5
              gap-6
              mt-5
            "
          >
            {/* Profile */}
            <div className="flex flex-col items-center px-5 py-4 relative">
              <img
                className="
                  h-20
                  w-20
                  sm:h-24
                  sm:w-24
                  absolute
                  -top-10
                  sm:-top-12
                  rounded-full
                  object-cover
                "
                src={testimonial.image}
                alt={testimonial.name}
              />

              <div className="pt-8 sm:pt-10 text-center">
                <h1 className="text-base sm:text-lg font-medium text-gray-800">
                  {testimonial.name}
                </h1>

                <p className="text-gray-800/80 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>

            {/* Review */}
            <p className="text-gray-500 px-5 sm:px-6 text-center leading-relaxed">
              {testimonial.text}
            </p>

            {/* Stars */}
            <div className="flex justify-center pt-4">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="18"
                    height="18"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                      fill="#FF532E"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testonimoal;