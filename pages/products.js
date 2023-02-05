import React, { useState } from "react";
import Header from "./../components/Header";
import Image from "next/future/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Product() {
  const [isHovered, setHovered] = useState(false);
  const [isHovered1, setHovered1] = useState(false);

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const data = {
    title: " More Reach. More Sales. More Growth.",
    imageBasePath: "/asset/products/",
  };

  return (
    <div>
      <div className="main">
        <div className=" ">
          <Header />
        </div>
        <div className="container pt-40 md:pt-60">
          <h1 className="text-center heading-2 mx-auto headingColor-2 max-w-md">
            {data.title}
          </h1>
        </div>
        <div className=" ">
          <div className=" pb-20 relative   flex justify-center items-center mx-auto">
            <motion.div className="px-12 md:px-8 lg:px-12 mx-auto mt-20 flex flex-col md:flex-row justify-center items-center  gap-20  top-2 ">
              <Link href="/product/1">
                <motion.div className=" flex flex-col gap-2 cursor-pointer">
                  <Image
                    className="h-auto w-auto md:h-96 md:w-96 mx-auto rounded-full cursor-pointer"
                    src={`${data.imageBasePath}product-1.png`}
                    alt="hero image"
                    loading="lazy"
                    width="600"
                    height="600"
                    objectFit="contain"
                  />
                  <h1 className="subtitle-3 headingColor text-center py-2">
                    Seller Central
                  </h1>
                </motion.div>
              </Link>
              <Link href="/product/2">
                <motion.div className="  flex flex-col gap-2 cursor-pointer">
                  <Image
                    className="h-auto w-auto md:h-96 md:w-96 mx-auto rounded-full product-image-border cursor-pointer"
                    src={`${data.imageBasePath}product-2.png`}
                    alt="hero image"
                    loading="lazy"
                    width="600"
                    height="600"
                    objectFit="contain"
                  />
                  <h1 className="subtitle-3 headingColor text-center py-2">
                    Global Check-in Check-out
                  </h1>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
