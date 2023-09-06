"use client";
import React, { useState } from "react";
import Bubbles from "../../public/images/Bubbles.png";
import Image from "next/image";

export function Price() {
  const [selectedOption, setSelectedOption] = useState("monthly");
  const ANNUAL_PRO_PRICE = "€120";
  const MONTHLY_PRO_PRICE = "€10";
  const ANNUAL_PREMIUM_PRICE = "€20";
  const MONTHLY_PREMIUM_PRICE = "€240";
  const toggleOption = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
        <div className="lg:flex items-center justify-between">
          <div className=" lg:w-1/2 w-full">
            <p className="text-base leading-4 text-gray-600">
              Choose your plan
            </p>
            <h1
              role="heading"
              className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800"
            >
              Our pricing plan
            </h1>
            <p
              role="contentinfo"
              className="text-base leading-5 mt-5 text-gray-600"
            >
              We’re working on a suit of tools to make managing complex systems
              easier, for everyone for free. we can’t wait to hear what you
              think
            </p>
            <div className="w-56">
              <div className="bg-gray-100 shadow rounded-full flex items-center mt-10">
                <button
                  className={`${
                    selectedOption === "monthly"
                      ? "bg-indigo-700 text-white"
                      : "bg-gray-100 text-gray-600"
                  } focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none rounded-full py-4 px-6 mr-1`}
                  onClick={() => toggleOption("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={`${
                    selectedOption === "annually"
                      ? "bg-indigo-700 text-white"
                      : "bg-gray-100 text-gray-600"
                  } focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none rounded-full py-4 px-6`}
                  onClick={() => toggleOption("annually")}
                >
                  Annually
                </button>
              </div>
            </div>
          </div>
          <div
            className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
            role="list"
          >
            <Image
              src={Bubbles}
              width={500}
              height={500}
              alt="bubbles"
              className="absolute w-full -ml-12 mt-24"
            />

            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30"
            >
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  Hobby
                </h2>
                <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800">
                  FREE
                </p>
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                Ability to try our serivces for free, create 1 tailored cv with
                no charged on sign up
              </p>
            </div>
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
            >
              <div className="w-2.5  h-auto bg-indigo-700 rounded-tl-md rounded-bl-md" />
              <div className="w-full p-8">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                    The Job Hunter
                  </h2>
                  <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                    {selectedOption === "monthly" ? (
                      <>
                        {" "}
                        €10<span className="font-normal text-base">/mo</span>
                      </>
                    ) : (
                      <>
                        €120<span className="font-normal text-base">/yr</span>
                      </>
                    )}
                  </p>
                </div>
                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                  Ability to created up to 20 tailored cvs a month
                </p>
              </div>
            </div>
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7"
            >
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  The Professional
                </h2>
                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                  <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                    {selectedOption === "monthly" ? (
                      <>
                        {" "}
                        €20<span className="font-normal text-base">/mo</span>
                      </>
                    ) : (
                      <>
                        €240<span className="font-normal text-base">/yr</span>
                      </>
                    )}
                  </p>
                </p>
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                Ability to create unlimited cvs a month
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
