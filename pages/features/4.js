/* eslint-disable react/jsx-key */
import React from "react";
import Header from "./../../components/Header";
import Image from "next/future/image";
import ThemeToggle from "../../components/ThemeToggle";
import Link from "next/link";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const data = {
    imageBasePath: "/asset/feature/features/",
    iconBasePath: "/asset/feature/features/icons/",
    subHeading: "Seller Enabler Network    ",
    image: "04-00.png",
    title: "Request. Receive. Relax.",
    subTitle: "Seller Enabler Network",
    heroQues: "Want to catalyse your business with new customer acquisition?",
    description:
      "Choose from a range of service packages and let an eCommerce expert cater to all your cataloging, marketing, web store, and all your pre selling needs",
    serviceTitle: "Get access to a curated set of experts with the",
    serviceTitleBold: "goGlocal Seller Enabler Network",
    link: "/connect/seller",
    list: [
      {
        id: 1,
        image: "04-01.svg",
        title: "One Stop Shop",
        description:
          "Browse through services that can propel your ecommerce business",
      },
      {
        id: 2,
        image: "04-02.svg",
        title: "Verified Experts",
        description:
          "Local country experts to customise offerings as per target regions",
      },
      {
        id: 3,
        image: "04-03.svg",
        title: "Systematic Delivery",
        description:
          "Seamless access, connect and transaction in the most digitised way",
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
                onClick={() => router.push(data.link)}
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
