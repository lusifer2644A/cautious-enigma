import Image from "next/future/image";
import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Button = ({ children, path = "/" }) => {
  return (
    <div
      className="rounded-[12px] border-[1.02px]   text-center border-[1px] border-[#401255] dark:border-[#BE5EEA] max-w-[300px]"
      style={{
        background:
          "linear-gradient(161.65deg, rgba(136, 0, 220, 0.63) -42.78%, rgba(177, 120, 120, 0) 113.86%)",
      }}
    >
      {/* <Link href={path}> */}
      <div
        className="text-[#401255] dark:text-[#fff] px-4  py-3 "
        style={{ font: "500 16px 'Poppins', sans-serif" }}
      >
        {children}
      </div>
      {/* </Link> */}
    </div>
  );
};
export default function Index() {
  const data = {
    title: " Glocal Check-in  & Check-out",
    subTitle: "Decoding cross-border commerce with technology     ",
    imageBasePath: "/asset/products/",
    cta: " Our break through global check-in check-out solution equips your web stores to establish local presence across multiple countries seamlessly by optimising the international customer’s check-in and check-out experience",
  };
  return (
    <main className="bg-light dark:bg-dark overflow-x-hidden">
      {/* Header */}
      {/* Hero Section */}

      <div className="">
        <Header />
      </div>

      {/* CTA Section */}
      <div className="container pt-40 pb-20 md:pb-40   ">
        <div className="flex flex-col gap-20 md:gap-36 items-center justify-start relative">
          <div className="flex flex-col gap-[10px] items-center justify-center ">
            <div className="headingColor2 heading text-center  ">
              {data.title}
            </div>

            <div className="sub-heading-2 font-normal headingColor max-w-xl text-center  ">
              {data.subTitle}
            </div>
          </div>

          <div className="flex flex-col  md:flex-row gap-8 md:gap-20 items-center justify-center  ">
            <div className="w-full md:w-5/12 flex items-center justify-center mx-auto">
              <Image
                className="w-60 md:w-80 h-full "
                src={`${data.imageBasePath}p2_001.png`}
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

          <div className="container mx-auto flex items-center flex-row pt-6 gap-8 flex-wrap justify-center">
            <div className="shadow-lg min-h-[150px]  md:min-h-[260px]  w-full max-w-[350px] body-3  product_box md:body-2 box_drop_shadow text-center bg-white h-full py-8 md:py-12 px-6 rounded-2xl">
              The check-in solution enables local language content, assets and
              customer support using geolocation, translation, pricing tool, and
              local language chatbots
            </div>{" "}
            <div className="rounded-full bg-[#9B5CB9] w-[30px] h-[30px] flex items-center justify-center">
              <div className="rounded-full bg-[#ffffff] dark:bg-[#1d1125] w-[15px] h-[15px] "></div>
            </div>
            <div className="shadow-lg min-h-[150px]  md:min-h-[260px]  w-full max-w-[350px] body-3  product_box md:body-2 box_drop_shadow text-center bg-white h-full py-8 md:py-12 px-6 rounded-2xl">
              The check-out solution enables accurate landed cost, inclusive of
              duties, taxes and shipping and an optimal international payment
              gateway
            </div>
            <div className="rounded-full bg-[#9B5CB9] w-[30px] h-[30px] flex items-center justify-center">
              <div className="rounded-full bg-[#ffffff] dark:bg-[#1d1125] w-[15px] h-[15px] "></div>
            </div>
            <div className="shadow-lg min-h-[150px]  md:min-h-[260px]  w-full max-w-[350px] body-3  product_box md:body-2 box_drop_shadow text-center bg-white h-full py-8 md:py-12 px-6 rounded-2xl">
              Fully compliant as per web store norms with seamless installation
              - as easy as selecting a theme or installing a web store plugin
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen dark:bg-gradient-to-b from-transparent via-[#7c007747] via-[#7c007747] via-[#7c007747] via-[#7c007747] to-[#7c007747]">
        <div className="container pb-40">
          <div className="headingColor2 heading text-center  ">
            Global Check-In & Check-out Features
          </div>

          <div className="pt-20">
            <div className="hidden md:flex  flex-col md:flex-row  justify-center  gap-2 product_section_grad py-8">
              <div className="w-80 h-80 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}/p2_002.svg`}
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
                  Localization
                </div>
                <div className="flex flex-col md:flex-row gap-2 ">
                  <Button>Local Content, Currency & Assets</Button>
                  <Button>Local Payment Methods</Button>
                </div>
              </div>
            </div>
            <div className="flex md:hidden  flex-col md:flex-row  justify-center  gap-4 product_section_grad py-8">
              <div className="headingColor-2 sub-heading-2 max-w-xl text-center md:text-left  ">
                Localization
              </div>
              <div className="w-60 h-60 my-5 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}/p2_002.svg`}
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
                <div className="flex flex-col md:flex-row gap-2 ">
                  <Button>Local Content, Currency & Assets</Button>
                  <Button>Local Payment Methods</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-20">
            <div className="hidden md:flex  flex-col md:flex-row  justify-center  gap-4 product_section_grad py-8">
              <div className="w-full md:w-8/12 flex flex-col items-center md:items-end justify-center  gap-6">
                <div className="headingColor-2 sub-heading-2 max-w-xl text-right  ">
                  Local Language Management
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <Button>Local Language Customer Support</Button>
                </div>
              </div>
              <div className="w-80 h-80 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}p2_003.svg`}
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
            <div className="flex md:hidden  flex-col md:flex-row  justify-center  gap-4 product_section_grad py-8">
              <div className="headingColor-2 sub-heading-2 max-w-xl text-center md:text-right  ">
                Local Account Management
              </div>

              <div className="w-60 h-60 my-5 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}/p2_003.svg`}
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
                <div className="flex flex-col md:flex-row gap-2">
                  <Button>Local Language Customer Support</Button>
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
                        src={`${data.imageBasePath}p2_004.svg`}
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
                <div className="headingColor-2 sub-heading-2 max-w-xl text-left  ">
                  Transparent Charges
                </div>
                <div className="flex flex-row gap-2">
                  <Button>
                    Accurate Landed Cost With Rariff,Duty & Shipping
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:hidden flex-col md:flex-row  justify-center  gap-4 product_section_grad py-8">
              <div className="headingColor-2 sub-heading-2 max-w-xl text-center md:text-left  ">
                Transparent Charges
              </div>
              <div className="w-60 h-60 my-5 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}/p2_004.svg`}
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
                <div className="flex flex-row gap-2">
                  <Button>
                    Accurate Landed Cost With Rariff,Duty & Shipping
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-20">
            <div className="hidden md:flex flex-col md:flex-row  justify-center  gap-2 product_section_grad py-8">
              <div className="w-full md:w-8/12 flex flex-col items-center md:items-end justify-center  gap-6">
                <div className="headingColor-2 sub-heading-2 max-w-xl text-center md:text-right  ">
                  Superior Customer Experience
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <Button>Time And Cost Delivery Options</Button>
                  <Button>Last Mile Tracking</Button>
                </div>
              </div>
              <div className="w-80 h-80 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}p2_005.svg`}
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
                Superior Customer Experience
              </div>

              <div className="w-60 h-60 my-5 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}/p2_005.svg`}
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
                <div className="flex flex-col md:flex-row gap-2">
                  <Button>Time And Cost Delivery Options</Button>
                  <Button>Last Mile Tracking</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-20">
            <div className="hidden md:flex flex-col md:flex-row  justify-center  gap-2 product_section_grad py-8">
              <div className="w-80 h-80 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}p2_006.svg`}
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
                <div className="headingColor-2 sub-heading-2 max-w-xl text-left  ">
                  Increased conversions
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <Button>
                    Tools To Monitor & Manage Performance From Dashboard
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:hidden flex-col md:flex-row  justify-center  gap-2 product_section_grad py-8">
              <div className="headingColor-2 sub-heading-2 max-w-xl text-center md:text-left  ">
                Increased conversions
              </div>
              <div className="w-60 h-60 my-5 flex items-center justify-center mx-auto relative">
                <div className="w-full h-full rounded-full border-[0.5px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full border-[2px] border-[#7300AB61] dark:border-[#E21D6438] flex items-center justify-center">
                    <div className="w-[95%] h-[95%] rounded-full border-[4px] border-[#7300AB61] dark:border-[#E21D6438]">
                      <Image
                        className="w-full h-full object-contain"
                        src={`${data.imageBasePath}/p2_006.svg`}
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
                <div className="flex flex-col md:flex-row gap-2">
                  <Button>
                    Tools To Monitor & Manage Performance From Dashboard
                  </Button>
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
