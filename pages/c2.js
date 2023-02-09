/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import { RoundedButton } from "../components/button/RoundedButton";
import Footer from "../components/Footer";
import Header from "./../components/Header";

export default function careers() {
  const data = {
    title: "Growing and going far together",
    subTitle:
      " At goGLOCAL, We are building India’s most comprehensive tech platform for global e-commerce. To the crew who join us we promise them learnings and the adventure of a lifetime.",
    imageBasePath: "/asset/career/",
  };

  const BigFeatureButton = ({ text, link }) => {
    return (
      <Link href={link}>
        <div className="px-2 w-40 py-2  accent-grad  rounded-lg cursor-pointer text-center">
          <p className="link text-black">{text}</p>
        </div>
      </Link>
    );
  };

  const CareerButton = ({ text, link }) => {
    return (
      // <Link href={link}>
      <div className=" w-60  py-8 postition_button_bg text-black rounded-2xl  text-center">
        <p className="body-1 font-medium text-black">{text}</p>
      </div>
      // </Link>
    );
  };

  const CareerButton2 = ({ text, link }) => {
    return (
      // <Link href={link}>
      <div className=" w-60  py-8 postition_button_bg_2 text-black rounded-2xl  text-center">
        <p className="body-1 text-white">{text}</p>
      </div>
      // </Link>
    );
  };

  const CareerButton3 = ({ text, link }) => {
    return (
      // <Link href={link}>
      <div className=" w-60  py-8 postition_button_bg_3 text-black rounded-2xl  text-center">
        <p className="body-1 text-white">{text}</p>
      </div>
      // </Link>
    );
  };

  const RocketInfo = ({ text, image }) => {
    return (
      <div className="flex flex-row-reverse md:flex-row items-center justify-center gap-4">
        <motion.div className="text-sm headingColor-2 font-body w-80">
          {text}
        </motion.div>
        <div className="flex flex-row items-center justify-center mx-auto gap-0">
          <div>
            <Image
              className="h-20 w-20 mx-auto "
              src={`${data.imageBasePath}${image}`}
              alt="hero image"
              width="1000"
              height="1000"
              loading="lazy"
              // objectFit="cover"
            />
          </div>

          <div>
            <div>
              <Image
                className="h-full w-32 mx-auto "
                src={`${data.imageBasePath}point_arrow.svg`}
                alt="hero image"
                width="1000"
                height="1000"
                loading="lazy"
                // objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="overflow-x-hidden">
      <div className="main overflow-x-hidden">
        <div className="">
          <Header />
        </div>
        <div className="container pt-40 md:pt-52 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="heading headingColor2 text-center py-4"
          >
            {data.title}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="sub-heading-2 font-normal headingColor text-center mx-auto max-w-5xl py-4"
          >
            {data.subTitle}
          </motion.div>
        </div>
        <div className="container ">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="grid-2x2 px-4 gap-4 md:gap-20"
          >
            <div className="w-full md:w-2/4 flex flex-col items-center md:items-start justify-start gap-0 md:gap-3">
              {/* <h1 className="text-center lg:text-left sub-heading-3 text-dark-1 dark:text-light-1"> */}
              <h1 className=" heading-2 headingColor-2 text-center py-4">
                Why you should join us?
              </h1>
              <h2 className=" body-2 text-dark-3 dark:text-light-2 max-w-xl">
                We are taking Indian brands and businesses to the world. We are
                looking for exceptional people who will drive this mission for
                us by partnering with India brands and the world's best
                e-commerce providers. By working together, we will simplify and
                maximize the global potential for every Indian seller.
              </h2>
            </div>
            <div className=" w-full h-full md:w-fit max-w-m relative">
              <Image
                className=" w-full max-w-lg p-6"
                src={`${data.imageBasePath}01.png`}
                alt="hero image"
                width="600"
                height="600"
                loading="lazy"
                // objectFit="cover"
              />
              <div className="image_background_gradient" />
            </div>
          </motion.div>
        </div>
        <div className="container">
          <div className=" heading headingColor2 text-center py-4">
            What we believe in
          </div>
          <div className="sub-heading-2 font-normal headingColor text-center mx-auto max-w-5xl py-0 md:py-4  ">
            We believe in the power of a small group of thoughtful, committed,
            and smart individuals aspiring to change the world.
          </div>
          <div className="grid-2x2 px-4 gap-4 md:gap-32 lg:gap-40 xl:gap-40">
            <div className=" w-full h-full md:w-2/4 relative md:w-fit">
              <Image
                className="  w-full max-w-md p-6 md:p-12 lg:p-12"
                src={`${data.imageBasePath}cta_02.png`}
                alt="hero image"
                width="600"
                height="600"
                loading="lazy"
                // objectFit="cover"
              />
              <div className="image_background_gradient" />
            </div>
            <div className="w-full md:w-2/4 flex flex-col items-center md:items-start justify-start gap-6">
              <h2 className=" body-2 text-dark-2 dark:text-light-2">
                A crew of creators from varying backgrounds and points of view
                are reimagining and reinventing the existing complexities of
                Global e-commerce with a view to offering the best and most
                simplified selling experience. The diverse perspectives of the
                crew derived from different cultures, education, and
                professional and life experiences all combine to add to our
                ability to give life to our mission. Sounds unreasonable? We
                hope so. Because reasonable ideas seldom change anything.
              </h2>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="text-lg max-w-4xl md:text-2xl lg:text-2xl font-normal font-body leading-relaxed headingColor-2 text-center py-4 mx-auto flex items-center justify-center">
            Here’s calling out to all the darers, dreamers and doers out there –
            together we will accomplish the unimagined.
          </div>
          <div className="flex items-center justify-center mx-auto pt-4">
            <BigFeatureButton text="Come fly with us " link="/openposition" />
          </div>
        </div>
        <div className="container">
          <div className="  heading headingColor2 text-center pt-20 md:pt-40 md:py-4">
            Life @ goGlocal
          </div>
          {/* <div className="body-1 headingColor text-center mx-auto max-w-5xl py-4">
            We strive to become big and impact the world at large. We aim to
            shift the paradigm but be thoughtful about it. Our customers,
            partners, employees, local communities and planet need us to be
            better every day. goGlocal from its inception, has been a
            value-driven start-up. We practice what we preach and think this is
            one of the most important webpage we have made. We are far from
            perfect. We are constantly learning , growing and evolving our ways
            to better embody our values.
          </div> */}
          <div className="hidden  md:block pt-2">
            <div className="flex items-center justify-center mx-auto   ">
              <div className="flex flex-row gap-0 justify-center items-center mx-auto w-full ">
                <div className="flex flex-col items-start justify-center gap-4 lg:gap-8">
                  <RocketInfo
                    text="We love people who are audacious to chase massive goals, hustle to get it done, but combine it with humility. "
                    image="point_01.svg"
                  />
                  <RocketInfo
                    text="We love people with out of the box ideas who can implement them reliably. "
                    image="point_02.svg"
                  />
                  <RocketInfo
                    text=" We trust the judgement and independent decision-making of our crew"
                    image="point_03.svg"
                  />
                  <RocketInfo
                    text=" We value integrity, respect, inclusion, and collaboration. "
                    image="point_04.svg"
                  />
                  <RocketInfo
                    text="We encourage them to have honest conversations and be open to feedback sharing "
                    image="point_05.svg"
                  />
                </div>
                <div>
                  <Image
                    className="h-[800px] w-full mx-auto "
                    src={`${data.imageBasePath}rocket2.svg`}
                    alt="hero image"
                    width="1000"
                    height="1000"
                    loading="lazy"
                    // objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="block  md:hidden pt-8">
            <div className="flex flex-col items-center mx-auto justify-center gap-4 lg:gap-8">
              <div className="h-[400px] w-full mx-auto pb-12">
                <Image
                  className="h-[400px] w-full mx-auto "
                  src={`${data.imageBasePath}rocket2.svg`}
                  alt="hero image"
                  width="1000"
                  height="1000"
                  loading="lazy"
                  // objectFit="cover"
                />
              </div>
              <div className="flex flex-col items-center mx-auto justify-center gap-4 lg:gap-8">
                <RocketInfo
                  text="We love people who are audacious to chase massive goals, hustle to get it done, but combine it with humility. "
                  image="point_01.svg"
                />
                <RocketInfo
                  text="We love people with out of the box ideas who can implement them reliably. "
                  image="point_02.svg"
                />
                <RocketInfo
                  text=" We trust the judgement and independent decision-making of our crew"
                  image="point_03.svg"
                />
                <RocketInfo
                  text=" We value integrity, respect, inclusion, and collaboration. "
                  image="point_04.svg"
                />
                <RocketInfo
                  text="We encourage them to have honest conversations and be open to feedback sharing "
                  image="point_05.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-6 md:pt-40">
          <div className="heading headingColor2 text-center pt-20 md:py-4">
            Values we value
          </div>
          <div className="flex flex-wrap items-center justify-center mx-auto gap-8 pt-2">
            <CareerButton2 text="Judgement" link="/" />
            <CareerButton2 text="Performance" link="/" />
            <CareerButton2 text="Respect" link="/" />
            <CareerButton2 text="Communication" link="/" />
            <CareerButton2 text="Reliability" link="/" />
            <CareerButton2 text="Hustle" link="/" />
            <CareerButton2 text="Audacity" link="/" />
          </div>
        </div>
        <div className="container pt-6 md:pt-40">
          <div className=" heading headingColor2 text-center  pt-36 md:py-4">
            What is in it for you?
          </div>
          <div className="grid-3x3 items-center justify-self-center  md:gap-20 h-full  pt-6 md:pt-6 ">
            <div className="h-full w-full ">
              <div className="  group relative bg-[#1D1125] py-4 px-4 rounded-xl max-w-[22rem]  min-h-[25rem]">
                <div className="flex flex-col items-center gap-4">
                  <div className="h-52 w-full group-hover:opacity-0">
                    <Image
                      className="h-full w-full mx-auto p-0 object-contain"
                      src={`${data.imageBasePath}career-01.png`}
                      alt="hero image"
                      width="1000"
                      height="1000"
                      loading="lazy"
                      // objectFit="cover"
                    />
                  </div>
                  <div className="sub-heading-2 sub-heading-3 mt-3 text-accent-1 uppercase group-hover:opacity-0">
                    Launch-pad
                  </div>
                  <div className="body-2 h-12 text-white text-center group-hover:opacity-0">
                    Internships & Live-Project <br />
                    Program
                  </div>
                </div>
                <div className=" absolute top-1/2 -translate-y-1/2 transition-all	duration-100 ease-in-out text-center pl-2 body-3 px-6 py-4   text-white  opacity-0 group-hover:opacity-100">
                  Ready to enter the metaverse here hustlers and hunting for the
                  components to build the perfect spaceship ? The goGLOCAL
                  Universe offers plethora of collaboration and participation
                  opportunities in tech and glocal e-commerce.
                </div>
              </div>
            </div>
            <div className="h-full w-full  ">
              <div className="  min-h-[25rem] group relative bg-[#1D1125] py-4 px-4 rounded-xl max-w-[22rem]">
                <div className="flex flex-col items-center gap-4   ">
                  <div className="h-52 w-full group-hover:opacity-0">
                    <Image
                      className="h-full w-full mx-auto p-0 object-contain"
                      src={`${data.imageBasePath}career-02.png`}
                      alt="hero image"
                      width="1000"
                      height="1000"
                      loading="lazy"
                      // objectFit="cover"
                    />
                  </div>
                  <div className="sub-heading-2 sub-heading-3 nt-3 text-accent-1 uppercase group-hover:opacity-0">
                    Lift-off
                  </div>
                  <div className="body-2 h-12 text-white text-center group-hover:opacity-0">
                    Campus Placement & Lateral
                    <br />
                    Hiring
                  </div>
                </div>
                <div className=" absolute top-1/2 -translate-y-1/2 transition-all	duration-100 ease-in-out text-center pl-2 body-3 px-6 py-4   text-white  opacity-0 group-hover:opacity-100">
                  Make goGLOCAL a stepping stone to begin your exceptional
                  career or the next big destination to utilze and sharpen your
                  expertise while collaborating with exceptional individuals
                  from diverse fields. Explore roles offering 360 degree views
                  of business in international e-commerce exports, logistics and
                  technology.
                </div>
              </div>
            </div>
            <div className="h-full w-full  ">
              <div className=" min-h-[25rem] group relative bg-[#1D1125]  py-4 px-4 rounded-xl max-w-[22rem]">
                <div className="flex flex-col items-center gap-4   ">
                  <div className="h-52 w-full group-hover:opacity-0">
                    <Image
                      className="h-full w-full mx-auto p-0 object-contain"
                      src={`${data.imageBasePath}career-03.png`}
                      alt="hero image"
                      width="1000"
                      height="1000"
                      loading="lazy"
                      // objectFit="cover"
                    />
                  </div>
                  <div className="sub-heading-2 sub-heading-3 mt-3 text-accent-1 uppercase group-hover:opacity-0">
                    Universe
                  </div>
                  <div className="body-2 h-12 text-white text-center group-hover:opacity-0">
                    Programs & Events
                  </div>
                </div>
                <div className=" absolute top-1/2 -translate-y-1/2 transition-all	duration-100 ease-in-out text-center pl-2 body-3 px-6 py-4   text-white  opacity-0 group-hover:opacity-100">
                  An extensive learning opportunity to work with a dynamic team
                  while solving real-time challenges around diverse aspects of
                  glocal e-commerce exports. Our Launchpad program is
                  exclusively designed for outstanding college students looking
                  for multi-sectoral industry exposure while doing impactful
                  work.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container  pt-20 md:pt-40">
          <div className="heading headingColor2 text-center pt-0">
            Superhero Crew Selection
          </div>
          <div className="sub-heading-2 font-normal headingColor text-center mx-auto max-w-5xl py-1 md:py-4">
            Our application and interview process differs from role to role, but
            here are some basic steps we follow to get to know you better.
          </div>
          {/* <div className=" w-full h-full relative">
            <Image
              className=" max-w-xl mx-auto p-12 "
              src={`${data.imageBasePath}cta_03.png`}
              alt="hero image"
              width="600"
              height="600"
              loading="lazy"
              // objectFit="cover"
            />
            <div className="hidden md:block main-grad absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-80 w-80"></div>
          </div> */}
          <div className="relative w-full h-full w-full  pt-4 md:pt-0">
            <div className="flex items-center justify-center mx-auto w-full ">
              <Image
                className=" w-auto h-48 md:h-72 lg:h-72 "
                src={`${data.imageBasePath}cta_03.png`}
                alt="hero image"
                width="600"
                height="600"
                loading="lazy"
                // objectFit="cover"
              />
            </div>
            <div className="image_background_gradient"></div>
          </div>
        </div>
        <div className="container pt-6 md:pt-40">
          <div className="heading headingColor2  text-center pt-20">
            Explore Open Positions
          </div>
          <div className="w-40 mx-auto fle xitems-center justify-center py-8">
            <RoundedButton path="/openposition">Join Us</RoundedButton>
          </div>

          <div className="flex flex-wrap items-center justify-center mx-auto gap-8 pt-2">
            <CareerButton2 text="Business " link="/" />
            <CareerButton2 text="Performance" link="/" />
            <CareerButton2 text="Logistics" link="/" />
            <CareerButton2 text="Technology" link="/" />
          </div>
        </div>
        <div className="mt-20 pb-20 md:pb-32 pt-4 md:pt-20 bg-[#F8F8F8] dark:bg-[#35172F] ">
          <div className="max-w-6xl flex flex-col items-center justify-center mx-auto ">
            <div className="sub-heading-2 headingColor2 text-center py-4 ">
              Join the crew
            </div>
            <div className="sub-heading-2 font-normal headingColor text-center  py-4">
              Cannot find a suitable role at the moment ?
            </div>
            <div className="sub-heading-2 font-normal headingColor text-center  py-4">
              Join the goGLOCAL Universe and stay updated with latest
              happenings, roles and initiatives at goGLOCAL.
            </div>{" "}
            <div className="sub-heading-2 font-normal headingColor text-center  py-4">
              Let us know your email address, domain of interest, how we could
              collaborate !
            </div>
            <div className="w-40 mx-auto fle xitems-center justify-center py-8">
              <RoundedButton path="/connect/partner">Join Us</RoundedButton>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
