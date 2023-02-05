import React from "react";
import Header from "./../../components/Header";
import Image from "next/future/image";

export default function Index() {
  return (
    <div>
      <div className="main">
        <div className=" ">
          <Header />
        </div>
        <div className="container pt-40">
          <div className="px-4 sm:px-6 lg:px-8 xl:px-10 mx-auto ">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 pb-40">
              <div className="w-full md:w-4/12 flex flex-col gap-4">
                <h1 className="sub-heading headingColor text-left ">Login</h1>
                <h1 className="body-1 headingColor text-left">
                  Enter the realm of global experience
                </h1>
                <div className="flex flex-col gap-4 justify-center items-center mx-auto w-full  ">
                  <input
                    className="bg-[#53485A]  py-3 px-4 md:px-8 w-full rounded-xl focus:outline-none outline-none text-white"
                    placeholder="debbie.baker@example.com"
                  />
                  <input
                    className="bg-[#53485A]  py-3 px-4 md:px-8 w-full rounded-xl focus:outline-none outline-none text-white"
                    placeholder="password"
                    type="password"
                  />{" "}
                  <button className="accent-grad w-full py-3 px-4 md:px-8 rounded-xl focus:outline-none outline-none text-black">
                    Login
                  </button>
                </div>
              </div>
              <div className="relative w-full md:w-6/12  flex items-center justify-center">
                <div>
                  <Image
                    className="h-full w-full mx-auto p-20"
                    src={`/asset/auth/login.png`}
                    alt="hero image"
                    width="1000"
                    loading="lazy"
                    height="1000"
                    // objectFit="cover"
                  />
                  <div className="hidden md:block main-grad absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-80 w-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
