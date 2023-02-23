import Image from "next/future/image";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Index() {
  const router = useRouter();
  const data = {
    title: " Glocal Check-in  & Check-out",
    subTitle: "Making it super-easy to sell",
    imageBasePath: "/asset/products/",
    cta: " Our break through global check-in check-out solution equips your web stores to establish local presence across multiple countries seamlessly by optimising the international customer’s check-in and check-out experience",
    features: [
      {
        name: "Localization",
        img: "p2_002.svg",
        fields: [
          {
            title: "Local Content, Currency & Assets",
            link: null,
          },
          {
            title: "Local Payment Methods",
            link: null,
          },
        ],
      },
      {
        name: "Local Language Management",
        img: "p2_003.svg",
        fields: [
          {
            title: "Local Language Customer Support",
            link: null,
          },
        ],
      },
      {
        name: " Transparent Charges",
        img: "p2_004.svg",
        fields: [
          {
            title: "Accurate Landed Cost With Rariff, Duty & Shipping",
            link: null,
          },
        ],
      },
      {
        name: "Superior Customer Experience",
        img: "p2_005.svg",
        fields: [
          {
            title: "Time And Cost Delivery Options",
            link: null,
          },
          {
            title: "Last Mile Tracking",
            link: null,
          },
        ],
      },
      {
        name: " Increased conversions",
        img: "p2_006.svg",
        fields: [
          {
            title: " Tools To Monitor & Manage Performance From Dashboard",
            link: null,
          },
        ],
      },
    ],
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
        {/* <div className="absolute top-0 left-0 white-rad-grad md:w-[3000px] md:h-[1200px] -translate-x-1/2 -translate-y-1/2 z-[1]"></div> */}

        <div className="page-bg bg-[#AC2EED29] z-[10] static">
          <div className="page-container main ">
            {/* Hero Section */}
            <div className="flex flex-col gap-[10px] md:gap-[20px] items-center justify-center px-5 py-10 pt-20">
              <div className="main-heading headingColor2 text-center  max-w-lg mx-auto  ">
                {data.title}
              </div>
              <div>
                <div className="subtitle headingColor leading-relax max-w-4xl text-center  ">
                  Decoding cross-border commerce with technology
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap w-full gap-8 items-center justify-center mt-10">
              <div className="w-full md:w-fit flex items-center justify-center relative">
                <Image
                  className="w-60 md:w-80 h-full z-[100000]"
                  src={`${data.imageBasePath}p2_001.png`}
                  alt="hero image"
                  loading="lazy"
                  width="200"
                  height="400"
                  // objectFit="cover"
                />
                <div className="image_background_gradient"></div>
              </div>
              <div className="w-full max-w-lg">
                <div className="px-2 headingColor body-main-text w-full text-center md:text-left text-left font-noto ">
                  {data.cta}
                </div>
              </div>
            </div>
            <div className=" mx-auto flex items-center flex-col md:flex-row pt-6 gap-2 xl:gap-8 flex-wrap justify-center mt-10">
              <div className="shadow-lg min-h-[150px]  md:min-h-[260px]  w-full max-w-[320px] medium-text  product_box2 box_drop_shadow text-center bg-white h-full py-8 md:py-12 px-6 rounded-2xl">
                The check-in solution enables local language content, assets and
                customer support using geolocation, translation, pricing tool,
                and local language chatbots
              </div>{" "}
              <div className="rounded-full bg-[#2B2033] w-[30px] h-[30px] flex items-center justify-center">
                <div className="rounded-full bg-[#ffffff]  w-[15px] h-[15px] "></div>
              </div>
              <div className="shadow-lg min-h-[150px]  md:min-h-[260px]  w-full max-w-[320px] medium-text product_box2 box_drop_shadow text-center bg-white h-full py-8 md:py-12 px-6 rounded-2xl">
                The check-out solution enables accurate landed cost, inclusive
                of duties, taxes and shipping and an optimal international
                payment gateway
              </div>
              <div className="rounded-full bg-[#2B2033] w-[30px] h-[30px] flex items-center justify-center">
                <div className="rounded-full bg-[#ffffff]  w-[15px] h-[15px] "></div>
              </div>
              <div className="shadow-lg min-h-[150px]  md:min-h-[260px]  w-full max-w-[320px] medium-text product_box2 box_drop_shadow text-center bg-white h-full py-8 md:py-12 px-6 rounded-2xl">
                Fully compliant as per web store norms with seamless
                installation - as easy as selecting a theme or installing a web
                store plugin
              </div>
            </div>

            {/* Section 2 */}
            {/* Section 2 */}
            <div className="hidden md:block main-heading2 headingColor2 text-justify md:text-center  max-w-6xl mx-auto pt-36 ">
              Glocal Check-in & Check-out Features
            </div>
            <div className="flex justify-center">
              <div className="hidden md:flex flex-row flex-wrap gap-8 justify-center py-10 max-w-[1500px]">
                {data.features.map((feat, idx) => {
                  return (
                    <div
                      key={`product_${idx}`}
                      className="flex flex-col items-center justify-start w-[80%] max-w-[360px] min-h-[500px] px-5 py-10 pr_rad_grad shadow-lg rounded-[2rem]"
                    >
                      <div className="w-full">
                        <div className="w-60 h-60 my-5 flex items-center justify-center mx-auto relative">
                          <div className="w-full h-full rounded-full border-[0.5px] border-[#ffffff] dark:border-[#E21D6438] flex items-center justify-center">
                            <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#ffffff] dark:border-[#E21D6438] flex items-center justify-center">
                              <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#ffffff] dark:border-[#E21D6438]">
                                <Image
                                  className="w-full h-full object-contain"
                                  src={`${data.imageBasePath}/${feat.img}`}
                                  alt="hero image"
                                  loading="lazy"
                                  width="200"
                                  height="400"
                                  // objectFit="cover"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="image_background_gradient3"></div>
                        </div>
                      </div>
                      <div className="heading-4 leading-snug heading-color text-center mt-5 h-10">
                        {feat.name}
                      </div>
                      <div className="flex flex-col gap-3 justify-center items-center mt-10 w-[70%]">
                        {feat.fields.map((field, f_idx) => {
                          return field.link ? (
                            <div
                              key={`field_${idx}`}
                              className="w-full bg-[#FFFFFF] dark:bg-[#00000030] caption-text text-[#401255] rounded-2xl px-4 py-3 text-center font-medium cursor-pointer"
                              onClick={() => router.push(field.link)}
                            >
                              {field.title}
                            </div>
                          ) : (
                            <div className="w-full bg-[#FFFFFF] dark:bg-[#00000030] caption-text text-[#401255] rounded-2xl px-4 py-3 text-center font-medium">
                              {field.title}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="block md:hidden main-light-background mt-10">
                <div className="main-heading2 headingColor2 text-center w-full max-w-6xl mx-auto pt-10 leading-[40px]">
                  Glocal Check-in & Check-out Features
                </div>
                <div className="  flex flex-row flex-wrap gap-4 justify-center max-w-[1500px] ">
                  {data.features.map((feat, idx) => {
                    return (
                      <div
                        key={`product_${idx}`}
                        className="flex flex-col items-center justify-start w-[90%] max-w-[360px] px-5 py-5 rounded-[2rem]"
                      >
                        <div className="heading-4 leading-snug heading-color2 text-center mt-5 h-auto">
                          {feat.name}
                        </div>
                        <div className="w-full">
                          <div className="w-60 h-60 my-4 flex items-center justify-center mx-auto relative">
                            <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                              <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                                <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                                  <Image
                                    className="w-full h-full object-contain"
                                    src={`${data.imageBasePath}/${feat.img}`}
                                    alt="hero image"
                                    loading="lazy"
                                    width="200"
                                    height="400"
                                    // objectFit="cover"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="image_background_gradient3"></div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 justify-center items-center mt-5 w-[90%]">
                          {feat.fields.map((field, f_idx) => {
                            return field.link ? (
                              <div
                                key={`field_${idx}`}
                                className="w-full bg-gradient-to-r from-[#551F5F] to-[#AB5288] dark:bg-[#00000030] caption-text text-[#ffffff] rounded-2xl px-4 py-3 text-center font-medium cursor-pointer"
                                onClick={() => router.push(field.link)}
                              >
                                {field.title}
                              </div>
                            ) : (
                              <div className="w-full bg-gradient-to-r from-[#551F5F] to-[#AB5288] dark:bg-[#00000030] caption-text text-[#ffffff] rounded-2xl px-4 py-3 text-center font-medium">
                                {field.title}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
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
