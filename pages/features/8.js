/* eslint-disable react/jsx-key */
import React from "react";
import Header from "./../../components/Header";
import Image from "next/future/image";
import ThemeToggle from "../../components/ThemeToggle";
import Link from "next/link";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const data = {
    imageBasePath: "/asset/feature/features/",
    iconBasePath: "/asset/feature/features/icons/",
    subTitle: "Global Payments",
    image: "08-00.png",
    title: "Sell. Transfer. Save.",
    heroQues:
      "Wish to get paid in multiple currencies at best rates in your local bank account ? ",
    description:
      "Fastrack you business with our Global Payments offerings to support all your financing and payments needs to grow globally.        ",
    serviceTitle: "Take care of all your international  transactions with",
    serviceTitleBold: "goGLOCAL Payments ",
    link: "/connect/seller",
    list: [
      {
        id: 1,
        image: "08-01.svg",
        title: "Lowest Rates        ",
        description:
          "Making or receiving  international funds, and managing your digital business has never been easier with lowest commission on international payments ",
      },
      {
        id: 2,
        image: "08-02.svg",
        title: "Minimise Risk",
        description:
          "Protect your business from unpredictable loses  at minimal costs with international goods transit  insurance          ",
      },
      {
        id: 3,
        image: "08-03.svg",
        title: "Simlified Finance        ",
        description:
          "Solve all your working capital problems by leveraging our international export  financing infrastructure          ",
      },
    ],
  };

  const BigFeatureButton = ({ text, link }) => {
    return (
      <Link href={data.link}>
        <div className="px-2 w-40 py-2 accent-grad  rounded-lg cursor-pointer text-center">
          <p className="body-3 text-black">{text}</p>
        </div>
      </Link>
    );
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
