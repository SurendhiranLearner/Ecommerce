import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Surendhiran Sweet",
    text: "Absolutely love the printed shirts! They are super comfortable and stylish. Definitely my go-to for casual outings.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Dhaunsh",
    text: "The quality of the women's shirts is amazing. They fit perfectly and feel great. I highly recommend them.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Vinoth",
    text: "Amazing collection of shirts. I get so many compliments whenever I wear them. Perfect for every occasion.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sathish Kumar",
    text: "Great value for money ! These shirts are stylish and very comfortable.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center  mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p
            data-aos="fade-up"
            className="mb-10 max-w-[600px] font-semibold mx-auto text-xs text-cyan-500"
          >
            They are often used in marketing materials, Websites, Social
            Media, and Email campaigns to encourage conversions.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="relative flex flex-col gap-4 px-6 py-8 mx-4 shadow-lg rounded-xl dark:bg-slate-600 bg-primary/10"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500 dark:text-slate-300">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="absolute top-0 right-0 font-serif text-black/20 text-9xl"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
