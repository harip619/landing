import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Student = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Change the slide every 4 seconds
  };

  return (
    <Slider {...settings}>
      <div className="container mx-auto" id="review">
        <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
          Thanks to you
        </p>
        <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
          We are growing day-by-day
        </p>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
          <img src="/assets/lady2.jpeg" alt="" height={400} width={300} className="rounded-xl"/>
          <div className="flex flex-col gap-5 items-start">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Clara Eldho</p>
            <div className="flex items-center gap-2 ">
              <img src="/assets/india.jpg" alt="itersfgjds" height={50} width={50} />
              <p className="text-gray-500">Entrepreneur</p>
            </div>
            <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl w-xl">
            “Way better than Porter. Have shifted all my logistics needs to Koolie and I can now safely focus on my business growth. Amazing service!”
            </p>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto ">
        <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
          Thanks to you
        </p>
        <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
          We are growing day-by-day
        </p>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
          <img src="/assets/student.svg" alt="" />
          <div className="flex flex-col gap-5 items-start">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Dinesh</p>
            <div className="flex items-center gap-2">
              <img src="/assets/uk.svg" alt="itersfgjds" />
              <p className="text-gray-500">Entrepreneur</p>
            </div>
            <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
              “Excellent service by multiple drivers. <br />  I own a business and do multiple shiftings.  <br /> Rather than ask local drivers and bargain <br></br>every time, I use porter which fulfils all my need.<br/> Thanks a lot!”
            </p>
          </div>
        </div>
      </div> */}
      {/* Add more slides here if needed */}
      <div className="container mx-auto">
        <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
          Thanks to you
        </p>
        <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
          We are growing day-by-day
        </p>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
          <img src="/assets/man1.jpeg" alt="" height={250} width={250}/>
          <div className="flex flex-col gap-5 items-start">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Aarav Anilkumar</p>
            <div className="flex items-center gap-2 ">
              <img src="/assets/india.jpg" alt="itersfgjds" height={50} width={50} />
              <p className="text-gray-500">Influencer</p>
            </div>
            <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl w-xl">
            “Excellent service by multiple drivers. I own a business and do multiple shiftings. Rather than ask local drivers and bargain every time, I use Koolie which fulfils all my need. Thanks a lot!”
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
          Thanks to you
        </p>
        <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
          We are growing day-by-day
        </p>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
          <img src="/assets/man2.jpeg" alt="" height={250} width={250}/>
          <div className="flex flex-col gap-5 items-start">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Vikram Iyer</p>
            <div className="flex items-center gap-2 ">
              <img src="/assets/india.jpg" alt="itersfgjds" height={50} width={50} />
              <p className="text-gray-500">Entrepreneur</p>
            </div>
            <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl w-xl">
            “Have had an amazing experience. Had three successful deliveries where it’s a struggle to arrange a tempo service for your desired pickup and drop off. Must try this app!”
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
          Thanks to you
        </p>
        <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
          We are growing day-by-day
        </p>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
          <img src="/assets/lady3.jpeg" alt="" height={250} width={250}/>
          <div className="flex flex-col gap-5 items-start">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Smriti Mandhana</p>
            <div className="flex items-center gap-2 ">
              <img src="/assets/india.jpg" alt="itersfgjds"  height={50} width={50}/>
              <p className="text-gray-500">Business Tycoon</p>
            </div>
            <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl w-xl">
            “Smooth experience with Koolie's packers and movers! The team was fantastic, handling every detail. Highly recommend their services!“
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Student;
