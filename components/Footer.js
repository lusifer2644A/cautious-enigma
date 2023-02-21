import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollButton from "./button/ScrollButton";
import ArrowRight from "./icons/arrow-right";
import Link from "next/link";
import Airtable from "airtable";
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyaQg6ltysYqE1Ot",
});
var base = Airtable.base("appAaevy9PbSTpafU");

const LinkButton = ({ title, url }) => {
  return (
    <motion.div
      whileHover={{
        y: -2,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
    >
      <Link href={url}>
        <p className="text-[#A6A6A6] cursor-pointer body-main-text  py-2">
          {title}
        </p>
      </Link>
    </motion.div>
  );
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function ValidateEmail(input) {
    if (!input) {
      return alert("Please enter the email");
    }

    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
      return true;
    } else {
      alert("Please enter a valid email!");
      return false;
    }
  }

  const handleSubmit = async (e) => {
    if (!ValidateEmail(email)) {
      return;
    }

    setLoading(true);
    try {
      const records = await base("List").create([
        {
          fields: {
            email: email,
          },
        },
      ]);

      console.log("Air", records);
      alert(`Hey ${email}!\nThanks for subscribing`);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="">
      <div className="bg-[#1d1125] px-6 md:px-12 rounded-b-[2rem]">
        <ScrollButton />
        <footer className="pt-8 md:pt-20">
          <div className=" mx-auto ">
            <div className="sm:flex ">
              <div className="sm:mt-0 sm:w-full sm:px-8 flex flex-col lg:flex-row justify-center md:justify-around  gap-12 lg:gap-40 ">
                <div className="flex flex-col lg:w-1/4 items-center md:items-start">
                  <h2 className="heading-2 md:text-[1.7rem] text-accent-1 w-fit">
                    Get Started for FREE
                  </h2>
                  <span className="my-0 md:my-4 md:pt-8">
                    <div className="flex flex-col md:py-0 py-4">
                      <div className="relative">
                        <div
                          onClick={handleSubmit}
                          className="absolute left-[245px] pr-2 p-2 bg-accent-1 rounded-full flex items-center h-11/12 mx-auto my-2 cursor-pointer"
                        >
                          {loading ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                strokeWidth="2"
                                stroke="#1d1125"
                                strokeDasharray="50.26548245743669 50.26548245743669"
                                fill="none"
                                strokeLinecap="round"
                              >
                                <animateTransform
                                  attributeName="transform"
                                  type="rotate"
                                  repeatCount="indefinite"
                                  dur="1s"
                                  keyTimes="0;1"
                                  values="0 12 12;360 12 12"
                                ></animateTransform>
                              </circle>
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          )}
                        </div>
                        <input
                          id="id"
                          name={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          className="text-gray-200 focus:outline-none focus:border  bg-black dark:border-gray-700 font-normal w-72 h-10 flex items-center pl-6 py-6 rounded-full text-sm border-gray-200  border-2 "
                          placeholder="Enter your email here"
                          type="email"
                        />
                      </div>
                    </div>
                  </span>
                </div>
                <div className="flex flex-row items-start justify-center md:justify-start flex-wrap  lg:w-fit gap-x-12 md:gap-x-12 lg:gap-x-12 xl:gap-x-20 gap-y-10 ">
                  <div className="flex flex-col w-fit">
                    <LinkButton url="/about" title="About" />
                    <LinkButton url="/products" title="Products" />
                    <LinkButton url="/service" title="Solution" />
                    <LinkButton url="/news" title="News in us" />
                    <LinkButton url="/careers" title="Careers" />
                    <LinkButton url="/login" title="Sign in" />
                  </div>

                  <div className="hidden md:block flex flex-col w-fit">
                    <LinkButton url="/features/2" title="Glocal Store" />
                    <LinkButton url="/features/1" title="Global Strategy" />
                    <LinkButton
                      url="/features/4"
                      title="Seller Enabler Network"
                    />
                    <LinkButton
                      url="/features/3"
                      title="Marketplace Integration"
                    />
                  </div>

                  <div className="hidden md:block flex flex-col w-fit">
                    <LinkButton url="/features/5" title="Global Fulfilment" />
                    <LinkButton url="/features/7" title="Trade Compliance" />
                    <LinkButton
                      url="/features/8"
                      title="International Payments"
                    />
                    <LinkButton url="/features/9" title="B2B Exports" />
                  </div>
                  <div className=" md:hidden flex flex-col w-fit">
                    <LinkButton url="/features/2" title="Glocal Store" />
                    <LinkButton url="/features/1" title="Global Strategy" />
                    <LinkButton
                      url="/features/4"
                      title="Seller Enabler Network"
                    />
                    <LinkButton
                      url="/features/3"
                      title="Marketplace Integration"
                    />
                    <LinkButton url="/features/5" title="Global Fulfilment" />
                    <LinkButton url="/features/7" title="Trade Compliance" />
                    <LinkButton
                      url="/features/8"
                      title="International Payments"
                    />
                    <LinkButton url="/features/9" title="B2B Exports" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 mt-8 mx-auto px-4 md:px-2">
            <div className="mt-2 flex flex-col md:flex-row flex-wrap gap-5 md:gap-8 items-center sm:items-end justify-center md:justify-evenly h-fit  mb-10">
              <div>
                <p className="subtitle-2 text-white text-center sm:text-start">
                  contactus@goglocal.com{" "}
                </p>
                <p className="text-white text-sm md:text-base text-center w-fit  mt-2">
                  © 2022 goGlocal Pvt Ltd Copyrights and Rights Reserved
                </p>
              </div>
              <div className="w-fit flex flex-row items-center justify-start gap-1 md:gap-1 text-white text-xs md:text-base text-center">
                <div className="w-fit">Terms and Condtions</div>
                <div className=" ">
                  <svg
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="2.27729"
                      cy="2.08882"
                      r="1.71772"
                      fill="#A6A6A6"
                    />
                  </svg>
                </div>
                <div className="w-fit">Privacy Policy</div>
              </div>
              <div className="flex flex-row md:flex-col align-end gap-1 w-fit">
                <a
                  href="https://www.linkedin.com/company/goglocal/"
                  target="_blank"
                  rel="noreferrer"
                  className="subtitle-3 text-accent-1 pb-2  w-fit"
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.2987 30.7313H25.1128V22.6098C25.1128 20.6732 25.0782 18.1801 22.4156 18.1801C19.7146 18.1801 19.3013 20.2902 19.3013 22.4689V30.7308H14.1156V14.0298H19.0939V16.3121H19.1636C19.6618 15.4602 20.3818 14.7594 21.2468 14.2843C22.1118 13.8093 23.0895 13.5777 24.0757 13.6143C29.3318 13.6143 30.3009 17.0716 30.3009 21.5694L30.2987 30.7313ZM8.264 11.747C6.60191 11.7472 5.25428 10.4 5.254 8.73792C5.25373 7.07583 6.60082 5.72819 8.26291 5.72792C9.925 5.72751 11.2726 7.07473 11.2729 8.73682C11.2731 9.53499 10.9561 10.3005 10.3919 10.865C9.82758 11.4295 9.06217 11.7468 8.264 11.747ZM10.857 30.7315H5.66566V14.0298H10.8569L10.857 30.7315ZM32.884 0.911727H3.0598C1.65023 0.895868 0.494277 2.02503 0.477051 3.4346V33.3833C0.49373 34.7935 1.64955 35.9238 3.05967 35.909H32.884C34.2972 35.9265 35.4575 34.7962 35.4771 33.3833V3.43227C35.457 2.01997 34.2965 0.890946 32.884 0.909403"
                      fill="#FCDEA2"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/goglocal/"
                  target="_blank"
                  rel="noreferrer"
                  className="subtitle-3 text-accent-1"
                >
                  Stay Connected
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
