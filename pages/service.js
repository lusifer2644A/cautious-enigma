/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { motion } from "framer-motion";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Features from "../components/Features";
import Header from "./../components/Header";
// import Link from "next/link";
// Image
import KnowMore from "../components/button/KnowMore";
import { ContainedButton } from "../components/button/Mainbutton";
import { RoundedButton } from "../components/button/RoundedButton";
import Footer from "../components/Footer";
import Tick from "../components/icons/tick";
import { useRouter } from "next/router";
import Features1 from "../components/Features1";

export default function Home() {
  const router = useRouter();
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
      title: "Hassle free global selling starts here",
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

  return (
    <>
      <Head>
        <title>Goglocal</title>
        <meta name="description" content="Goglocal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-light dark:bg-dark overflow-x-hidden">
        {/* Header */}

        <Header />
        <div className="absolute top-0 left-0 white-rad-grad md:w-[3000px] md:h-[1200px] -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>

        <div className="page-bg bg-[#AC2EED29] z-[10] static z-[1]">
          <div className="page-container main ">
            {/* Hero Section */}
            <div className="pt-10 md:py-20 px-5">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center main-heading2 heading-color2 max-w-2xl mx-auto leading-tight"
              >
                {data.title}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center subtitle max-w-3xl pt-8 mx-auto leading-normal"
              >
                <span>
                  We start by proposing the best glocal strategy for your
                  products, setting up your global e-commerce business, opening
                  new sales channels , getting you tons of fresh orders,
                  fulfilling international deliveries while managing all trade
                  compliances and ensuring your payments and profits are
                  maximised; in short making sure your business reaches it’s
                  true global potential.
                </span>
                <br />
                <span className="font-bold mt-2"></span>{" "}
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="w-full h-full  mx-center justify-center items-center"
            >
              <Image
                className="md:h-80 mx-auto object-contain"
                src={`${data.imageBasePath}india.svg`}
                alt="hero1 image"
                loading="lazy"
                width="2000"
                height="2000"
                // objectFit="cover"
              />
            </motion.div>

            {/* Section 2 */}
            <div className=" px-5 md:px-10 main-light-background dark:bg-[#880ed438] pt-10 md:pt-40 ">
              {/* 1---desktop */}
              <div className="hidden md:flex grid-2x2 items-around md:-mt-32 px-2 md:px-4 gap-4 md:h-96">
                <div className="h-full md:w-2/4 max-w-md relative">
                  <Image
                    className=" p-8 md:p-8 h-full object-contain "
                    src={`${data.imageBasePath}${data.cta[0].image}`}
                    alt="hero image"
                    loading="lazy"
                    width="500"
                    height="500"
                    // objectFit="cover"
                  />
                  <div className="image_background_gradient" />
                </div>
                <div className="w-full md:w-2/4 flex flex-col items-start justify-start gap-6 max-w-xl">
                  <h1 className="text-center md:text-left heading-4 heading-color2">
                    {data.cta[0].title}
                  </h1>
                  <h2 className="text-center md:text-start md subtitle heading-color2 font-noto">
                    {data.cta[0].subtitle}
                  </h2>
                </div>
              </div>
              {/* 1--mobile */}
              <div className="flex md:hidden grid-2x2 items-around md:-mt-32 px-2 md:px-4 gap-4 md:h-96">
                <div className="w-full md:w-2/4 flex flex-col items-start justify-start gap-6 max-w-xl">
                  <h1 className="text-center md:text-left heading-4 heading-color2">
                    {data.cta[0].title}
                  </h1>
                  <div className="h-full md:w-2/4 max-w-md relative">
                    <Image
                      className=" p-8 md:p-8 h-full object-contain "
                      src={`${data.imageBasePath}${data.cta[0].image}`}
                      alt="hero image"
                      loading="lazy"
                      width="500"
                      height="500"
                      // objectFit="cover"
                    />
                    <div className="image_background_gradient" />
                  </div>
                  <h2 className="text-center md:text-start md subtitle heading-color2 font-noto">
                    {data.cta[0].subtitle}
                  </h2>
                </div>
              </div>

              {/* 2 -- desktop */}
              <div className="hidden md:flex flex-row gap-4 items-center justify-center gap-8 py-4 pt-20 ">
                <div className="w-full md:w-2/4 flex flex-col items-start justify-start gap-6 max-w-xl">
                  <h1 className="text-center md:text-left heading-4 heading-color2">
                    {data.cta[1].title}
                  </h1>
                  <h2 className="text-center md:text-left subtitle heading-color2 font-noto">
                    {data.cta[1].subtitle}
                  </h2>
                </div>
                <div className="  h-full md:w-2/4 max-w-md relative">
                  <Image
                    className="  p-8 md:p-8 h-full object-contain "
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
              {/* 2 -- mobile */}
              <div className="flex md:hidden flex-col gap-4 items-center justify-center gap-8 py-4 pt-20 ">
                <div className="w-full md:w-2/4 flex flex-col items-start justify-start gap-6 max-w-xl">
                  <h1 className="text-center md:text-left heading-4 heading-color2">
                    {data.cta[1].title}
                  </h1>
                  <div className="h-full md:w-2/4 max-w-md relative">
                    <Image
                      className="p-8 md:p-8 h-full object-contain "
                      src={`${data.imageBasePath}${data.cta[1].image}`}
                      alt="hero image"
                      loading="lazy"
                      width="700"
                      height="700"
                      objectFit="contain"
                    />
                    <div className="image_background_gradient" />
                  </div>
                  <h2 className="text-center md:text-left subtitle heading-color2 font-noto">
                    {data.cta[1].subtitle}
                  </h2>
                </div>
              </div>

              {/* 3 -- desktop */}
              <div className="hidden md:flex grid-2x2 items-around py-4 pt-20 gap-4 h-[30rem]">
                <div className=" h-full md:w-2/4 max-w-md relative">
                  <Image
                    className=" p-8 md:p-8 h-full object-contain "
                    src={`${data.imageBasePath}${data.cta[2].image}`}
                    alt="hero image"
                    loading="lazy"
                    width="500"
                    height="500"
                    // objectFit="cover"
                  />
                  <div className="image_background_gradient" />
                </div>
                <div className="w-full md:w-2/4 flex flex-col items-start justify-start gap-6 max-w-xl">
                  <h1 className="text-center md:text-left heading-4 heading-color2">
                    {data.cta[2].title}
                  </h1>
                  <h2 className="text-start md subtitle heading-color2 font-noto">
                    {data.cta[2].subtitle}
                  </h2>
                </div>
              </div>
              {/* 3 -- mobile */}
              <div className="flex md:hidden grid-2x2 items-around py-4 pt-20 gap-4">
                <div className="w-full md:w-2/4 flex flex-col items-start justify-start gap-6 max-w-xl">
                  <h1 className="text-center md:text-left heading-4 heading-color2">
                    {data.cta[2].title}
                  </h1>
                  <div className=" h-full md:w-2/4 max-w-md relative">
                    <Image
                      className=" p-8 md:p-8 h-full object-contain "
                      src={`${data.imageBasePath}${data.cta[2].image}`}
                      alt="hero image"
                      loading="lazy"
                      width="500"
                      height="500"
                      // objectFit="cover"
                    />
                    <div className="image_background_gradient" />
                  </div>
                  <h2 className="text-start md subtitle heading-color2 font-noto">
                    {data.cta[2].subtitle}
                  </h2>
                </div>
              </div>
            </div>

            <div className=" px-8 md:px-10  pt-10 md:pt-20 ">
              <div className="leading-[50px] md:leading-auto main-heading2 heading-color2 text-center mx-auto max-w-xl py-1 md:py-2">
                {data.features.title}
              </div>
              <div className="subtitle  headingColor text-center mx-auto max-w-3xl py-1 md:py-2">
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
                    } justify-center items-center mx-auto gap-4 md:gap-10 py-8  ${
                      index !== 0 ? "pt-20" : ""
                    } md:pt-0`}
                  >
                    <div className="w-full md:w-2/4 flex flex-col items-start justify-start gap-4 max-w-2xl">
                      <h2 className="heading-4 heading-color2">{item.title}</h2>
                      {item.points.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-row gap-4 items-center md:mt-3"
                        >
                          <div>
                            <Tick />
                          </div>
                          <div>
                            <h2 className="subtitle font-noto text-[#463c4b]">
                              {item}
                            </h2>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="relative w-60  max-w-md flex items-end md:items-center md:w-2/4 md:pt-10">
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

              <div className="flex justify-center pb-20">
                <button
                  className="btn-primary"
                  onClick={() => router.push("/connect/seller")}
                >
                  Get in touch
                </button>
              </div>
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
