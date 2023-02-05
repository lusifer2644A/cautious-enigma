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
    subHeading: "Glocal Store ",
    image: "02-00.png",
    title: "Switch. Localise. Attract.",
    subTitle:
      "Looking to turbocharge your existing online stores for new market entry? ",
    description:
      "Our goGlocal Store simplifies your global expansion journey by modifying your existing online stores and listings in accordance to the foreign country’s customer need.       ",
    serviceTitle: "Catalysed new country entry with",
    serviceTitleBold: "goGlocal Store",
    link: "/connect/seller",
    list: [
      {
        id: 1,
        image: "02-01.svg",
        title: "LOCALISED BROWSING",
        description:
          "Tailor your brand offerings compatible with the local requirements with highly reliable translations          ",
      },
      {
        id: 2,
        image: "02-02.svg",
        title: "EASY TO MANAGE",
        description:
          "Effortlessly switch and manage all your global e-stores on one dashboard           ",
      },
      {
        id: 3,
        image: "02-03.svg",
        title: "AUTOMATED WORKFLOWS",
        description:
          "Efficient operations with products, orders, deliveries and payment management in few clicks  ",
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
    <div className="main">
      <div className=" ">
        <Header />
      </div>
      <div className="container pt-60 md:px-8">
        <h2 className="heading headingColor2 text-center">{data.title}</h2>
        <h1 className="subtitle headingColor text-center">{data.subHeading}</h1>
        <div className="grid-2x2">
          <div className="md:w-6/12 flex flex-col gap-4">
            <h1 className="sub-heading-2 headingColor-2 text-left">
              {data.subTitle}
            </h1>
            <h1 className="body-2 headingColor text-justify">
              {data.description}
            </h1>
          </div>
          <div className="md:w-6/12 relative">
            <Image
              className="h-full w-full mx-auto p-8 "
              src={`${data.imageBasePath}${data.image}`}
              alt="hero image"
              loading="lazy"
              width="1000"
              height="1000"
              // objectFit="cover"
            />
            <div className="m-12 main-grad absolute top-8 right-8 h-2/4 w-2/4 " />
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          <h1 className="heading-2 headingColor text-center md:leading-relaxed mx-auto">
            <span className="font-normal">{data.serviceTitle}</span> <br />
            <span className="font-bold">{data.serviceTitleBold}</span>
          </h1>
        </div>
        <div className="grid-3x3 gap-20 pt-20 px-4 items-start">
          {data.list.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col items-center gap-4 px-4">
                <div className="">
                  <Image
                    className="h-full w-full mx-auto object-contain "
                    src={`${data.iconBasePath}${item.image}`}
                    alt="hero image"
                    loading="lazy"
                    width="1000"
                    height="1000"
                    // objectFit="cover"
                  />
                </div>
                <div className="sub-heading-2 sub-heading-3 headingColor uppercase">
                  {item.title}
                </div>
                <div className="body-3 headingColor text-justify">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container pb-20">
        <div className="flex  items-center justify-center ">
          <BigFeatureButton text="Get in touch" link={data.link} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
