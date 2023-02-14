import { useRouter } from "next/router";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";

const items = [
  {
    title: "Enabling Glocal e-commerce",
    subtitle:
      "Set-up your glocal e-commerce store in just three clicks and know what, where, how  to sell around the world",
    points: [
      {
        icon: "globe--v1.png",
        text: "Develop digital brands with impactful product catalogues",
      },
      {
        icon: "globe--v1.png",
        text: "Scale globally with effective market strategies",
      },
      {
        icon: "globe--v1.png",
        text: "Sell more with platforms compliant catalogue management",
      },
    ],
    link: "/features/1",
    image: "feature-slide-1.png",
  },
  {
    title: "Fast-Tracked Global Expansion",
    subtitle:
      "Extremely efficient e-commerce export strategies for international markets entry",
    points: [
      {
        icon: "globe--v1.png",
        text: "Explore global market potential and scale business exponentially ",
      },
      {
        icon: "globe--v1.png",
        text: "Sell more with effective product-market customer strategy worldwide",
      },
      {
        icon: "globe--v1.png",
        text: "Effective and efficient digital marketing strategies to give businesses the required digital push",
      },
    ],
    link: "/features/2",
    image: "feature-slide-2.png",
  },
  {
    title: "Seller Enabler Network",
    subtitle:
      "Ready made solutions for any pre selling needs to manage and maximise your global selling",
    points: [
      {
        icon: "globe--v1.png",
        text: "One stop shop to help you with everything you need to launch, manage and grow your e-commerce",
      },
      {
        icon: "globe--v1.png",
        text: "Customised and automated solutions from a curated set of experts",
      },
      {
        icon: "globe--v1.png",
        text: "Efficient and economic solutions to catapult your e-commerce business",
      },
    ],
    link: "/features/3",
    image: "feature-slide-3.png",
  },
  {
    title: "Access To The World",
    subtitle:
      "Integrate your business with local and international marketplaces and grow exponentially",
    points: [
      {
        icon: "globe--v1.png",
        text: "Get connected to all major marketplaces worldwide through a single link",
      },
      {
        icon: "globe--v1.png",
        text: "Omni-channel retail plug-in to online and offline stores and seamless account management",
      },
      {
        icon: "globe--v1.png",
        text: "Dynamic listings powered with customised language, products, pricing",
      },
    ],
    link: "/features/4",
    image: "feature-slide-4.png",
  },
  {
    title: "Glocal e-commerce Fulfilment",
    subtitle:
      "Seamless national and international omnichannel order fulfillment to super-charge businesses",
    points: [
      {
        icon: "globe--v1.png",
        text: "End to end international delivery run, warehousing, Quality Checks and Export complaint packaging",
      },
      {
        icon: "globe--v1.png",
        text: "Efficient and effective international dropshipping",
      },
      {
        icon: "globe--v1.png",
        text: "Worry free streamlined international returns procedure ",
      },
    ],
    link: "/features/5",
    image: "feature-slide-5.png",
  },
  {
    title: "Cross-border Trade Compliance",
    subtitle:
      "Stress-free international companies adherence to mitigate any risks and losses",
    points: [
      {
        icon: "globe--v1.png",
        text: "Convenient documentation and records maintenance",
      },
      {
        icon: "globe--v1.png",
        text: "Incorporation of VAT, duties, certifications and restrictions",
      },
      {
        icon: "globe--v1.png",
        text: "Single point of contact for all international customs, licenses, permits and IOR service",
      },
    ],
    link: "/features/6",
    image: "feature-slide-6.png",
  },
  {
    title: "International Payments",
    subtitle:
      "Unlock opportunities with convenient international payments and managing your digital business funds",
    points: [
      {
        icon: "globe--v1.png",
        text: "Easy access to collateral-free working capital with financing",
      },
      {
        icon: "globe--v1.png",
        text: "Get paid easily in international currencies across countries",
      },
      {
        icon: "globe--v1.png",
        text: "Mitigate losses with international transit insurance",
      },
    ],
    link: "/features/7",
    image: "feature-slide-7.png",
  },
  {
    title: "International B2B Sourcing",
    subtitle: "Grow more by bulk international selling with buyer guarantee",
    points: [
      {
        icon: "globe--v1.png",
        text: "Smart procurement with quality checks, merchandising and logistics",
      },
      {
        icon: "globe--v1.png",
        text: "Strategic sourcing with curated network of vendors across geographies, sectors and specialities",
      },
      {
        icon: "globe--v1.png",
        text: "Powerful gateway to the future of optimised sourcing",
      },
    ],
    link: "/features/8",
    image: "feature-slide-8.png",
  },
];

const Features1 = () => {
  const router = useRouter();
  const [curr_slide, setCurrSlide] = useState(0);

  const onNext = () => {
    if (curr_slide < items.length - 1)
      setCurrSlide((old) => {
        return old + 1;
      });
  };

  const onPrev = () => {
    if (curr_slide > 0)
      setCurrSlide((old) => {
        return old - 1;
      });
  };

  return (
    <div className="w-full min-h-[500px] main-light-background px-6 py-4 md:px-32 md:py-10 rounded-[0rem]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.8fr] items-center max-h-full gap-5 h-[480px] md:h-[450px]">
        <div className="top_text flex flex-col gap-2">
          <h3 className="heading-1 heading-color2">
            {items[curr_slide].title}
          </h3>
          <h3 className="subtitle font-noto heading-color2 max-w-[500px]">
            {items[curr_slide].subtitle}
          </h3>

          <div className="points flex flex-col gap-5 mt-10">
            {items[curr_slide].points.map((it, idx) => {
              return (
                <div className="flex flex-row gap-5 items-center" key={idx}>
                  <div className="w-10 h-10 flex justify-center items-center bg-[#ffffff] rounded-lg">
                    <img
                      className="w-4/5 h-4/5 object-contain"
                      src={`https://img.icons8.com/ios/50/22172A/${it.icon}`}
                      alt=""
                    />
                  </div>
                  <div className="caption-text heading-color2 w-full">
                    {it.text}
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="btn-primary w-fit mt-5"
            onClick={() => router.push(items[curr_slide].link)}
          >
            Know More
          </button>
        </div>
        <div className="h-[350px] w-full hidden md:block">
          <img
            className="w-full h-full object-contain"
            src={`/asset/feature-slide/${items[curr_slide].image}`}
            alt="hero image"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bottom pt-16 flex flex-row justify-end md:justify-between items-center">
        <div className="flex-row gap-5 md:gap-6 hidden md:flex">
          {items.map((it, index) => {
            return (
              <span
                className={` heading-color2 cursor-pointer w-8 h-8 rounded-full flex justify-center items-center ${
                  curr_slide === index ? "subtitle" : "small-text text-gray-500"
                }`}
                onClick={() => {
                  setCurrSlide(index);
                }}
                key={index}
              >
                {index + 1}
              </span>
            );
          })}
        </div>
        <div className="flex flex-row gap-5 md:pr-32">
          <button
            aria-label="prev-button"
            className={`rounded-full w-10 h-10 flex justify-center items-center ${
              curr_slide === 0 ? "bg-[#21112B33]" : "bg-[#1d1125]"
            } shadow-md`}
            onClick={onPrev}
          >
            <img
              src={`https://img.icons8.com/material-rounded/50/${
                curr_slide === 0 ? "001E3C" : "ffffff"
              }/chevron-left.png`}
              className="w-1/2 h-1/2 object-contain"
            />
          </button>
          <button
            aria-label="next-button"
            className={`rounded-full w-10 h-10 flex justify-center items-center ${
              curr_slide === items.length - 1
                ? "bg-[#21112B33]"
                : "bg-[#1d1125]"
            } shadow-md`}
            onClick={onNext}
          >
            <img
              src={`https://img.icons8.com/material-rounded/50/${
                curr_slide === items.length - 1 ? "001E3C" : "ffffff"
              }/chevron-right.png`}
              className="w-1/2 h-1/2 object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features1;
