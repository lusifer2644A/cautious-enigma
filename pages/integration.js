/* eslint-disable react/jsx-key */
import React from "react";
import { motion } from "framer-motion";
import Header from "./../components/Header";
import Image from "next/future/image";
import ThemeToggle from "../components/ThemeToggle";

export default function Integration() {
  const data = {
    title: "Our amazing partners make everything possible. ",
    imageBasePath: "/asset/integration/",
    subHeading:
      "Just plug into our robust network of partners to manage everything from a single platform. ",
    image: "3d00772 copy 1.png",
    description:
      "To enable you meet your customer expectations and business requirements, we have forged powerful links with key marketplaces, carriers, and ecommerce processing platforms.",
    heading1:
      "Integrate with major ERPs, WMSs and PIMs, and we enable businesses to set up their omnichannel stores in few easy steps.",
    integrationImage1: [
      "unicommerce-opt-logo 1.png",
      "shopify.png",
      "logo-woocommerce 1.png",
      "Mask group-1.png"
    ],
    heading2:
      "Sell on the top global marketplaces by simply using one of our plugins to help you auto-sync our platform without the need to code or import your product listings.",
    integrationImage2: [
      "Amazon_logo 1.png",
      "256px-EBay_logo 1.png",
      "Walmart_logo 1.png",
      "1005796-1410384298 copy 1.png",
      "lazada.png",
      "Asos 1.png"
    ],
    heading3:
      "Worldwide delivery using the most reliable and suitable carriers partners across regional lanes. Activate native integrations with your internal platforms for seamless operations using our intuitive dashboard.      ",
    integrationImage3: [
      "DHL_Logo 1.png",
      "FedEx_Express 1.png",
      "Aramex_logo 1.png",
      "ups 1.png",
      "dpd_logo copy 1.png"
    ]
  };
  return (
    <div>
      <div className="main">
        <div className=" ">
          <Header />
        </div>
        <div className="container pt-60">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="big_heading headingColor-2"
          >
            {data.title}
          </motion.h1>
          <div className="pt-8 grid-2x2">
            <div className="md:w-2/4">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="sub-heading headingColor"
              >
                {data.subHeading}
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="md:w-2/4 relative"
            >
              <Image
                src={`${data.imageBasePath}${data.image}`}
                alt="cta_image"
                loading="lazy"
                width={500}
                height={500}
                layout="responsive"
              />
              <div className="main-grad block  absolute top-0 right-0 h-full w-full"></div>
            </motion.div>
          </div>
        </div>
        <div className="container">
          <h1 className="sub-heading headingColor-2 max-w-4xl text-center mx-auto">
            {data.description}
          </h1>
        </div>
        <div className="container">
          <h1 className="body-1 headingColor ">{data.heading1}</h1>
          <div className="pt-12 grid-4x4 gap-16">
            {data.integrationImage1.map((item, index) => (
              <div key={index}>
                <div className="block dark:hidden">
                  <Image
                    src={`${data.imageBasePath}light/${item}`}
                    alt="cta_image"
                    loading="lazy"
                    width={180}
                    height={180}
                    className="flex items-center justify-center mx-auto"
                    layout="responsive"
                  />
                </div>
                <div className="hidden dark:block">
                  <Image
                    src={`${data.imageBasePath}dark/${item}`}
                    alt="cta_image"
                    loading="lazy"
                    width={180}
                    height={180}
                    className="flex items-center justify-center mx-auto"
                    layout="responsive"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <h1 className="body-1 headingColor ">{data.heading2}</h1>
          <div className="pt-12 grid-6x6 gap-16">
            {data.integrationImage2.map((item, index) => (
              <div key={index}>
                <div className="block dark:hidden">
                  <Image
                    src={`${data.imageBasePath}light/${item}`}
                    alt="cta_image"
                    width={180}
                    loading="lazy"
                    height={180}
                    className="flex items-center justify-center mx-auto"
                    layout="responsive"
                  />
                </div>
                <div className="hidden dark:block">
                  <Image
                    src={`${data.imageBasePath}dark/${item}`}
                    alt="cta_image"
                    width={180}
                    loading="lazy"
                    height={180}
                    className="flex items-center justify-center mx-auto"
                    layout="responsive"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container pb-40">
          <h1 className="body-1 headingColor ">{data.heading3}</h1>
          <div className="pt-12 grid-5x5 gap-32">
            {data.integrationImage3.map((item, index) => (
              <div key={index}>
                <div className="block dark:hidden">
                  <Image
                    src={`${data.imageBasePath}light/${item}`}
                    alt="cta_image"
                    width={100}
                    loading="lazy"
                    height={100}
                    className="bg-auto max-h-20 max-w-12 flex items-center justify-center mx-auto"
                    layout="responsive"
                  />
                </div>
                <div className="hidden dark:block">
                  <Image
                    src={`${data.imageBasePath}dark/${item}`}
                    alt="cta_image"
                    width={100}
                    loading="lazy"
                    height={100}
                    className="bg-auto max-h-20 max-w-12 flex items-center justify-center mx-auto"
                    layout="responsive"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
