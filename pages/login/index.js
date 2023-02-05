import React from "react";
import Header from "./../../components/Header";
import Image from "next/future/image";
import Footer from "../../components/Footer";

export default function Index() {
  return (
    <div>
      <div className="main">
        <div className=" ">
          <Header />
        </div>
        <div className="container pt-40">
          <div className="px-0 sm:px-6 lg:px-8 xl:px-10 mx-auto ">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 pb-40">
              <div className="w-full md:w-6/12 flex flex-col gap-4 ">
                <div className="bg-[#F3F6FF] dark:bg-transparent  h-full w-full py-8 md:px-8 rounded-xl">
                  <div className="bg-white py-16 px-12  dark:border-gradient2 rounded-xl shadow-lg">
                    <h1 className="heading headingColor2 text-dark-1 text-left pt-2">
                      Sign in
                    </h1>
                    <h1 className="sub-heading-2 headingColor text-left font-bold pt-16">
                      Welcome onboard with us!
                    </h1>
                    <div className="flex flex-col gap-4  justify-center items-center mx-auto w-full  pt-8">
                      <div className="w-full">
                        <h1 className="body-1 headingColor text-left ">
                          Email
                        </h1>
                        <input
                          className="bg-[#F0F0F0] border-2 border-[#D8D8D8] text-[#848282] dark:bg-[#7522B700] dark:text-[#ffffff] dark:border-[#4D1C6B] py-3  px-4 md:px-8 w-full rounded-lg focus:outline-none outline-none text-white"
                          placeholder="Enter your Email"
                        />
                      </div>
                      <div className="w-full">
                        <h1 className="body-1 headingColor text-left ">
                          Password
                        </h1>
                        <input
                          className="bg-[#F0F0F0] border-2 border-[#D8D8D8] text-[#848282]  dark:bg-[#7522B700] dark:text-[#ffffff] dark:border-[#4D1C6B] py-3 px-4 md:px-8 w-full rounded-lg focus:outline-none outline-none text-white"
                          placeholder="Enter your Password"
                          type="password"
                        />{" "}
                      </div>
                      <button className="accent-grad w-full py-3 mt-8 md:px-8 rounded-xl focus:outline-none outline-none text-black">
                        Sign In
                      </button>
                      <h1 className="body-3 headingColor text-left pt-2">
                        Not registered yet?{" "}
                        <span className="text-[#4649FF]">
                          Create an Account
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full md:w-6/12  flex items-center justify-center">
                <div>
                  <Image
                    className="h-full w-full mx-auto p-8"
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
      <Footer />
    </div>
  );
}
