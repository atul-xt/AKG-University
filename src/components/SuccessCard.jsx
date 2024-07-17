import React from "react";

function SuccessCard({ title, description, image }) {
    return (
        <div
            className="relative h-[450px] w-full flex items-end overflow-hidden text-center text-white shadow-lg shadow-black/30 bg-contain bg-no-repeat bg-center transition-transform duration-700 ease-out hover:items-center hover:bg-opacity-80 focus-within:items-center focus-within:bg-opacity-80"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="relative h-72 flex flex-col items-center w-full p-4 transition-transform duration-700 ease-out transform translate-y-56 hover:translate-y-0 focus-within:translate-y-0 hover:h-full hover:justify-center backdrop-blur-md bg-black/30">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="font-serif text-lg italic mt-4">{description}</p>
                <button className="mt-6 px-4 py-2 text-sm font-bold uppercase bg-black hover:bg-gray-900 focus:outline-none">
                    Full Story
                </button>
            </div>
        </div>
    );
}

export default SuccessCard;
