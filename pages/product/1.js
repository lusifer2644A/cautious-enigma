import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Button = ({ children, path = "/" }) => {
  return (
    <div
      className="rounded-[12px] border-[1.02px]   cursor-pointer text-center border-[1px] border-[#401255] dark:border-[#BE5EEA] max-w-[300px]"
      style={{
        background:
          "linear-gradient(161.65deg, rgba(136, 0, 220, 0.63) -42.78%, rgba(177, 120, 120, 0) 113.86%)",
      }}
    >
      <Link href={path}>
        <div
          className="text-[#401255] dark:text-[#fff] px-4  py-3 "
          style={{ font: "500 16px 'Poppins', sans-serif" }}
        >
          {children}
        </div>
      </Link>
    </div>
  );
};
export default function Index() {
  const data = {
    title: " Seller Central",
    subTitle: "Making it super-easy to sell around the world with automation",
    imageBasePath: "/asset/products/",
    cta: "  With the goGLOCAL Seller Central to support you in managing your daily business operations, you can focus on growing your sales across the globe with access to all solutions required to enable your global expansion.",
  };
  return (
    <main className="bg-light dark:bg-dark overflow-x-hidden">
      {/* Header */}
      {/* Hero Section */}

      <div className="">
        <Header />
      </div>

      {/* CTA Section */}
      <div className="container pt-40 pb-20 md:pb-40  ">
        <div className="flex flex-col gap-20 md:gap-36 items-center justify-start relative">
          <div className="flex flex-col gap-[10px] items-center justify-center ">
            <div className="headingColor2 heading text-center  ">
              {data.title}
            </div>

            <div className="sub-heading-2 font-normal headingColor max-w-3xl text-center  ">
              {data.subTitle}
            </div>
          </div>

          <div className="flex flex-col  md:flex-row gap-8 md:gap-20 items-center justify-center  ">
            <div className="w-full md:w-5/12 flex items-center justify-center mx-auto">
              <Image
                className="w-60 md:w-80 h-full "
                src={`${data.imageBasePath}p_001.png`}
                alt="hero image"
                loading="lazy"
                width="200"
                height="400"
                // objectFit="cover"
              />
            </div>
            <div className="w-full md:w-7/12 max-w-lg">
              <div className="headingColor w-full text-left font-body body-2 ">
                {data.cta}
              </div>
            </div>
          </div>

          <div className="container mx-auto flex items-center flex-row pt-6 gap-6 flex-wrap justify-center">
            <div className="shadow-lg min-h-[150px]  md:min-h-[260px]  w-full max-w-[300px] text-sm md:text-lg  product_box box_drop_shadow text-center bg-white h-full py-8 md:py-12 px-6 rounded-2xl">
              Extend and customise your global selling from strategy,
              marketplace, logistics, payments, order management at all from one
              dashboard.
            </div>
            <div className="rounded-full bg-[#9B5CB9] w-[30px] h-[30px] flex items-center justify-center">
              <div className="rounded-full bg-[#ffffff] dark:bg-[#1d1125] w-[15px] h-[15px] "></div>
            </div>
            <div className="shadow-lg min-h-[150px]  md:min-h-[260px]  w-full max-w-[300px] text-sm md:text-lg  product_box text-center box_drop_shadow bg-white h-full py-8 md:py-12 px-6 rounded-2xl">
              Get access to our certified Seller Enabler Network with ready made
              solutions and customised offerings to manage all your global
              e-commerce needs.
            </div>
            <div className="rounded-full bg-[#9B5CB9] w-[30px] h-[30px] flex items-center justify-center">
              <div className="rounded-full bg-[#ffffff] dark:bg-[#1d1125] w-[15px] h-[15px] "></div>
            </div>
            <div className="shadow-lg min-h-[150px]  md:min-h-[260px]  w-full max-w-[300px] text-sm md:text-lg product_box  box_drop_shadow text-center bg-white h-full py-8 md:py-12 px-6 rounded-2xl">
              Custom solutions by leveraging your existing CMS, OMS and WMS in
              the Seller Central for a seamless set up.
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen dark:bg-gradient-to-b from-transparent via-[#7c007747] via-[#7c007747] via-[#7c007747] via-[#7c007747] to-[#7c007747]">
        <div className="container pb-40 ">
          <div className="headingColor2 heading text-center  ">
            Seller Central Features
          </div>

          <div className="pt-20 ">
            <div className="hidden md:flex flex-col md:flex-row  justify-center  gap-4 product_section_grad py-8">
              <div className="w-80 h-80 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}p_002.svg`}
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
              <div className="w-full md:w-8/12 flex flex-col items-center md:items-start justify-center  gap-6">
                <div className="headingColor-2 sub-heading-2 max-w-xl text-center md:text-left  ">
                  Enabling Global e-commerce
                </div>
                <div className="flex flex-col md:flex-row gap-4 ">
                  <Button path="/features/1">Global Expansion Strategy</Button>
                  <Button path="/features/2">Glocal Store</Button>
                  <Button path="/features/4">Seller Enabler Network</Button>
                </div>
              </div>
            </div>
            <div className="flex md:hidden flex-col md:flex-row  justify-center  gap-4 product_section_grad py-8">
              <div className="headingColor-2 sub-heading-2 max-w-xl text-center md:text-left  ">
                Enabling Global e-commerce
              </div>
              <div className="w-60 h-60 my-5 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}p_002.svg`}
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
              <div className="w-full md:w-8/12 flex flex-col items-center md:items-start justify-center  gap-6">
                <div className="flex flex-col md:flex-row gap-4 ">
                  <Button path="/features/1">Global Expansion Strategy</Button>
                  <Button path="/features/2">Glocal Store</Button>
                  <Button path="/features/4">Seller Enabler Network</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-20">
            <div className="hidden md:flex flex-col-reverse md:flex-row  justify-center  gap-4 product_section_grad py-8">
              <div className="w-full md:w-8/12 flex flex-col items-center md:items-end justify-center  gap-6">
                <div className="headingColor-2 sub-heading-2 max-w-xl text-center md:text-right  ">
                  Get access to the World
                </div>
                <div className="flex flex-row gap-4">
                  <Button path="/features/3">Marketplace Connect</Button>
                </div>
              </div>
              <div className="w-80 h-80 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}p_003.svg`}
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
            <div className="flex md:hidden flex-col md:flex-row  justify-center  gap-4 product_section_grad py-8">
              <div className="headingColor-2 sub-heading-2 max-w-xl text-center md:text-right  ">
                Get access to the World
              </div>

              <div className="w-60 h-60 my-5 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}p_003.svg`}
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
              <div className="w-full md:w-8/12 flex flex-col items-center md:items-end justify-center  gap-6">
                <div className="flex flex-row gap-4">
                  <Button path="/features/3">Marketplace Connect</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-20">
            <div className="hidden md:flex flex-col md:flex-row  justify-center  gap-4 product_section_grad py-8">
              <div className="w-80 h-80 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}p_004.svg`}
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
              <div className="w-full md:w-8/12 flex flex-col items-center md:items-start justify-center  gap-6">
                <div className="headingColor-2 sub-heading-2 max-w-xl text-center md:text-left  ">
                  Stress free international order fulfillment
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button path="/features/5">International shipping</Button>
                  <Button path="/features/6">Order management</Button>
                </div>
              </div>
            </div>
            <div className="flex md:hidden flex-col md:flex-row  justify-center  gap-4 product_section_grad py-8">
              <div className="headingColor-2 sub-heading-2 max-w-xl text-center md:text-left  ">
                Stress free international order fulfillment
              </div>
              <div className="w-60 h-60 my-5 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}p_004.svg`}
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
              <div className="w-full md:w-8/12 flex flex-col items-center md:items-start justify-center  gap-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <Button path="/features/5">International shipping</Button>
                  <Button path="/features/6">Order management</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-20">
            <div className="hidden md:flex flex-col-reverse md:flex-row  justify-center  gap-4 product_section_grad py-8">
              <div className="w-full md:w-8/12 flex flex-col items-center md:items-end justify-center  gap-6">
                <div className="headingColor-2 sub-heading-2 max-w-xl text-center md:text-right  ">
                  Optimised international business growth
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button path="/features/8">Global Payments</Button>
                  <Button path="/features/7">Trade Compliance</Button>
                </div>
              </div>
              <div className="w-80 h-80 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}p_005.svg`}
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
            <div className="flex md:hidden flex-col md:flex-row  justify-center  gap-4 product_section_grad py-8">
              <div className="headingColor-2 sub-heading-2 max-w-xl text-center md:text-right  ">
                Optimised international business growth
              </div>

              <div className="w-60 h-60 my-5 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}p_005.svg`}
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
              <div className="w-full md:w-8/12 flex flex-col items-center md:items-end justify-center  gap-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <Button path="/features/8">Global Payments</Button>
                  <Button path="/features/7">Trade Compliance</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-20">
            <div className="hidden md:flex flex-col md:flex-row  justify-center  gap-4 product_section_grad py-8">
              <div className="w-80 h-80 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}p_006.svg`}
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
              <div className="w-full md:w-8/12 flex flex-col items-center md:items-start justify-center  gap-6">
                <div className="headingColor-2 sub-heading-2 max-w-xl text-center md:text-left  ">
                  Develop world-wide wholesale business
                </div>
                <div className="flex flex-row gap-4">
                  <Button path="/features/9">B2B Sourcing</Button>
                </div>
              </div>
            </div>
            <div className="flex md:hidden flex-col md:flex-row  justify-center  gap-4 product_section_grad py-8">
              <div className="headingColor-2 sub-heading-2 max-w-xl text-center md:text-left  ">
                Develop world-wide wholesale business
              </div>
              <div className="w-60 h-60 my-5 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}p_006.svg`}
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
              <div className="w-full md:w-8/12 flex flex-col items-center md:items-start justify-center  gap-6">
                <div className="flex flex-row gap-4">
                  <Button path="/features/9">B2B Sourcing</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
