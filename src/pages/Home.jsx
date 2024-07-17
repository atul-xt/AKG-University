import React from 'react';
import Slider from 'react-slick';
import SuccessCard from '../components/SuccessCard';
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
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }
    ]
};

  return (
    <div className="pt-12">
      <h1 className="font-BarlowCondensed text-center font-medium tracking-wide text-3xl">
        Success Stories
      </h1>
      <main className="w-full h-full p-10">
            <Slider {...settings}>
                {successDetails.map((details, index) => (
                    <div key={index} className="p-2">
                        <SuccessCard {...details} />
                    </div>
                ))}
            </Slider>
        </main>
    </div>
  );
}

export default Home;
