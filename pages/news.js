import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const news = () => {
  return (
    <>
      <Head>
        <title>Goglocal </title>
        <meta name="description" content="Goglocal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-light dark:bg-dark overflow-x-hidden">
        {/* Header */}

        <Header />
        <div className="absolute top-0 left-0 white-rad-grad md:w-[3000px] md:h-[1200px] -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>

        <div className="page-bg bg-[#AC2EED29] z-[10] static z-[1]">
          <div className="page-container main mb-10">
            {/* Hero Section */}
            <div className="flex flex-col gap-[20px] items-center justify-center px-5 py-20 pt-32">
              <div className="main-heading headingColor2 text-justify md:text-center mx-auto  ">
                NEWS IN US
              </div>
              <div>
                <div className="subtitle headingColor leading-relax text-center max-w-5xl">
                  Coming Soon ........
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
};

export default news;
