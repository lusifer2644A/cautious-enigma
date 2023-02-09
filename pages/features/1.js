/* eslint-disable react/jsx-key */
import React from "react";
import Header from "./../../components/Header";
import Image from "next/future/image";
import ThemeToggle from "../../components/ThemeToggle";
import Link from "next/link";
import Footer from "../../components/Footer";
export default function index() {
  const data = {
    imageBasePath: "/asset/feature/features/",
    iconBasePath: "/asset/feature/features/icons/",
    subHeading: "Global Expansion Strategy ",
    image: "01_00.png",
    title: "Plan. Launch. Scale.",
    subTitle: "Global Expansion Strategy ",
    heroQues: "Are you ready for supercharge your e-commerce business?",
    description:
      "Our AI powered Strategy Engine gauges your true business potential and readiness to expand glocally. We help you become e-commerce savvy and grow exponentially.",
    serviceTitle: "e-commerce acceleration with",
    serviceTitleBold: "goGLOCAL Strategy Engine ",
    link: "/connect/seller",
    list: [
      {
        id: 1,
        image: "01_01.svg",
        title: "HEALTH CHECK",
        description:
          "Candid assessment of your business’s  capabilities, current status, real competitive advantages",
      },
      {
        id: 2,
        image: "01_02.svg",
        title: "TREND ANALYTICS",
        description:
          "Rich insights of the international market, product trends and  your product potential",
      },
      {
        id: 3,
        image: "01_03.svg",
        title: "EXECUTION STRATEGY",
        description:
          "Optimal and operationalised ecommerce strategy, ready to execute to get you immediate results",
      },
    ],
  };

  return (
    <>
      <main className="bg-light dark:bg-dark overflow-x-hidden">
        {/* Header */}

        <Header />
        <div className="absolute top-0 left-0 white-rad-grad md:w-[3000px] md:h-[1200px] -translate-x-1/2 -translate-y-1/2 z-[1]"></div>

        <div className="page-bg bg-[#AC2EED29] z-[10] static">
          <div className="page-container main ">
            {/* Hero Section */}
            <div className="flex flex-col gap-[20px] items-center justify-center px-5 py-10 pt-32">
              <div className="main-heading heading-color2 text-justify md:text-center mx-auto  ">
                {data.title}
              </div>
              <div>
                <div className="subtitle leading-relax text-center max-w-5xl">
                  {data.subTitle}
                </div>
              </div>
            </div>

            <div className="flex justify-center py-6">
              <div className="flex flex-row flex-wrap w-full gap-16 items-center mt-10 w-fit">
                <div className="flex flex-col gap-5">
                  <div className="heading-2 heading-color2  max-w-xl">
                    {data.heroQues}
                  </div>
                  <div className="subtitle max-w-lg font-noto">
                    {data.description}
                  </div>
                </div>
                <div className="relative flex items-center justify-center ">
                  <Image
                    className="w-60 md:w-96 h-full z-10"
                    src={`${data.imageBasePath}${data.image}`}
                    alt="hero image"
                    loading="lazy"
                    width="200"
                    height="400"
                    // objectFit="cover"
                  />
                  <div className="image_background_gradient2 z-9"></div>
                </div>
              </div>
            </div>

            <div>
              <div className="body-intro-text text-[#463C4B] text-justify md:text-center mx-auto mt-20">
                {data.serviceTitle}
              </div>{" "}
              <div className="heading-3 heading-color2 text-justify md:text-center mx-auto  ">
                {data.serviceTitleBold}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row gap-16 pt-20 px-4 items-start">
                {data.list.map((item, index) => (
                  <div
                    className="flex flex-col items-center gap-4 px-4"
                    key={index}
                  >
                    <div className="w-24 h-24">
                      <Image
                        className="h-full w-full object-contain "
                        src={`${data.iconBasePath}${item.image}`}
                        alt="hero image"
                        loading="lazy"
                        width="1000"
                        height="1000"
                        // objectFit="cover"
                      />
                    </div>
                    <div className="heading-4 heading-color2 font-semibold uppercase">
                      {item.title}
                    </div>
                    <div className="subtitle max-w-xs text-center">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="btn-primary mt-10 mb-20"
                onClick={() => router.push(link)}
              >
                Get in touch
              </button>
            </div>

            {/* Footers */}
            <div className="pt-0">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
