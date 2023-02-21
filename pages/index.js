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
    title: "",
    description: "",
    hero: {
      title: "Unlock Global Potential For Your Brand.",
      subtitle:
        "India’s most comprehensive tech platform for global e-commerce",
      image:
        "https://res.cloudinary.com/dzekclpeu/image/upload/v1676895629/goglocal/asset/Hero-light-2_z3cf0p.png",
    },
    cta: {
      image: "/hero/home-cta.png",
      title:
        "On the mission to establish Indian sellers and brands on the world map",
      subtitle:
        "We aspire to make global trade as simple as getting grocery from the local kirana shop",
    },
    features: {
      title: "Hassle free exporting starts here",
      subtitle: "Why goGLOCAL ?",
      list: [
        {
          title: "Start selling anywhere in the world via e-commerce ",
          points: [
            "Instant access to hundreds of millions of International customers",
            "Customised growth strategy to accelerate sales and business",
          ],
          image: "img9.svg",
          imageRight: true,
          link: "/service",
        },
        {
          title: "Happy customers with enhanced experience ",
          points: [
            "Higher conversion rates with localised check-out, payments and support service to customers.",
            "Effective and high ROI digital marketing campaigns",
          ],
          image: "image-2.svg",
          imageRight: false,
          link: "/service",
        },
        {
          title: "Lowest investments and no risks in global expansion ",
          points: [
            "Deliver anywhere in the world with optimised fulfillment, and easy returns",
            "Stress-free customs and trade compliance with experts",
          ],
          image: "image-3.svg",
          imageRight: true,
          link: "/service",
        },
        {
          title: "Unlimited earnings and growth opportunities",
          points: [
            "More earnings with efficient operations and better margins",
            "Access to gateway to B2B sourcing from India.",
          ],
          image: "image-4.png",
          imageRight: false,
          link: "/service",
        },
      ],
    },

    product: {
      title:
        "Converting the world into one big shopping mall with our PRODUCTS",
      subtitle: "Our Products",
      list: [
        {
          title: "Seller Central",
          image: "07@2x.png",
          link: "/product/1",
        },
        {
          title: "Global Check-In & Check-Out",
          image: "06@2x.png",
          link: "/product/2",
        },
      ],
    },
    service: {
      title: "Something, for everyone",
      subtitle: "Our Programs",
      subheading:
        "Whether a newly started business or an established brand, we are transforming the global e-commerce landscape for all Indian sellers",
      list: [
        {
          title: "Managed by goGLOCAL",
          subTitle: "Managing end to end global selling for your inventory",
          image: "Artboard-1.png",
          link: "/",
        },
        {
          title: "Fulfilled by goGLOCAL ",
          subTitle: "Glocal omni channel fulfillment",
          image: "Artboard-2.png",
          link: "/",
        },
        ,
        {
          title: "Enabled by goGLOCAL",
          subTitle: "Glocal selling solutions as per your need",
          image: "Artboard-3.png",
          link: "/",
        },
      ],
    },
    integrations: {
      title: "Committed to your success",
      subtitle: "Integrations",
      list: [
        {
          title: "Plug & Play",
          body: "Make the most of your existing technology, tools and softwares with our powerful all-embracing link to enable fast-tracked growth without putting time in tedious integrations",
          svgPath:
            "M22.9074 30.1931C24.3025 28.798 25 27.1146 25 25.1429C25 23.1711 24.3025 21.4877 22.9074 20.0926C21.5123 18.6975 19.8289 18 17.8571 18C15.8854 18 14.202 18.6975 12.8069 20.0926C11.4118 21.4877 10.7143 23.1711 10.7143 25.1429C10.7143 27.1146 11.4118 28.798 12.8069 30.1931C14.202 31.5882 15.8854 32.2857 17.8571 32.2857C19.8289 32.2857 21.5123 31.5882 22.9074 30.1931ZM46.4286 39.4286C46.4286 38.4613 46.0752 37.6243 45.3683 36.9174C44.6615 36.2106 43.8244 35.8571 42.8571 35.8571C41.8899 35.8571 41.0528 36.2106 40.346 36.9174C39.6391 37.6243 39.2857 38.4613 39.2857 39.4286C39.2857 40.4144 39.6298 41.2608 40.3181 41.9676C41.0249 42.6559 41.8713 43 42.8571 43C43.843 43 44.6801 42.6559 45.3683 41.9676C46.0752 41.2608 46.4286 40.4144 46.4286 39.4286ZM46.4286 10.8571C46.4286 9.88988 46.0752 9.05283 45.3683 8.34598C44.6615 7.63914 43.8244 7.28571 42.8571 7.28571C41.8899 7.28571 41.0528 7.63914 40.346 8.34598C39.6391 9.05283 39.2857 9.88988 39.2857 10.8571C39.2857 11.843 39.6298 12.6894 40.3181 13.3962C41.0249 14.0844 41.8713 14.4286 42.8571 14.4286C43.843 14.4286 44.6801 14.0844 45.3683 13.3962C46.0752 12.6894 46.4286 11.843 46.4286 10.8571ZM35.7143 22.6038V27.7656C35.7143 27.9516 35.6492 28.1376 35.519 28.3237C35.3888 28.4911 35.24 28.5841 35.0725 28.6027L30.7478 29.2723C30.5432 29.9234 30.2455 30.6302 29.8549 31.3929C30.4874 32.2857 31.3244 33.3553 32.3661 34.6016C32.4963 34.8062 32.5614 34.9922 32.5614 35.1596C32.5614 35.3828 32.4963 35.5595 32.3661 35.6897C31.9382 36.2478 31.1663 37.0848 30.0502 38.2009C28.9528 39.2984 28.2273 39.8471 27.8739 39.8471C27.6693 39.8471 27.474 39.782 27.2879 39.6518L24.0792 37.1406C23.391 37.494 22.6749 37.7824 21.9308 38.0056C21.7262 40.0145 21.5123 41.4561 21.2891 42.3304C21.1589 42.7768 20.8798 43 20.452 43H15.2623C15.0577 43 14.8717 42.9349 14.7042 42.8047C14.5368 42.6559 14.4438 42.4885 14.4252 42.3025L13.7835 38.0335C13.151 37.8475 12.4535 37.5592 11.6908 37.1685L8.39844 39.6518C8.26823 39.782 8.08222 39.8471 7.8404 39.8471C7.63579 39.8471 7.44048 39.7727 7.25446 39.6239C4.57589 37.1499 3.23661 35.6618 3.23661 35.1596C3.23661 34.9922 3.30171 34.8155 3.43192 34.6295C3.61793 34.369 3.99926 33.8761 4.57589 33.1507C5.15253 32.4252 5.58966 31.8579 5.88728 31.4487C5.45945 30.6302 5.13393 29.8676 4.91071 29.1607L0.669643 28.4911C0.483631 28.4725 0.325521 28.3888 0.195312 28.24C0.0651042 28.0725 0 27.8865 0 27.6819V22.5201C0 22.3341 0.0651042 22.1574 0.195312 21.99C0.325521 21.8039 0.47433 21.7016 0.641741 21.683L4.96652 21.0134C5.17113 20.3624 5.46875 19.6555 5.85938 18.8929C5.22693 18 4.38988 16.9304 3.34821 15.6842C3.21801 15.4795 3.1529 15.2935 3.1529 15.1261C3.1529 14.9029 3.21801 14.7169 3.34821 14.5681C3.75744 14.01 4.52009 13.1823 5.63616 12.0848C6.75223 10.9873 7.48698 10.4386 7.8404 10.4386C8.04502 10.4386 8.24033 10.5037 8.42634 10.6339L11.635 13.1451C12.2675 12.8103 12.9836 12.5126 13.7835 12.2522C13.9881 10.2433 14.202 8.81101 14.4252 7.95536C14.5554 7.50893 14.8345 7.28571 15.2623 7.28571H20.452C20.6566 7.28571 20.8426 7.36012 21.01 7.50893C21.1775 7.63914 21.2705 7.79725 21.2891 7.98326L21.9308 12.2522C22.5632 12.4382 23.2608 12.7266 24.0234 13.1172L27.3158 10.6339C27.4647 10.5037 27.6507 10.4386 27.8739 10.4386C28.0785 10.4386 28.2738 10.513 28.4598 10.6618C31.1384 13.1358 32.4777 14.6239 32.4777 15.1261C32.4777 15.2749 32.4126 15.4516 32.2824 15.6562C32.0592 15.9539 31.6685 16.4561 31.1105 17.1629C30.5525 17.8698 30.1339 18.4278 29.8549 18.8371C30.2827 19.7299 30.599 20.4926 30.8036 21.125L35.0446 21.7667C35.2307 21.8039 35.3888 21.9062 35.519 22.0737C35.6492 22.2225 35.7143 22.3992 35.7143 22.6038ZM53.5714 37.4754V41.3817C53.5714 41.6793 52.1856 41.9676 49.4141 42.2467C49.1909 42.7489 48.9118 43.2325 48.577 43.6975C49.5257 45.7995 50 47.083 50 47.548C50 47.6224 49.9628 47.6875 49.8884 47.7433C47.6191 49.064 46.4658 49.7243 46.4286 49.7243C46.2798 49.7243 45.8519 49.2872 45.1451 48.4129C44.4382 47.5387 43.9546 46.9062 43.6942 46.5156C43.3222 46.5528 43.0432 46.5714 42.8571 46.5714C42.6711 46.5714 42.3921 46.5528 42.0201 46.5156C41.7597 46.9062 41.276 47.5387 40.5692 48.4129C39.8624 49.2872 39.4345 49.7243 39.2857 49.7243C39.2485 49.7243 38.0952 49.064 35.8259 47.7433C35.7515 47.6875 35.7143 47.6224 35.7143 47.548C35.7143 47.083 36.1886 45.7995 37.1373 43.6975C36.8025 43.2325 36.5234 42.7489 36.3002 42.2467C33.5286 41.9676 32.1429 41.6793 32.1429 41.3817V37.4754C32.1429 37.1778 33.5286 36.8895 36.3002 36.6105C36.542 36.0711 36.8211 35.5874 37.1373 35.1596C36.1886 33.0577 35.7143 31.7742 35.7143 31.3092C35.7143 31.2347 35.7515 31.1696 35.8259 31.1138C35.9003 31.0766 36.2258 30.8906 36.8025 30.5558C37.3791 30.221 37.9278 29.9048 38.4487 29.6071C38.9695 29.3095 39.2485 29.1607 39.2857 29.1607C39.4345 29.1607 39.8624 29.5978 40.5692 30.4721C41.276 31.3278 41.7597 31.9509 42.0201 32.3415C42.3921 32.3043 42.6711 32.2857 42.8571 32.2857C43.0432 32.2857 43.3222 32.3043 43.6942 32.3415C44.6429 31.0208 45.4985 29.9792 46.2612 29.2165L46.4286 29.1607C46.503 29.1607 47.6563 29.8118 49.8884 31.1138C49.9628 31.1696 50 31.2347 50 31.3092C50 31.7742 49.5257 33.0577 48.577 35.1596C48.8932 35.5874 49.1722 36.0711 49.4141 36.6105C52.1856 36.8895 53.5714 37.1778 53.5714 37.4754ZM53.5714 8.90402V12.8103C53.5714 13.1079 52.1856 13.3962 49.4141 13.6752C49.1909 14.1775 48.9118 14.6611 48.577 15.1261C49.5257 17.228 50 18.5115 50 18.9766C50 19.051 49.9628 19.1161 49.8884 19.1719C47.6191 20.4926 46.4658 21.1529 46.4286 21.1529C46.2798 21.1529 45.8519 20.7158 45.1451 19.8415C44.4382 18.9673 43.9546 18.3348 43.6942 17.9442C43.3222 17.9814 43.0432 18 42.8571 18C42.6711 18 42.3921 17.9814 42.0201 17.9442C41.7597 18.3348 41.276 18.9673 40.5692 19.8415C39.8624 20.7158 39.4345 21.1529 39.2857 21.1529C39.2485 21.1529 38.0952 20.4926 35.8259 19.1719C35.7515 19.1161 35.7143 19.051 35.7143 18.9766C35.7143 18.5115 36.1886 17.228 37.1373 15.1261C36.8025 14.6611 36.5234 14.1775 36.3002 13.6752C33.5286 13.3962 32.1429 13.1079 32.1429 12.8103V8.90402C32.1429 8.6064 33.5286 8.31808 36.3002 8.03906C36.542 7.49963 36.8211 7.016 37.1373 6.58817C36.1886 4.48623 35.7143 3.20275 35.7143 2.73772C35.7143 2.66332 35.7515 2.59821 35.8259 2.54241C35.9003 2.50521 36.2258 2.3192 36.8025 1.98437C37.3791 1.64955 37.9278 1.33333 38.4487 1.03571C38.9695 0.738094 39.2485 0.589284 39.2857 0.589284C39.4345 0.589284 39.8624 1.02641 40.5692 1.90067C41.276 2.75632 41.7597 3.37946 42.0201 3.77009C42.3921 3.73289 42.6711 3.71428 42.8571 3.71428C43.0432 3.71428 43.3222 3.73289 43.6942 3.77009C44.6429 2.4494 45.4985 1.40774 46.2612 0.645088L46.4286 0.589284C46.503 0.589284 47.6563 1.24033 49.8884 2.54241C49.9628 2.59821 50 2.66332 50 2.73772C50 3.20275 49.5257 4.48623 48.577 6.58817C48.8932 7.016 49.1722 7.49963 49.4141 8.03906C52.1856 8.31808 53.5714 8.6064 53.5714 8.90402Z",
        },
        {
          title: "Seller Enabler Network",
          body: "Get access to our trusted seller-enabler network with ready-made solutions and customised offerings to manage all your global e-commerce needs",
          svgPath:
            "M31.529 13.8002L31.9754 8.91741H7.31027L8.62165 23.817H25.6975L25.0837 30.1786L19.5871 31.6574L14.1183 30.1786L13.7556 26.2723H8.87277L9.48661 34.029L19.5871 36.8192H19.6987V36.7913L29.7154 34.029L31.1105 18.8504H13.1417L12.7232 13.8002H31.529ZM0 0.714284H39.2857L35.7143 40.8371L19.5871 45.3571L3.57143 40.8371L0 0.714284Z",
        },
      ],
    },

    careers: {
      heading: "Careers @ goGlocal",
      title: "Growing & going far together",
      image: "career-image.png",
      description:
        "We believe in the power of a small group of thoughtful, committed, and smart individuals aspiring to change the world. A crew of creators from varying backgrounds and points of view are reimagining and reinventing the existing complexities of Global e-commerce by offering the best and most simplified selling experience.",
      description_2: "We are looking for people who dare to dream ",
      description_3: "Come fly with us. ",
      link: "/",
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
        <div className="absolute top-0 left-0 white-rad-grad md:w-[3000px] md:h-[1200px] -translate-x-1/2 -translate-y-1/2 z-[1]"></div>

        <div className="page-bg z-[10] static">
          <div className="page-container main ">
            {/* Hero Section */}
            <div className="w-full md:h-[50rem] overflow-y-hidden flex flex-col md:flex-row justify-center items-start gap-5 md:gap-10 xl:gap-24 px-5 py-5 md:px-5 md:py-5 lg:px-20 lg:py-10">
              <div className="flex flex-col gap-5 w-fit max-w-lg pt-[5%]">
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="main-heading text-dark-1 dark:text-light-1"
                >
                  {data.hero.title}
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="subtitle text-dark-2 dark:text-light-2 max-w-md"
                >
                  {data.hero.subtitle}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-row items-center gap-4 pt-2 md:pt-6"
                >
                  <button
                    className="btn-primary"
                    onClick={() => router.push("/connect/seller")}
                  >
                    Get Started
                  </button>
                </motion.div>
              </div>
              <div className="w-fit h-full max-h-full justify-self-end">
                <div className="w-full h-full max-h-full flex items-center justify-center mx-auto  ">
                  <Image
                    className="w-fit h-full object-contain z-10 max-h-full"
                    src={`${data.hero.image}`}
                    alt="hero image"
                    loading="lazy"
                    width="2000"
                    height="2000"
                  />
                  <div className="image_background_gradient z-9"></div>
                </div>
              </div>
            </div>
            {/* vision and mission */}
            <div className="w-full min-h-[30rem] flex flex-col md:flex-row justify-center main-light-background dark:bg-[#880ed438] text-gray-50 overflow-y-hidden items-center gap-4 md:gap-32 lg:gap-56 xl:gap-72 px-5 py-10 lg:px-20 lg:py-10">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative w-full h-full md:w-fit"
              >
                <div className="flex items-center justify-center mx-auto  ">
                  <Image
                    className="w-auto h-56 md:h-72 lg:h-[25rem] object-contain"
                    src={`/asset/${data.cta.image}`}
                    alt="hero image"
                    loading="lazy"
                    width="200"
                    height="400"
                  />
                </div>

                <div className="image_background_gradient"></div>
              </motion.div>
              <div className="flex flex-col gap-7 max-w-[400px] justify-self-center">
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="heading-2 heading-color2"
                  >
                    Vision
                  </motion.h2>
                  <p className="subtitle heading-color2">
                    Redefining global selling
                  </p>
                </div>
                <div className="">
                  <h2 className="heading-2 heading-color2">Mission</h2>
                  <h2 className="subtitle  heading-color2">
                    Simplify and maximize the global potential for every Indian
                    seller
                  </h2>
                </div>
                <button
                  className="btn-primary w-fit"
                  onClick={() => router.push("/about")}
                >
                  Know More
                </button>
              </div>
            </div>
            {/* Why goglocal */}
            <div className="flex justify-center flex-col items-center px-2 py-6 md:py-12">
              <h2 className="main-heading2">Why goGlocal?</h2>
              <p className="subtitle md:mt-2">
                Hassle free exporting starts here
              </p>

              {data.features.list.map((feature, index) => {
                return (
                  <div
                    key={index}
                    className={`flex ${
                      feature.imageRight
                        ? "flex-col-reverse md:flex-row"
                        : "flex-col-reverse md:flex-row-reverse"
                    } justify-center items-center mx-auto gap-4 md:gap-32 lg:gap-56 xl:gap-72 py-12 px-5 md:px-0 md:py-20`}
                  >
                    <div className="w-full md:w-2/4 max-w-lg flex flex-col items-start justify-start gap-4 mt-10 md:mt-0 max-w-[400px]">
                      <h2 className="heading-4 text-dark-1 dark:text-light-2">
                        {feature.title}
                      </h2>
                      {feature.points.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-row gap-4 items-center"
                        >
                          <div>
                            <Tick />
                          </div>
                          <div>
                            <h2 className="body-2 text-dark-2 dark:text-light-2">
                              {item}
                            </h2>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="relative w-full h-full md:w-fit">
                      <div className="flex items-center justify-center mx-auto  ">
                        <Image
                          className="w-auto h-48 md:h-72 lg:h-80 "
                          src={`/asset/hero/${feature.image}`}
                          alt="hero image"
                          loading="lazy"
                          width="200"
                          height="400"
                        />
                      </div>

                      <div className="image_background_gradient"></div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Features */}
            <div className="w-full">
              <Features1 />
            </div>

            {/* products */}
            <div className="flex justify-center flex-col items-center px-2 py-6 md:py-12">
              <h2 className="main-heading2">Our Products</h2>
              <p className="subtitle md:mt-2 text-center">
                Converting the world into one big shopping mall with our
                PRODUCTS
              </p>

              <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:gap-10 mt-5 md:mt-10">
                {data.product.list.map((pr, index) => {
                  return (
                    <div
                      key={index}
                      className={`flex flex-col items-center flex-wrap rounded-[30px] shadow-xl px-[30px] py-[40px] w-4/5 md:w-full max-w-[350px] gap-3 md:gap-5`}
                    >
                      <div className="w-full ">
                        <Image
                          className="w-full h-full"
                          src={`/asset/hero/${pr.image}`}
                          alt="hero image"
                          loading="lazy"
                          width="200"
                          height="400"
                        />
                      </div>
                      <h3 className="heading-4 font-semibold  text-center md:h-[70px]">
                        {pr.title}
                      </h3>
                      <button
                        className="btn-primary w-fit "
                        onClick={() => router.push(pr.link)}
                      >
                        Know More
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* programs */}
            <div className="flex justify-center flex-col items-center px-5 md:px-2 py-6 md:py-12">
              <h2 className="main-heading2">Our Programs</h2>
              <p className="subtitle md:mt-2">Something for everyone</p>

              <p className="subtitle font-noto mt-6 md:mt-16 text-[#463C4B] text-center">
                If you have a desire to take your brand global, we have a
                program for you
              </p>

              <div className="flex flex-row flex-wrap gap-12 justify-center items-center py-8 px-8">
                {data.service.list.map((item, index) => (
                  <div
                    key={index}
                    className={
                      `flex flex-col gap-4  items-center border-2 border-transparent h-72 w-80 bg-white rounded-xl px-4 py-4 shadow-xl ` +
                      (index === -1
                        ? "border-gradient border-opacity-100"
                        : "border-gray-200")
                    }
                  >
                    <div className="relative w-full h-1/2 flex items-center justify-center mx-auto ">
                      <Image
                        className="w-full h-full mx-auto object-contain"
                        src={`/asset/hero/${item.image}`}
                        alt="hero image"
                        loading="lazy"
                        width="300"
                        height="300"
                      />
                    </div>
                    <div className="flex items-center flex-col w-full">
                      <h3 className="heading-5 text-center text-dark-1 mt-5">
                        {item.title}
                      </h3>
                      <h2 className="small-text text-center text-dark-2 mt-1  max-w-[230px] w-full">
                        {item.subTitle}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="btn-primary w-fit md:mt-6"
                onClick={() => router.push("/connect/seller")}
              >
                Know More
              </button>
            </div>

            {/* integrations */}
            <div className="w-full min-h-[30rem] rounded-[0rem] md:mt-20 flex flex-col justify-center main-light-background dark:bg-[#880ed438] text-gray-50 overflow-y-hidden items-center  px-5 py-5 lg:px-10 lg:py-10">
              <h2 className="main-heading2 heading-color2">Integrations</h2>
              <p className="subtitle md:mt-2 heading-color2">
                Committed to your success
              </p>

              <div className="flex flex-row flex-wrap gap-4 justify-center items-center py-8 sm:px-2 w-full">
                {data.integrations.list.map((item, index) => (
                  <div
                    class="flex flex-col  sm:flex-row gap-x-8 gap-y-5 bg-[#ffffff] dark:bg-[#ac2eed29] w-fit shadow-lg rounded-xl px-6 py-8 h-full"
                    key={index}
                  >
                    <div class="dark:hidden flex justify-center">
                      <svg
                        width="54"
                        height="50"
                        viewBox="0 0 54 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="#1d1125" d={item.svgPath} />
                      </svg>
                    </div>
                    <div class="hidden dark:block flex justify-center">
                      <svg
                        width="54"
                        height="50"
                        viewBox="0 0 54 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="#ffffff" d={item.svgPath} />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div class=" heading-4 h-min heading-color2">
                        {item.title}
                      </div>
                      <div class=" font-noto max-w-[350px] subtitle">
                        {item.body}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* careers */}
            <div className="flex justify-center flex-col items-center px-2 py-6 md:py-12">
              <h2 className="main-heading2">Careers @ goGLOCAL</h2>
              <p className="subtitle md:mt-2">Growing & going far together</p>

              <div className="flex flex-col-reverse md:flex-row justify-center items-center mx-auto gap-4 md:gap-8 pt-8 px-4">
                <div className="w-full md:w-2/4 max-w-[600px] flex flex-col items-center md:items-start justify-start gap-4">
                  <h2 className="body-2 text-center md:text-start text-dark-2 dark:text-light-2">
                    {data.careers.description}
                  </h2>
                  <div>
                    <h2 className="body-2  text-center md:text-left text-dark-2 dark:text-light-2">
                      {data.careers.description_2}
                    </h2>
                    <h2 className="body-2 text-center md:text-left text-dark-2 dark:text-light-2">
                      {data.careers.description_3}
                    </h2>
                  </div>
                  <div>
                    <button
                      className="btn-primary w-fit "
                      onClick={() => router.push("/openposition")}
                    >
                      Join Us
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-fit h-full md:w-2/4 relative p-4">
                  <Image
                    className="w-full max-w-md h-full "
                    src={`/asset/hero/${data.careers.image}`}
                    alt="hero image"
                    loading="lazy"
                    width="2000"
                    height="2000"
                  />
                  <div className="image_background_gradient"></div>
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
