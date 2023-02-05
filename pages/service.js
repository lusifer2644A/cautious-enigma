import { motion } from "framer-motion";
import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Tick from "../components/icons/tick";
import Header from "./../components/Header";

export default function service() {
  const data = {
    imageBasePath: "/asset/service/",
    title: "Sit back and relax while we take care of everything ",

    cta: [
      {
        image: "001.png",
        title:
          "Have a great product but low sales? Confused how to start selling online?   ",
        subtitle:
          "For new sellers to kickstart their online business Setup global e-commerce stores. After that, Managed by goGLOCAL will take care of all your requirements and kickstart your glocal e-commerce business.   ",
      },
      {
        image: "002.png",
        title:
          "Have been selling online in India but don’t know how to sell internationally?  ",
        subtitle:
          "When you choose Managed by goGlocal, you enable convenient, cost-effective and fast delivery to your customers with goGlocal’s world-class international logistics support.",
      },
      {
        image: "0031.png",
        title:
          "Have been selling internationally online but want someone to streamline and  optimise your operations ?",
        subtitle:
          "Enabled by goGLOCAL lets you choose from one of our specialised services, tailor made to suit your requirements and skyrocket your brand to new heights.",
      },
    ],
    features: {
      title: "Hassle free exporting starts here",
      subtitle:
        "We offer the best, most comprehensive solutions for all your global selling needs with AI enabled, technologically advanced solutions, all in one place.",
      list: [
        {
          title:
            "Get onboarded and unlock your global business potential with Glocal Store and Strategy Engine   ",
          points: [
            "International E-commerce cataloging",
            "Glocal business and product strategy",
            "Marketplace Integrations",
          ],
          image: "004.png",
        },
        {
          title:
            "Sell internationally and fulfill your orders with optimised logistics networks with goGlocal Fulfilment Machine",
          points: [
            "End-to-end international storage, packing, delivery",
            "Fast, reliable and budget friendly",
            "Seamless international fulfilment and returns",
          ],
          image: "005.png",
        },
        {
          title:
            "Mitigate risks and maximize profits with goGlocal International  Payments and Trade Compliance Solutions",
          points: [
            "Cost-effective financial solutions",
            "Accurate and effective trade expert inputs",
            "Maximum profits and exponential growth",
          ],
          image: "006.png",
        },
      ],
    },
  };

  const BigFeatureButton = ({ text, link }) => {
    return (
      <motion.div
        whileHover={{
          y: -5,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        }}
      >
        <Link href={link}>
          <div className="px-2 w-36 py-2 accent-grad  rounded-lg cursor-pointer text-center">
            <p className="body-3 text-black">{text}</p>
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <div>
      <div className="main overflow-x-hidden">
        <div className=" ">
          <Header />
        </div>
        <div className="container pt-32 md:pt-60">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center heading headingColor2 max-w-2xl mx-auto leading-tight"
          >
            {data.title}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center sub-heading headingColor max-w-[930px] pt-8 mx-auto leading-normal"
          >
            <span>
              We start by proposing the best glocal strategy for your products,
              setting up your global e-commerce business, opening new sales
              channels , getting you tons of fresh orders, fulfilling
              international deliveries while managing all trade compliances and
              ensuring your payments and profits are maximised;{" "}
            </span>
            <br />
            <span className="font-bold mt-2">
              in short making sure your business reaches it’s true global
              potential.
            </span>{" "}
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="w-screen h-full  mx-center justify-center items-center"
        >
          <Image
            className="h-96 mx-auto object-contain"
            src={`${data.imageBasePath}india.svg`}
            alt="hero1 image"
            loading="lazy"
            width="2000"
            height="2000"
            // objectFit="cover"
          />
        </motion.div>
        {/* Cta */}
        <div className=" px-5 md:px-10 dark:bg-gradient-to-b from-transparent via-[#7c007747] to-[#7c007747] pt-10 md:pt-40 ">
          <div className="grid-2x2 -mt-32 px-4 gap-4 md:gap-32 lg:gap-40 xl:gap-56">
            <div className=" h-full md:w-2/4 max-w-md relative">
              <Image
                className=" p-8 md:p-8 "
                src={`${data.imageBasePath}${data.cta[0].image}`}
                alt="hero image"
                loading="lazy"
                width="500"
                height="500"
                // objectFit="cover"
              />
              <div className="image_background_gradient" />
            </div>
            <div className="w-full md:w-2/4 flex flex-col items-start justify-start gap-6 max-w-2xl">
              <h1 className="text-center md:text-left heading-2 text-dark-1 dark:text-light-1">
                {data.cta[0].title}
              </h1>
              <h2 className="text-start md body-1 text-dark-2 dark:text-light-2">
                {data.cta[0].subtitle}
              </h2>
            </div>
          </div>
          <div className="flex flex-col-reverse gap-4 md:gap-32 lg:gap-40 xl:gap-56 md:flex-row justify-center items-center mx-auto gap-8 py-4 pt-20 ">
            <div className="w-full md:w-2/4 flex flex-col items-start justify-start gap-6 max-w-2xl">
              <h1 className="text-center md:text-left heading-2 text-dark-1 dark:text-light-1">
                {data.cta[1].title}
              </h1>
              <h2 className="text-center md:text-left body-1 text-dark-2 dark:text-light-2">
                {data.cta[1].subtitle}
              </h2>
            </div>
            <div className="  h-full md:w-2/4  max-w-md relative">
              <Image
                className=" w-full h-full  p-8 md:p-8"
                src={`${data.imageBasePath}${data.cta[1].image}`}
                alt="hero image"
                loading="lazy"
                width="700"
                height="700"
                objectFit="contain"
              />
              <div className="image_background_gradient" />
            </div>
          </div>
          <div className="grid-2x2 py-4 gap-4 md:gap-32 lg:gap-40 xl:gap-56 pt-20 ">
            <div className=" w-full h-full md:w-2/4  max-w-md relative">
              <Image
                className=" w-full h-full p-8 md:p-8"
                src={`${data.imageBasePath}${data.cta[2].image}`}
                alt="hero image"
                loading="lazy"
                width="500"
                height="500"
                objectFit="contain"
              />
              <div className="image_background_gradient" />
            </div>
            <div className="w-full md:w-2/4 flex flex-col items-start justify-start gap-6 max-w-2xl">
              <h1 className="text-center md:text-left heading-2 text-dark-1 dark:text-light-1">
                {data.cta[2].title}
              </h1>
              <h2 className="text-center md:text-left body-1 text-dark-2 dark:text-light-2">
                {data.cta[2].subtitle}
              </h2>
            </div>
          </div>
        </div>

        <div className=" px-8 md:px-10 dark:bg-gradient-to-b from-[#7c007747] to-[#7c007747] pt-16 md:pt-40 ">
          <div className="heading headingColor2 text-center pt-4">
            {data.features.title}
          </div>
          <div className="subtitle  headingColor text-center mx-auto max-w-5xl py-1 md:py-2">
            {data.features.subtitle}
          </div>
          <div className="px-2 pt-0 md:px-8 py-8">
            {data.features.list.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  item.imageRight
                    ? "flex-col-reverse md:flex-row  "
                    : "flex-col-reverse md:flex-row-reverse"
                } justify-center items-center mx-auto gap-4 md:gap-32 lg:gap-40 xl:gap-56 py-8 ${
                  index !== 0 ? "pt-20" : ""
                } md:pt-0`}
              >
                <div className="w-full md:w-2/4 flex flex-col items-start justify-start gap-4 max-w-2xl">
                  <h2 className="sub-heading-2 text-dark-1 dark:text-light-2">
                    {item.title}
                  </h2>
                  {item.points.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row gap-4 items-center md:mt-3"
                    >
                      <div>
                        <Tick />
                      </div>
                      <div>
                        <h2 className="body-1 text-dark-2 dark:text-light-2 ">
                          {item}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative w-80  max-w-md flex items-end md:items-center md:w-2/4 md:pt-10">
                  <Image
                    className="w-full h-full md:p-12"
                    src={`${data.imageBasePath}${item.image}`}
                    alt="hero image"
                    width="500"
                    loading="lazy"
                    height="500"
                    // objectFit="cover"
                  />
                  <div className="image_background_gradient" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" px-5 md:px-10 dark:bg-gradient-to-b from-[#7c007747] to-[#7c007747] md:pt-10 py-10 pb-30">
          <div className="flex items-center justify-center mx-auto pt-4">
            <BigFeatureButton text="Get in touch" link="/connect/seller" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
