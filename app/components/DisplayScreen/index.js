import React from 'react';
import { CiSearch } from 'react-icons/ci';

const DisplayScreen = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div
      className=" h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-between"
      style={{ backgroundImage: 'url(./images/display1.jpg)' }}
    >
      <div className="flex justify-between py-[20px] px-[50px] cursor-pointer ">
        <div className="flex items-center space-x-5 ">
          <h1 className="text-4xl font-bold">INDIGOGO</h1>
          <p>Explore</p>
          <p>indieShop</p>
        </div>
        <div className="flex">
          <CiSearch className="rounded-l-lg bg-gray-400 bg-opacity-25 text-white w-6 h-6 pr-2 py-4 pl-4 box-content font-bold" />
          <input
            placeholder="Search crowdfunding... "
            className="rounded-r-lg pr-3 bg-gray-400 bg-opacity-25 w-[400px] outline-none text-sm placeholder-slate-300"
          />
        </div>
        <div className="space-x-4">
          <button>Login / Sign up</button>
          <button className="p-3 rounded-lg border-disbtn border-2 hover:text-black hover:bg-disbtn">
            START A CAMPAIGN
          </button>
        </div>
      </div>
      <div className="px-[50px] py-[50px] space-y-8 group">
        <h1 className="mb-4 opacity-0 animate-[wiggle_2s_linear_infinite] text-6xl font-bold text-white w-[60%]  duration-100 translate-y-10 group-hover:">
          Litheli FrozenPack: The First Backpack Car Fridge
        </h1>
        <button className="p-3 rounded-lg border-disbtn border-2 text-black bg-disbtn text-sm font-josefin ">
          SEE CAMPAIGN
        </button>
        <div>
          <ul className="flex gap-8 overflow-y-auto no-scrollbar">
            {arr.map((value, index) => (
              <li key={index} className="">
                <div className="w-[300px] h-[150px] bg-red-500 border-disbtn border-2 rounded-lg">
                  <img
                    src="./images/display1.jpg"
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DisplayScreen;
