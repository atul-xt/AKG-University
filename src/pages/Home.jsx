import React from "react";
import SuccessCard from "../components/SuccessCard";

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

  return (
    <div className="pt-12">
      <h1 className="font-BarlowCondensed text-center font-medium tracking-wide text-3xl">
        Success Stories
      </h1>
      <main className="w-full h-full p-10">
        {successDetails.map((details, index) => (
          <div key={index} className="p-6">
            <SuccessCard {...details} />
          </div>
        ))}
      </main>
    </div>
  );
}

export default Home;
