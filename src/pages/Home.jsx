import React from "react";
import Slider from "react-slick";
import SuccessCard from "../components/SuccessCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const successDetails = [
    {
      title: "Success Story",
      description:
        "Check out all of these gorgeous mountain trips with beautiful ",
      image:
        "https://www.akgec.ac.in/wp-content/uploads/2021/01/Srishti_Success.jpg",
    },
    {
      title: "To The Beach",
      description: "Plan your next beach trip with these fabulous destinations",
      image:
        "https://www.akgec.ac.in/wp-content/uploads/2021/01/Neeraj_Success.jpg",
    },
    {
      title: "Desert Destinations",
      description: "It's the desert you've always dreamed of",
      image:
        "https://www.akgec.ac.in/wp-content/uploads/2021/01/Arun_Success.jpg",
    },
    {
      title: "Explore The Galaxy",
      description:
        "Seriously, straight up, just blast off into outer space today",
      image:
        "https://www.akgec.ac.in/wp-content/uploads/2021/01/Neeraj_Success.jpg",
    },
    {
      title: "Success Story",
      description:
        "Check out all of these gorgeous mountain trips with beautiful ",
      image:
        "https://www.akgec.ac.in/wp-content/uploads/2021/01/Arun_Success.jpg",
    },
    {
      title: "To The Beach",
      description: "Plan your next beach trip with these fabulous destinations",
      image:
        "https://www.akgec.ac.in/wp-content/uploads/2021/01/Neeraj_Success.jpg",
    },
    {
      title: "Desert Destinations",
      description: "It's the desert you've always dreamed of",
      image:
        "https://www.akgec.ac.in/wp-content/uploads/2021/01/Srishti_Success.jpg",
    },
    {
      title: "Explore The Galaxy",
      description:
        "Seriously, straight up, just blast off into outer space today",
      image:
        "https://www.akgec.ac.in/wp-content/uploads/2021/01/Neeraj_Success.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-12">

      {/* gradient-background */}
      <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        
      <div className="relative w-full flex justify-start items-center px-16 ">
        <div className="h-3 bg-yellow-400 w-60 absolute bottom-0"></div>
        <h1 className="font-BonaNova font-medium tracking-wide text-3xl z-10">
          Success Stories
        </h1>
      </div>
      <main className="w-full h-full p-10">
        <Slider {...settings}>
          {successDetails.map((details, index) => (
            <div key={index} className="p-7">
              <SuccessCard {...details} />
            </div>
          ))}
        </Slider>
      </main>

      {/* gradient-background */}
      <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
    </div>
  );
}

export default Home;
