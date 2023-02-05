import React from "react";
import { motion, useScroll } from "framer-motion";
import Logo from "./icons/logo";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);

  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };
  return (
    <>
      <motion.div
        variants={variants}
        /** it's right here that we match our boolean state with these variant keys **/
        animate={hidden ? "hidden" : "visible"}
        /** I'm also going to add a custom easing curve and duration for the animation **/
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
      >
        <div className="relative container pt-0 mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center  py-6 lg:justify-start lg:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <Logo />
              </Link>
            </div>

            <div className="lg:hidden flex flex-row gap-4 items-center justify-center">
              <div>
                <button
                  type="button"
                  className=" rounded-md p-2 inline-flex items-center justify-center headingColor hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset "
                  onClick={() => setOpen(!open)}
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <nav className="hidden lg:flex lg:space-x-6 xl:space-x-8 justify-center items-center">
              <div className="px-3 ">
                <ThemeToggle />
              </div>
              <div
                className={
                  router.pathname === "/about"
                    ? "small-text font-medium text-[#1D1125] cursor-pointer tracking-wider"
                    : "small-text font-medium text-dark-2 dark:text-light-2 hover:text-[#1D1125] cursor-pointer tracking-wider"
                }
              >
                <Link href="/about">ABOUT</Link>
              </div>

              {/* Button */}
              <div className="relative">
                <button
                  type="button"
                  className="
   group rounded-md text-gray-500 inline-flex items-center text-base font-medium  '
  "
                  onClick={() => setFlyer(!flyer)}
                >
                  <span
                    className={
                      router.pathname == "/products"
                        ? "small-text font-medium text-[#1D1125] cursor-pointer tracking-wider"
                        : "small-text font-medium text-dark-2 dark:text-light-2 hover:text-[#1D1125] cursor-pointer tracking-wider"
                    }
                  >
                    PRODUCTS
                  </span>

                  <svg
                    className={
                      flyer === true
                        ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  onMouseLeave={() => setFlyer(false)}
                  className={
                    flyer
                      ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 bg-white mt-4 transform px-2 w-max max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      : " opacity-0 pointer-none translate-y-1 absolute z-10  mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  }
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-3 sm:gap-2 p-1">
                      <Link href="/product/1">
                        <p className=" flex items-start rounded-md  cursor-pointer hover:bg-gray-100  sm:px-4 sm:py-2 ">
                          <div className="ml-2">
                            <p className="text-base font-medium text-gray-900">
                              Seller Central
                            </p>
                          </div>
                        </p>
                      </Link>
                      <Link href="/product/2">
                        <p className="flex items-start rounded-md  cursor-pointer  hover:bg-gray-100  sm:px-4 sm:py-2">
                          <div className="ml-2">
                            <p className="text-base font-medium text-gray-900">
                              Global Check-in Check-out
                            </p>
                          </div>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* End Butto  */}

              <div
                className={
                  router.pathname == "/service"
                    ? "small-text font-medium text-[#1D1125] cursor-pointer tracking-wider"
                    : "small-text font-medium text-dark-2 dark:text-light-2 hover:text-[#1D1125] cursor-pointer tracking-wider"
                }
              >
                <Link href="/service"> SOLUTIONS</Link>
              </div>

              <div
                className={
                  router.pathname == "/careers"
                    ? "small-text font-medium text-[#1D1125] cursor-pointer tracking-wider"
                    : "small-text font-medium text-dark-2 dark:text-light-2 hover:text-[#1D1125] cursor-pointer tracking-wider"
                }
              >
                <Link href="/careers">CAREERS</Link>
              </div>
              <Link href="#">
                <p className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm small-text tracking-wider font-medium text-black accent-grad">
                  SIGN IN
                </p>
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile System */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
            className={
              open
                ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2  transform origin-top-right lg:hidden"
                : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
            }
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 headerBackground divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link href="/" className="">
                      <Logo />
                    </Link>
                  </div>

                  <div className="lg:hidden flex flex-row gap-4 items-center justify-center">
                    <div>
                      <ThemeToggle />
                    </div>
                    <div>
                      <button
                        type="button"
                        className=" rounded-md p-2 inline-flex items-center justify-center headingColor hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset "
                        onClick={() => setOpen(!open)}
                      >
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link
                      href="/about"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium headingColor">
                        ABOUT
                      </span>
                    </Link>
                    {/* <Link
                      href="/features"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium headingColor">
                        FEATURES
                      </span>
                    </Link> */}
                    <Link
                      href="/products"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium headingColor">
                        PRODUCTS
                      </span>
                    </Link>
                    <Link
                      href="/service"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium headingColor">
                        SOLUTIONS
                      </span>
                    </Link>

                    <Link
                      href="/careers"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium headingColor">
                        CAREERS
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium headingColor">
                        SIGN IN
                      </span>
                    </Link>
                  </nav>
                </div>
              </div>

              {/*  */}
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
