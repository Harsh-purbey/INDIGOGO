import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { CiBookmark } from 'react-icons/ci';
const PopularCampaigns = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="bg-white lg:px-[93px] lg:pt-[93px] lg:pb-[43px] space-y-10">
      <div className="flex justify-between w-full">
        <h1 className="text-4xl font-bold text-black">Popular Campaigns</h1>
        <div className="space-x-2 pr-4 hidden lg:block">
          <button className="text-gray-700 p-4 bg-gray-200 border-gray-400 border-2 rounded-lg text-xl font-thin">
            <FaArrowLeft />
          </button>
          <button className=" text-gray-700 p-4  border-gray-400 border-2 rounded-lg text-xl font-thin ">
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div>
        <ul className="flex overflow-y-auto no-scrollbar space-x-8">
          {arr.map((value, index) => (
            <li
              key={index}
              className="space-y-4 cursor-pointer  text-black group transition-all duration-100"
            >
              <div
                style={{ backgroundImage: 'url(./images/display1.jpg)' }}
                className="p-4 w-[306px] h-[305px] bg-cover rounded-lg group-hover:contrast-50"
              >
                <div className="flex justify-between flex-col h-full w-full">
                  <div className="flex justify-between">
                    <button className=" opacity-0 group-hover:opacity-100   uppercase bg-white text-black p-2 text-sm rounded-sm">
                      ending soon
                    </button>
                    <button className=" opacity-0 group-hover:opacity-100   uppercase bg-white text-black p-3 text-sm rounded-sm font-bold">
                      <CiBookmark />
                    </button>
                  </div>
                  <button className="duration-200 translate-y-10 w-full opacity-0 group-hover:opacity-100  group-hover:translate-y-0  uppercase bg-white text-black p-3 text-xl rounded-sm ">
                    VIEW CAMPAIGN
                  </button>
                </div>
              </div>
              <h3 className="text-xl">
                LIVALL PikaBoost 2: Electrify Your Rides with Ease
              </h3>
              <div>
                <p className="uppercase font-thin">Starting at</p>
                <div className="space-x-3">
                  {' '}
                  <span className="text-xl font-bold">₹32,583</span>{' '}
                  <span className="text-lg font-thin line-through text-gray-700 ">
                    ₹47,699 INR
                  </span>{' '}
                  <span className="text-lg font-thin line-through text-red-500 ">
                    (31% OFF)
                  </span>{' '}
                </div>
              </div>
              <div>
                <hr className=" border-red-500 border-b-4"></hr>
                <div className="pt-2 text-sm space-x-3">
                  <span className="pr-4 border-r-[2px] border-gray-200">
                    ₹47,023,178 raised
                  </span>
                  <span>11199% funded</span>
                </div>
              </div>
              <h5 className="text-sm">TRAVEL & OUTDOORS</h5>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center text-black">
        <button className="px-8 py-4 border-gray-300 border-2 rounded-lg hover:bg-gray-200">
          EXPLORE ALL CAMPAIGNS
        </button>
      </div>
    </div>
  );
};

export default PopularCampaigns;
