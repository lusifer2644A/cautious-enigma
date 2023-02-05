/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
// eslint-disable-next-line
import Image from "next/future/image";

import "swiper/css/bundle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
import KnowMore from "./button/KnowMore";

// install Swiper modules
SwiperCore.use([Navigation]);

export default function Index() {
  const data = [{}];
  return (
    <div className=" relative h-full">
      <div className="py-2 px-4 md:px-8 lg:px-12 relative bg-[#C77AEC] h-full bg-opacity-20 dark:feature-dark-bg flex flex-col items-center justify-center ">
        <div className="mainDiv h-full mt-2 max-w-[1260px]">
          <Swiper
            slidesPerView={"auto"}
            slidesPerGroupSkip={3}
            grabCursor={true}
            loopFillGroupWithBlank={true}
            loop={true}
            navigation={{
              prevEl: "#prev",
              nextEl: "#next",
            }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              1336: {
                slidesPerView: 1,
              },
            }}
            className="swiper mySwiper"
          >
            <SwiperSlide className="swiper-slide  h-full">
              <div className="flex flex-col">
                <div className="flex flex-row gap-20 w-full h-[30rem] sm:h-[25rem] md:h-[30rem] items-start">
                  <div className="w-full md:w-8/12  ">
                    <div className="flex flex-col gap-4 items-start">
                      <h2 className="heading headingColor-2 text-left">
                        Enabling Glocal e-commerce
                      </h2>
                      <p className="text-left headingColor body-2">
                        Set-up your glocal e-commerce store in just three clicks
                        and know what, where, how to sell around the world
                      </p>
                      <div className="pt-2 flex-col gap-4">
                        <div className="block hidden ">
                          <Image
                            className="h-[30rem] w-full object-contain py-0 px-2 md:px-10 block dark:hidden"
                            src={`/asset/feature-slide/feature-slide-1.png`}
                            alt="hero image"
                            loading="lazy"
                            width="400"
                            height="400"
                          />
                          <Image
                            className="h-[30rem] w-full px-2 md:px-10 hidden dark:block object-contain"
                            src={`/asset/feature-slide/feature-slide-1-dark.png`}
                            alt="hero image"
                            loading="lazy"
                            width="400"
                            height="400"
                          />
                        </div>
                        <div className="flex flex-col gap-6 pt-4 md:pt-8">
                          <div className="flex flex-row gap-2 items-center">
                            <div className="p-2 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.1875 20.0853V7.13456C1.1875 5.50757 1.86875 3.94722 3.08139 2.79677C4.29403 1.64632 5.93872 1 7.65365 1H17.7121C18.5613 1 19.4021 1.15868 20.1866 1.46697C20.9711 1.77526 21.6839 2.22712 22.2844 2.79677C22.8848 3.36642 23.3611 4.04268 23.6861 4.78696C24.011 5.53124 24.1783 6.32895 24.1783 7.13456V16.6772C24.1783 17.4828 24.011 18.2805 23.6861 19.0248C23.3611 19.7691 22.8848 20.4453 22.2844 21.015C21.6839 21.5846 20.9711 22.0365 20.1866 22.3448C19.4021 22.6531 18.5613 22.8118 17.7121 22.8118H4.06135C3.29915 22.8118 2.56818 22.5245 2.02923 22.0132C1.49028 21.5019 1.1875 20.8084 1.1875 20.0853V20.0853Z"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M6.93555 11.9061H11.9648C12.727 11.9061 13.4579 12.1933 13.9969 12.7046C14.5358 13.2159 14.8386 13.9094 14.8386 14.6325C14.8386 15.3556 14.5358 16.0491 13.9969 16.5604C13.4579 17.0717 12.727 17.359 11.9648 17.359H6.93555V7.81636C6.93555 7.45481 7.08694 7.10806 7.35641 6.85241C7.62589 6.59675 7.99137 6.45312 8.37247 6.45312H10.5279C11.29 6.45312 12.021 6.74038 12.56 7.25169C13.0989 7.763 13.4017 8.45649 13.4017 9.17959C13.4017 9.9027 13.0989 10.5962 12.56 11.1075C12.021 11.6188 11.29 11.9061 10.5279 11.9061H8.37247"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M18.4307 17.3594H18.446"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Develop digital brands with impactful product
                              catalogues
                            </div>
                          </div>
                          <div className="flex flex-row gap-2 items-center">
                            <div className="p-2 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.92659 6.37939C4.92628 6.17465 5.01128 5.97808 5.16307 5.83254L5.17128 5.82475C5.32469 5.68074 5.53188 5.6001 5.74769 5.6004H9.03209C9.24986 5.6004 9.45871 5.68247 9.61269 5.82856C9.76668 5.97465 9.85319 6.17279 9.85319 6.37939C9.85319 6.58599 9.76668 6.78413 9.61269 6.93022C9.45871 7.07631 9.24986 7.15838 9.03209 7.15838H7.72982L9.61343 8.94383C9.76761 9.0901 9.85422 9.28849 9.85422 9.49536C9.85422 9.70222 9.76761 9.90061 9.61343 10.0469C9.45924 10.1932 9.25013 10.2753 9.03209 10.2753C8.81404 10.2753 8.60493 10.1932 8.45075 10.0469L6.56879 8.25988V9.49536C6.56879 9.70196 6.48228 9.9001 6.3283 10.0462C6.17431 10.1923 5.96546 10.2743 5.74769 10.2743C5.52992 10.2743 5.32107 10.1923 5.16709 10.0462C5.0131 9.9001 4.92659 9.70196 4.92659 9.49536V6.37939ZM4.989 17.5828C4.9478 17.4885 4.92659 17.3874 4.92659 17.2853V14.1693C4.92659 13.9627 5.0131 13.7646 5.16709 13.6185C5.32107 13.4724 5.52992 13.3903 5.74769 13.3903C5.96546 13.3903 6.17431 13.4724 6.3283 13.6185C6.48228 13.7646 6.56879 13.9627 6.56879 14.1693V15.4048L8.45075 13.6178C8.52709 13.5453 8.61772 13.4879 8.71747 13.4487C8.81721 13.4095 8.92412 13.3893 9.03209 13.3893C9.14005 13.3893 9.24696 13.4095 9.34671 13.4487C9.44645 13.4879 9.53708 13.5453 9.61343 13.6178C9.68977 13.6902 9.75033 13.7762 9.79164 13.8708C9.83296 13.9654 9.85422 14.0669 9.85422 14.1693C9.85422 14.2717 9.83296 14.3732 9.79164 14.4678C9.75033 14.5624 9.68977 14.6484 9.61343 14.7208L7.72982 16.5063H9.03209C9.24986 16.5063 9.45871 16.5883 9.61269 16.7344C9.76668 16.8805 9.85319 17.0787 9.85319 17.2853C9.85319 17.4919 9.76668 17.69 9.61269 17.8361C9.45871 17.9822 9.24986 18.0643 9.03209 18.0643H5.74277C5.5808 18.0638 5.4226 18.0179 5.28815 17.9322C5.1537 17.8465 5.04903 17.7249 4.98735 17.5828H4.989ZM17.5567 5.6596C17.652 5.69699 17.7423 5.75308 17.8195 5.82475L17.8277 5.83254C17.9792 5.97827 18.0641 6.17471 18.0642 6.37939V9.49536C18.0642 9.70196 17.9777 9.9001 17.8237 10.0462C17.6697 10.1923 17.4608 10.2743 17.2431 10.2743C17.0253 10.2743 16.8165 10.1923 16.6625 10.0462C16.5085 9.9001 16.422 9.70196 16.422 9.49536V8.25988L14.54 10.0469C14.3858 10.1932 14.1767 10.2753 13.9587 10.2753C13.7406 10.2753 13.5315 10.1932 13.3773 10.0469C13.2232 9.90061 13.1365 9.70222 13.1365 9.49536C13.1365 9.28849 13.2232 9.0901 13.3773 8.94383L15.2609 7.15838H13.9587C13.7409 7.15838 13.5321 7.07631 13.3781 6.93022C13.2241 6.78413 13.1376 6.58599 13.1376 6.37939C13.1376 6.17279 13.2241 5.97465 13.3781 5.82856C13.5321 5.68247 13.7409 5.6004 13.9587 5.6004H17.2431C17.3507 5.60044 17.4573 5.62056 17.5567 5.6596ZM17.8195 17.8399C17.666 17.9838 17.4589 18.0644 17.2431 18.0643H13.9587C13.7409 18.0643 13.5321 17.9822 13.3781 17.8361C13.2241 17.69 13.1376 17.4919 13.1376 17.2853C13.1376 17.0787 13.2241 16.8805 13.3781 16.7344C13.5321 16.5883 13.7409 16.5063 13.9587 16.5063H15.2609L13.3773 14.7208C13.301 14.6484 13.2404 14.5624 13.1991 14.4678C13.1578 14.3732 13.1365 14.2717 13.1365 14.1693C13.1365 14.0669 13.1578 13.9654 13.1991 13.8708C13.2404 13.7762 13.301 13.6902 13.3773 13.6178C13.4537 13.5453 13.5443 13.4879 13.6441 13.4487C13.7438 13.4095 13.8507 13.3893 13.9587 13.3893C14.0666 13.3893 14.1736 13.4095 14.2733 13.4487C14.373 13.4879 14.4637 13.5453 14.54 13.6178L16.422 15.4048V14.1693C16.422 13.9627 16.5085 13.7646 16.6625 13.6185C16.8165 13.4724 17.0253 13.3903 17.2431 13.3903C17.4608 13.3903 17.6697 13.4724 17.8237 13.6185C17.9777 13.7646 18.0642 13.9627 18.0642 14.1693V17.2853C18.0641 17.4899 17.9792 17.6864 17.8277 17.8321L17.8195 17.8399ZM0 4.04242C0 3.21601 0.346033 2.42345 0.961977 1.8391C1.57792 1.25474 2.41332 0.926453 3.2844 0.926453H19.7064C20.5774 0.926453 21.4128 1.25474 22.0288 1.8391C22.6447 2.42345 22.9908 3.21601 22.9908 4.04242V19.6222C22.9908 20.4486 22.6447 21.2412 22.0288 21.8256C21.4128 22.4099 20.5774 22.7382 19.7064 22.7382H3.2844C2.41332 22.7382 1.57792 22.4099 0.961977 21.8256C0.346033 21.2412 0 20.4486 0 19.6222V4.04242ZM3.2844 2.48443C2.84886 2.48443 2.43116 2.64858 2.12319 2.94076C1.81521 3.23294 1.6422 3.62921 1.6422 4.04242V19.6222C1.6422 20.0354 1.81521 20.4317 2.12319 20.7239C2.43116 21.0161 2.84886 21.1802 3.2844 21.1802H19.7064C20.1419 21.1802 20.5596 21.0161 20.8676 20.7239C21.1756 20.4317 21.3486 20.0354 21.3486 19.6222V4.04242C21.3486 3.62921 21.1756 3.23294 20.8676 2.94076C20.5596 2.64858 20.1419 2.48443 19.7064 2.48443H3.2844Z"
                                  fill="#B5A3C0"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Develop digital brands with impactful product
                              catalogues
                            </div>
                          </div>{" "}
                          <div className="flex flex-row gap-2 items-center">
                            <div className="px-2 py-3 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="25"
                                height="16"
                                viewBox="0 0 25 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.9673 0.601432H15.608V0.960663V2.51865V2.87788H15.9673H20.4744L14.3251 8.71189L11.0473 5.60225L11.0473 5.60221C10.8247 5.39107 10.5266 5.27555 10.2196 5.27555C9.91253 5.27555 9.61448 5.39107 9.39186 5.60221L9.39183 5.60225L0.940256 13.6204L0.66556 13.881L0.940256 14.1416L2.10129 15.2431L2.34853 15.4777L2.59578 15.2431L10.2196 8.01027L13.4973 11.1199L13.4974 11.12C13.72 11.3311 14.018 11.4466 14.3251 11.4466C14.6321 11.4466 14.9302 11.3311 15.1528 11.12L15.1528 11.1199L22.1768 4.45612V8.75057V9.10981H22.5361H24.1783H24.5375V8.75057V0.960663V0.601432H24.1783H15.9673Z"
                                  fill="#B5A3C0"
                                  stroke="#B5A3C0"
                                  stroke-width="0.718461"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Develop digital brands with impactful product
                              catalogues
                            </div>
                          </div>{" "}
                        </div>
                        <div className="pt-4">
                          <KnowMore path="/features/2">Know More</KnowMore>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-4/12 ">
                    <Image
                      className="h-full w-full md:p-4 max-h-[400px]  block dark:hidden scale-110"
                      src={`/asset/feature-slide/feature-slide-1.png`}
                      alt="hero image"
                      loading="lazy"
                      width="400"
                      height="400"
                    />
                    <Image
                      className="h-full w-full md:p-4 max-h-[400px]  hidden dark:block scale-110"
                      src={`/asset/feature-slide/feature-slide-1-dark.png`}
                      alt="hero image"
                      loading="lazy"
                      width="400"
                      height="400"
                    />

                    {/* feature-slide-1-dark */}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between pt-2 ">
                  <div className="flex flex-row items-center gap-3 pb-4">
                    <div className="heading headingColor-2">01</div>
                    <div>
                      <svg
                        width="60"
                        height="2"
                        viewBox="0 0 60 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.912598"
                          y1="0.91201"
                          x2="102.216"
                          y2="0.912009"
                          stroke="#463C4B"
                          stroke-width="0.718461"
                        />
                      </svg>
                    </div>
                    <div className="body-2 headingColor">02</div>
                    <div className="body-2 headingColor">03</div>
                    <div className="body-2 headingColor">04</div>
                    <div className="body-2 headingColor">05</div>
                    <div className="body-2 headingColor">06</div>
                    <div className="body-2 headingColor">07</div>
                    <div className="body-2 headingColor">08</div>
                  </div>
                  <div className="flex flex-row gap-3 md:gap-6">
                    <div id="prev">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="22.0337"
                          cy="22.5535"
                          r="21.6408"
                          fill="white"
                          stroke="#9C4AD3"
                          stroke-width="0.718461"
                        />
                        <path
                          d="M14.1528 22.3414L24.2365 31.908L25.6482 30.5686L16.9763 22.3414L25.6482 14.1142L24.2365 12.7748L14.1528 22.3414Z"
                          fill="#9C4AD3"
                        />
                      </svg>
                    </div>
                    <div id="next">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="22.0337"
                          cy="22.5535"
                          r="21.6408"
                          fill="white"
                          stroke="#9C4AD3"
                          stroke-width="0.718461"
                        />
                        <path
                          d="M29.981 22.3417L19.8973 12.7751L18.4856 14.1145L27.1575 22.3417L18.4856 30.5689L19.8973 31.9083L29.981 22.3417Z"
                          fill="#9C4AD3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide  h-full">
              <div className="flex flex-col">
                <div className="flex flex-row gap-20 w-full h-[30rem] sm:h-[25rem] md:h-[30rem] items-start">
                  <div className="w-full h-full md:w-7/12  ">
                    <div className="flex flex-col gap-4 items-start">
                      <h2 className="heading headingColor-2 text-left">
                        Fast-Tracked Global Expansion
                      </h2>
                      <p className="text-left headingColor body-2">
                        Extremely efficient e-commerce export strategies for
                        international markets entry
                      </p>
                      <div className="pt-4 flex-col gap-4">
                        <div className="block hidden ">
                          <Image
                            className="h-[30rem] w-full object-contain py-0 px-2 md:p-20 block dark:hidden"
                            src={`/asset/feature-slide/feature-slide-2.png`}
                            alt="hero image"
                            loading="lazy"
                            width="400"
                            height="400"
                          />
                          <Image
                            className="h-[30rem] w-full px-2 hidden dark:block object-contain"
                            src={`/asset/feature-slide/feature-slide-2.png`}
                            alt="hero image"
                            loading="lazy"
                            width="400"
                            height="400"
                          />
                        </div>
                        <div className="flex flex-col gap-6 pt-4 md:pt-8">
                          <div className="flex flex-row gap-2 items-center">
                            <div className="p-2 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.1875 20.0853V7.13456C1.1875 5.50757 1.86875 3.94722 3.08139 2.79677C4.29403 1.64632 5.93872 1 7.65365 1H17.7121C18.5613 1 19.4021 1.15868 20.1866 1.46697C20.9711 1.77526 21.6839 2.22712 22.2844 2.79677C22.8848 3.36642 23.3611 4.04268 23.6861 4.78696C24.011 5.53124 24.1783 6.32895 24.1783 7.13456V16.6772C24.1783 17.4828 24.011 18.2805 23.6861 19.0248C23.3611 19.7691 22.8848 20.4453 22.2844 21.015C21.6839 21.5846 20.9711 22.0365 20.1866 22.3448C19.4021 22.6531 18.5613 22.8118 17.7121 22.8118H4.06135C3.29915 22.8118 2.56818 22.5245 2.02923 22.0132C1.49028 21.5019 1.1875 20.8084 1.1875 20.0853V20.0853Z"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M6.93555 11.9061H11.9648C12.727 11.9061 13.4579 12.1933 13.9969 12.7046C14.5358 13.2159 14.8386 13.9094 14.8386 14.6325C14.8386 15.3556 14.5358 16.0491 13.9969 16.5604C13.4579 17.0717 12.727 17.359 11.9648 17.359H6.93555V7.81636C6.93555 7.45481 7.08694 7.10806 7.35641 6.85241C7.62589 6.59675 7.99137 6.45312 8.37247 6.45312H10.5279C11.29 6.45312 12.021 6.74038 12.56 7.25169C13.0989 7.763 13.4017 8.45649 13.4017 9.17959C13.4017 9.9027 13.0989 10.5962 12.56 11.1075C12.021 11.6188 11.29 11.9061 10.5279 11.9061H8.37247"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M18.4307 17.3594H18.446"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Explore global market potential and scale business
                              exponentially
                            </div>
                          </div>
                          <div className="flex flex-row gap-2 items-center">
                            <div className="p-2 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.92659 6.37939C4.92628 6.17465 5.01128 5.97808 5.16307 5.83254L5.17128 5.82475C5.32469 5.68074 5.53188 5.6001 5.74769 5.6004H9.03209C9.24986 5.6004 9.45871 5.68247 9.61269 5.82856C9.76668 5.97465 9.85319 6.17279 9.85319 6.37939C9.85319 6.58599 9.76668 6.78413 9.61269 6.93022C9.45871 7.07631 9.24986 7.15838 9.03209 7.15838H7.72982L9.61343 8.94383C9.76761 9.0901 9.85422 9.28849 9.85422 9.49536C9.85422 9.70222 9.76761 9.90061 9.61343 10.0469C9.45924 10.1932 9.25013 10.2753 9.03209 10.2753C8.81404 10.2753 8.60493 10.1932 8.45075 10.0469L6.56879 8.25988V9.49536C6.56879 9.70196 6.48228 9.9001 6.3283 10.0462C6.17431 10.1923 5.96546 10.2743 5.74769 10.2743C5.52992 10.2743 5.32107 10.1923 5.16709 10.0462C5.0131 9.9001 4.92659 9.70196 4.92659 9.49536V6.37939ZM4.989 17.5828C4.9478 17.4885 4.92659 17.3874 4.92659 17.2853V14.1693C4.92659 13.9627 5.0131 13.7646 5.16709 13.6185C5.32107 13.4724 5.52992 13.3903 5.74769 13.3903C5.96546 13.3903 6.17431 13.4724 6.3283 13.6185C6.48228 13.7646 6.56879 13.9627 6.56879 14.1693V15.4048L8.45075 13.6178C8.52709 13.5453 8.61772 13.4879 8.71747 13.4487C8.81721 13.4095 8.92412 13.3893 9.03209 13.3893C9.14005 13.3893 9.24696 13.4095 9.34671 13.4487C9.44645 13.4879 9.53708 13.5453 9.61343 13.6178C9.68977 13.6902 9.75033 13.7762 9.79164 13.8708C9.83296 13.9654 9.85422 14.0669 9.85422 14.1693C9.85422 14.2717 9.83296 14.3732 9.79164 14.4678C9.75033 14.5624 9.68977 14.6484 9.61343 14.7208L7.72982 16.5063H9.03209C9.24986 16.5063 9.45871 16.5883 9.61269 16.7344C9.76668 16.8805 9.85319 17.0787 9.85319 17.2853C9.85319 17.4919 9.76668 17.69 9.61269 17.8361C9.45871 17.9822 9.24986 18.0643 9.03209 18.0643H5.74277C5.5808 18.0638 5.4226 18.0179 5.28815 17.9322C5.1537 17.8465 5.04903 17.7249 4.98735 17.5828H4.989ZM17.5567 5.6596C17.652 5.69699 17.7423 5.75308 17.8195 5.82475L17.8277 5.83254C17.9792 5.97827 18.0641 6.17471 18.0642 6.37939V9.49536C18.0642 9.70196 17.9777 9.9001 17.8237 10.0462C17.6697 10.1923 17.4608 10.2743 17.2431 10.2743C17.0253 10.2743 16.8165 10.1923 16.6625 10.0462C16.5085 9.9001 16.422 9.70196 16.422 9.49536V8.25988L14.54 10.0469C14.3858 10.1932 14.1767 10.2753 13.9587 10.2753C13.7406 10.2753 13.5315 10.1932 13.3773 10.0469C13.2232 9.90061 13.1365 9.70222 13.1365 9.49536C13.1365 9.28849 13.2232 9.0901 13.3773 8.94383L15.2609 7.15838H13.9587C13.7409 7.15838 13.5321 7.07631 13.3781 6.93022C13.2241 6.78413 13.1376 6.58599 13.1376 6.37939C13.1376 6.17279 13.2241 5.97465 13.3781 5.82856C13.5321 5.68247 13.7409 5.6004 13.9587 5.6004H17.2431C17.3507 5.60044 17.4573 5.62056 17.5567 5.6596ZM17.8195 17.8399C17.666 17.9838 17.4589 18.0644 17.2431 18.0643H13.9587C13.7409 18.0643 13.5321 17.9822 13.3781 17.8361C13.2241 17.69 13.1376 17.4919 13.1376 17.2853C13.1376 17.0787 13.2241 16.8805 13.3781 16.7344C13.5321 16.5883 13.7409 16.5063 13.9587 16.5063H15.2609L13.3773 14.7208C13.301 14.6484 13.2404 14.5624 13.1991 14.4678C13.1578 14.3732 13.1365 14.2717 13.1365 14.1693C13.1365 14.0669 13.1578 13.9654 13.1991 13.8708C13.2404 13.7762 13.301 13.6902 13.3773 13.6178C13.4537 13.5453 13.5443 13.4879 13.6441 13.4487C13.7438 13.4095 13.8507 13.3893 13.9587 13.3893C14.0666 13.3893 14.1736 13.4095 14.2733 13.4487C14.373 13.4879 14.4637 13.5453 14.54 13.6178L16.422 15.4048V14.1693C16.422 13.9627 16.5085 13.7646 16.6625 13.6185C16.8165 13.4724 17.0253 13.3903 17.2431 13.3903C17.4608 13.3903 17.6697 13.4724 17.8237 13.6185C17.9777 13.7646 18.0642 13.9627 18.0642 14.1693V17.2853C18.0641 17.4899 17.9792 17.6864 17.8277 17.8321L17.8195 17.8399ZM0 4.04242C0 3.21601 0.346033 2.42345 0.961977 1.8391C1.57792 1.25474 2.41332 0.926453 3.2844 0.926453H19.7064C20.5774 0.926453 21.4128 1.25474 22.0288 1.8391C22.6447 2.42345 22.9908 3.21601 22.9908 4.04242V19.6222C22.9908 20.4486 22.6447 21.2412 22.0288 21.8256C21.4128 22.4099 20.5774 22.7382 19.7064 22.7382H3.2844C2.41332 22.7382 1.57792 22.4099 0.961977 21.8256C0.346033 21.2412 0 20.4486 0 19.6222V4.04242ZM3.2844 2.48443C2.84886 2.48443 2.43116 2.64858 2.12319 2.94076C1.81521 3.23294 1.6422 3.62921 1.6422 4.04242V19.6222C1.6422 20.0354 1.81521 20.4317 2.12319 20.7239C2.43116 21.0161 2.84886 21.1802 3.2844 21.1802H19.7064C20.1419 21.1802 20.5596 21.0161 20.8676 20.7239C21.1756 20.4317 21.3486 20.0354 21.3486 19.6222V4.04242C21.3486 3.62921 21.1756 3.23294 20.8676 2.94076C20.5596 2.64858 20.1419 2.48443 19.7064 2.48443H3.2844Z"
                                  fill="#B5A3C0"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Sell more with effective product-market customer
                              strategy worldwide
                            </div>
                          </div>{" "}
                          <div className="flex flex-row gap-2 items-center">
                            <div className="px-2 py-3 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="25"
                                height="16"
                                viewBox="0 0 25 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.9673 0.601432H15.608V0.960663V2.51865V2.87788H15.9673H20.4744L14.3251 8.71189L11.0473 5.60225L11.0473 5.60221C10.8247 5.39107 10.5266 5.27555 10.2196 5.27555C9.91253 5.27555 9.61448 5.39107 9.39186 5.60221L9.39183 5.60225L0.940256 13.6204L0.66556 13.881L0.940256 14.1416L2.10129 15.2431L2.34853 15.4777L2.59578 15.2431L10.2196 8.01027L13.4973 11.1199L13.4974 11.12C13.72 11.3311 14.018 11.4466 14.3251 11.4466C14.6321 11.4466 14.9302 11.3311 15.1528 11.12L15.1528 11.1199L22.1768 4.45612V8.75057V9.10981H22.5361H24.1783H24.5375V8.75057V0.960663V0.601432H24.1783H15.9673Z"
                                  fill="#B5A3C0"
                                  stroke="#B5A3C0"
                                  stroke-width="0.718461"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Effective and efficient digital marketing
                              strategies to give businesses the required digital
                              push
                            </div>
                          </div>{" "}
                        </div>
                        <div className="pt-4">
                          <KnowMore path="/features/1">Know More</KnowMore>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-4/12 ">
                    <Image
                      className="h-full w-full md:p-4 max-h-[400px]  block dark:hidden"
                      src={`/asset/feature-slide/feature-slide-2.png`}
                      alt="hero image"
                      loading="lazy"
                      width="400"
                      height="400"
                    />
                    <Image
                      className="h-full w-full md:p-4 max-h-[400px]  hidden dark:block"
                      src={`/asset/feature-slide/feature-slide-2.png`}
                      alt="hero image"
                      loading="lazy"
                      width="400"
                      height="400"
                    />

                    {/* feature-slide-1-dark */}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-2 ">
                  <div className="flex flex-row items-center gap-3 pb-4">
                    <div className="body-2 headingColor">01</div>
                    <div className=" heading headingColor-2">02</div>
                    <div>
                      <svg
                        width="60"
                        height="2"
                        viewBox="0 0 60 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.912598"
                          y1="0.91201"
                          x2="102.216"
                          y2="0.912009"
                          stroke="#463C4B"
                          stroke-width="0.718461"
                        />
                      </svg>
                    </div>
                    <div className="body-2 headingColor">03</div>
                    <div className="body-2 headingColor">04</div>
                    <div className="body-2 headingColor">05</div>
                    <div className="body-2 headingColor">06</div>
                    <div className="body-2 headingColor">07</div>
                    <div className="body-2 headingColor">08</div>
                  </div>
                  <div className="flex flex-row gap-6">
                    <div id="prev">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="22.0337"
                          cy="22.5535"
                          r="21.6408"
                          fill="white"
                          stroke="#9C4AD3"
                          stroke-width="0.718461"
                        />
                        <path
                          d="M14.1528 22.3414L24.2365 31.908L25.6482 30.5686L16.9763 22.3414L25.6482 14.1142L24.2365 12.7748L14.1528 22.3414Z"
                          fill="#9C4AD3"
                        />
                      </svg>
                    </div>
                    <div id="next">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="22.0337"
                          cy="22.5535"
                          r="21.6408"
                          fill="white"
                          stroke="#9C4AD3"
                          stroke-width="0.718461"
                        />
                        <path
                          d="M29.981 22.3417L19.8973 12.7751L18.4856 14.1145L27.1575 22.3417L18.4856 30.5689L19.8973 31.9083L29.981 22.3417Z"
                          fill="#9C4AD3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide  h-full">
              <div className="flex flex-col">
                <div className="flex flex-row gap-20 w-full h-[30rem] sm:h-[25rem] md:h-[30rem] items-start">
                  <div className="w-full md:w-8/12  ">
                    <div className="flex flex-col gap-4 items-start">
                      <h2 className="heading headingColor-2 text-left">
                        Seller Enabler Network
                      </h2>
                      <p className="text-left headingColor body-2">
                        Ready made solutions for any pre selling needs to manage
                        and maximise your global selling
                      </p>
                      <div className="pt-4 flex-col gap-4">
                        <div className="block hidden ">
                          <Image
                            className="h-[30rem] w-full object-contain py-0 px-2 md:p-20 block dark:hidden"
                            src={`/asset/feature-slide/feature-slide-3.png`}
                            alt="hero image"
                            loading="lazy"
                            width="400"
                            height="400"
                          />
                          <Image
                            className="h-[30rem] w-full px-2 hidden dark:block object-contain"
                            src={`/asset/feature-slide/feature-slide-3.png`}
                            alt="hero image"
                            loading="lazy"
                            width="400"
                            height="400"
                          />
                        </div>
                        <div className="flex flex-col gap-6 pt-4 md:pt-8">
                          <div className="flex flex-row gap-2 items-center">
                            <div className="p-2 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.1875 20.0853V7.13456C1.1875 5.50757 1.86875 3.94722 3.08139 2.79677C4.29403 1.64632 5.93872 1 7.65365 1H17.7121C18.5613 1 19.4021 1.15868 20.1866 1.46697C20.9711 1.77526 21.6839 2.22712 22.2844 2.79677C22.8848 3.36642 23.3611 4.04268 23.6861 4.78696C24.011 5.53124 24.1783 6.32895 24.1783 7.13456V16.6772C24.1783 17.4828 24.011 18.2805 23.6861 19.0248C23.3611 19.7691 22.8848 20.4453 22.2844 21.015C21.6839 21.5846 20.9711 22.0365 20.1866 22.3448C19.4021 22.6531 18.5613 22.8118 17.7121 22.8118H4.06135C3.29915 22.8118 2.56818 22.5245 2.02923 22.0132C1.49028 21.5019 1.1875 20.8084 1.1875 20.0853V20.0853Z"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M6.93555 11.9061H11.9648C12.727 11.9061 13.4579 12.1933 13.9969 12.7046C14.5358 13.2159 14.8386 13.9094 14.8386 14.6325C14.8386 15.3556 14.5358 16.0491 13.9969 16.5604C13.4579 17.0717 12.727 17.359 11.9648 17.359H6.93555V7.81636C6.93555 7.45481 7.08694 7.10806 7.35641 6.85241C7.62589 6.59675 7.99137 6.45312 8.37247 6.45312H10.5279C11.29 6.45312 12.021 6.74038 12.56 7.25169C13.0989 7.763 13.4017 8.45649 13.4017 9.17959C13.4017 9.9027 13.0989 10.5962 12.56 11.1075C12.021 11.6188 11.29 11.9061 10.5279 11.9061H8.37247"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M18.4307 17.3594H18.446"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              One stop shop to help you with everything you need
                              to launch, manage and grow your e-commerce
                            </div>
                          </div>
                          <div className="flex flex-row gap-2 items-center">
                            <div className="p-2 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.92659 6.37939C4.92628 6.17465 5.01128 5.97808 5.16307 5.83254L5.17128 5.82475C5.32469 5.68074 5.53188 5.6001 5.74769 5.6004H9.03209C9.24986 5.6004 9.45871 5.68247 9.61269 5.82856C9.76668 5.97465 9.85319 6.17279 9.85319 6.37939C9.85319 6.58599 9.76668 6.78413 9.61269 6.93022C9.45871 7.07631 9.24986 7.15838 9.03209 7.15838H7.72982L9.61343 8.94383C9.76761 9.0901 9.85422 9.28849 9.85422 9.49536C9.85422 9.70222 9.76761 9.90061 9.61343 10.0469C9.45924 10.1932 9.25013 10.2753 9.03209 10.2753C8.81404 10.2753 8.60493 10.1932 8.45075 10.0469L6.56879 8.25988V9.49536C6.56879 9.70196 6.48228 9.9001 6.3283 10.0462C6.17431 10.1923 5.96546 10.2743 5.74769 10.2743C5.52992 10.2743 5.32107 10.1923 5.16709 10.0462C5.0131 9.9001 4.92659 9.70196 4.92659 9.49536V6.37939ZM4.989 17.5828C4.9478 17.4885 4.92659 17.3874 4.92659 17.2853V14.1693C4.92659 13.9627 5.0131 13.7646 5.16709 13.6185C5.32107 13.4724 5.52992 13.3903 5.74769 13.3903C5.96546 13.3903 6.17431 13.4724 6.3283 13.6185C6.48228 13.7646 6.56879 13.9627 6.56879 14.1693V15.4048L8.45075 13.6178C8.52709 13.5453 8.61772 13.4879 8.71747 13.4487C8.81721 13.4095 8.92412 13.3893 9.03209 13.3893C9.14005 13.3893 9.24696 13.4095 9.34671 13.4487C9.44645 13.4879 9.53708 13.5453 9.61343 13.6178C9.68977 13.6902 9.75033 13.7762 9.79164 13.8708C9.83296 13.9654 9.85422 14.0669 9.85422 14.1693C9.85422 14.2717 9.83296 14.3732 9.79164 14.4678C9.75033 14.5624 9.68977 14.6484 9.61343 14.7208L7.72982 16.5063H9.03209C9.24986 16.5063 9.45871 16.5883 9.61269 16.7344C9.76668 16.8805 9.85319 17.0787 9.85319 17.2853C9.85319 17.4919 9.76668 17.69 9.61269 17.8361C9.45871 17.9822 9.24986 18.0643 9.03209 18.0643H5.74277C5.5808 18.0638 5.4226 18.0179 5.28815 17.9322C5.1537 17.8465 5.04903 17.7249 4.98735 17.5828H4.989ZM17.5567 5.6596C17.652 5.69699 17.7423 5.75308 17.8195 5.82475L17.8277 5.83254C17.9792 5.97827 18.0641 6.17471 18.0642 6.37939V9.49536C18.0642 9.70196 17.9777 9.9001 17.8237 10.0462C17.6697 10.1923 17.4608 10.2743 17.2431 10.2743C17.0253 10.2743 16.8165 10.1923 16.6625 10.0462C16.5085 9.9001 16.422 9.70196 16.422 9.49536V8.25988L14.54 10.0469C14.3858 10.1932 14.1767 10.2753 13.9587 10.2753C13.7406 10.2753 13.5315 10.1932 13.3773 10.0469C13.2232 9.90061 13.1365 9.70222 13.1365 9.49536C13.1365 9.28849 13.2232 9.0901 13.3773 8.94383L15.2609 7.15838H13.9587C13.7409 7.15838 13.5321 7.07631 13.3781 6.93022C13.2241 6.78413 13.1376 6.58599 13.1376 6.37939C13.1376 6.17279 13.2241 5.97465 13.3781 5.82856C13.5321 5.68247 13.7409 5.6004 13.9587 5.6004H17.2431C17.3507 5.60044 17.4573 5.62056 17.5567 5.6596ZM17.8195 17.8399C17.666 17.9838 17.4589 18.0644 17.2431 18.0643H13.9587C13.7409 18.0643 13.5321 17.9822 13.3781 17.8361C13.2241 17.69 13.1376 17.4919 13.1376 17.2853C13.1376 17.0787 13.2241 16.8805 13.3781 16.7344C13.5321 16.5883 13.7409 16.5063 13.9587 16.5063H15.2609L13.3773 14.7208C13.301 14.6484 13.2404 14.5624 13.1991 14.4678C13.1578 14.3732 13.1365 14.2717 13.1365 14.1693C13.1365 14.0669 13.1578 13.9654 13.1991 13.8708C13.2404 13.7762 13.301 13.6902 13.3773 13.6178C13.4537 13.5453 13.5443 13.4879 13.6441 13.4487C13.7438 13.4095 13.8507 13.3893 13.9587 13.3893C14.0666 13.3893 14.1736 13.4095 14.2733 13.4487C14.373 13.4879 14.4637 13.5453 14.54 13.6178L16.422 15.4048V14.1693C16.422 13.9627 16.5085 13.7646 16.6625 13.6185C16.8165 13.4724 17.0253 13.3903 17.2431 13.3903C17.4608 13.3903 17.6697 13.4724 17.8237 13.6185C17.9777 13.7646 18.0642 13.9627 18.0642 14.1693V17.2853C18.0641 17.4899 17.9792 17.6864 17.8277 17.8321L17.8195 17.8399ZM0 4.04242C0 3.21601 0.346033 2.42345 0.961977 1.8391C1.57792 1.25474 2.41332 0.926453 3.2844 0.926453H19.7064C20.5774 0.926453 21.4128 1.25474 22.0288 1.8391C22.6447 2.42345 22.9908 3.21601 22.9908 4.04242V19.6222C22.9908 20.4486 22.6447 21.2412 22.0288 21.8256C21.4128 22.4099 20.5774 22.7382 19.7064 22.7382H3.2844C2.41332 22.7382 1.57792 22.4099 0.961977 21.8256C0.346033 21.2412 0 20.4486 0 19.6222V4.04242ZM3.2844 2.48443C2.84886 2.48443 2.43116 2.64858 2.12319 2.94076C1.81521 3.23294 1.6422 3.62921 1.6422 4.04242V19.6222C1.6422 20.0354 1.81521 20.4317 2.12319 20.7239C2.43116 21.0161 2.84886 21.1802 3.2844 21.1802H19.7064C20.1419 21.1802 20.5596 21.0161 20.8676 20.7239C21.1756 20.4317 21.3486 20.0354 21.3486 19.6222V4.04242C21.3486 3.62921 21.1756 3.23294 20.8676 2.94076C20.5596 2.64858 20.1419 2.48443 19.7064 2.48443H3.2844Z"
                                  fill="#B5A3C0"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Customised and automated solutions from a curated
                              set of experts
                            </div>
                          </div>{" "}
                          <div className="flex flex-row gap-2 items-center">
                            <div className="px-2 py-3 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="25"
                                height="16"
                                viewBox="0 0 25 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.9673 0.601432H15.608V0.960663V2.51865V2.87788H15.9673H20.4744L14.3251 8.71189L11.0473 5.60225L11.0473 5.60221C10.8247 5.39107 10.5266 5.27555 10.2196 5.27555C9.91253 5.27555 9.61448 5.39107 9.39186 5.60221L9.39183 5.60225L0.940256 13.6204L0.66556 13.881L0.940256 14.1416L2.10129 15.2431L2.34853 15.4777L2.59578 15.2431L10.2196 8.01027L13.4973 11.1199L13.4974 11.12C13.72 11.3311 14.018 11.4466 14.3251 11.4466C14.6321 11.4466 14.9302 11.3311 15.1528 11.12L15.1528 11.1199L22.1768 4.45612V8.75057V9.10981H22.5361H24.1783H24.5375V8.75057V0.960663V0.601432H24.1783H15.9673Z"
                                  fill="#B5A3C0"
                                  stroke="#B5A3C0"
                                  stroke-width="0.718461"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Efficient and economic solutions to catapult your
                              e-commerce business
                            </div>
                          </div>{" "}
                        </div>
                        <div className="pt-4">
                          <KnowMore path="/features/4">Know More</KnowMore>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-4/12 ">
                    <Image
                      className="h-full w-full md:p-4 max-h-[400px]  block dark:hidden"
                      src={`/asset/feature-slide/feature-slide-3.png`}
                      alt="hero image"
                      loading="lazy"
                      width="400"
                      height="400"
                    />
                    <Image
                      className="h-full w-full md:p-4 max-h-[400px]  hidden dark:block"
                      src={`/asset/feature-slide/feature-slide-3.png`}
                      alt="hero image"
                      loading="lazy"
                      width="400"
                      height="400"
                    />

                    {/* feature-slide-1-dark */}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between pt-2 ">
                  <div className="flex flex-row items-center gap-3 pb-4">
                    <div className="body-2 headingColor">01</div>

                    <div className="body-2 headingColor">02</div>
                    <div className=" heading headingColor-2">03</div>
                    <div>
                      <svg
                        width="60"
                        height="2"
                        viewBox="0 0 60 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.912598"
                          y1="0.91201"
                          x2="102.216"
                          y2="0.912009"
                          stroke="#463C4B"
                          stroke-width="0.718461"
                        />
                      </svg>
                    </div>
                    <div className="body-2 headingColor">04</div>
                    <div className="body-2 headingColor">05</div>
                    <div className="body-2 headingColor">06</div>
                    <div className="body-2 headingColor">07</div>
                    <div className="body-2 headingColor">08</div>
                  </div>
                  <div className="flex flex-row gap-6">
                    <div id="prev">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="22.0337"
                          cy="22.5535"
                          r="21.6408"
                          fill="white"
                          stroke="#9C4AD3"
                          stroke-width="0.718461"
                        />
                        <path
                          d="M14.1528 22.3414L24.2365 31.908L25.6482 30.5686L16.9763 22.3414L25.6482 14.1142L24.2365 12.7748L14.1528 22.3414Z"
                          fill="#9C4AD3"
                        />
                      </svg>
                    </div>
                    <div id="next">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="22.0337"
                          cy="22.5535"
                          r="21.6408"
                          fill="white"
                          stroke="#9C4AD3"
                          stroke-width="0.718461"
                        />
                        <path
                          d="M29.981 22.3417L19.8973 12.7751L18.4856 14.1145L27.1575 22.3417L18.4856 30.5689L19.8973 31.9083L29.981 22.3417Z"
                          fill="#9C4AD3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide  h-full">
              <div className="flex flex-col">
                <div className="flex flex-row gap-20 w-full h-[30rem] sm:h-[25rem] md:h-[30rem] items-start">
                  <div className="w-full md:w-8/12  ">
                    <div className="flex flex-col gap-4 items-start">
                      <h2 className="heading headingColor-2 text-left">
                        Access To The World
                      </h2>
                      <p className="text-left headingColor body-2">
                        Integrate your business with local and international
                        marketplaces and grow exponentially
                      </p>
                      <div className="pt-4 flex-col gap-4">
                        <div className="block hidden ">
                          <Image
                            className="h-[30rem] w-full object-contain py-0 px-2 md:p-20 block dark:hidden"
                            src={`/asset/feature-slide/feature-slide-4.png`}
                            alt="hero image"
                            loading="lazy"
                            width="400"
                            height="400"
                          />
                          <Image
                            className="h-[30rem] w-full px-2 hidden dark:block object-contain"
                            src={`/asset/feature-slide/feature-slide-4.png`}
                            alt="hero image"
                            loading="lazy"
                            width="400"
                            height="400"
                          />
                        </div>
                        <div className="flex flex-col gap-6 pt-4 md:pt-8">
                          <div className="flex flex-row gap-2 items-center">
                            <div className="p-2 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.1875 20.0853V7.13456C1.1875 5.50757 1.86875 3.94722 3.08139 2.79677C4.29403 1.64632 5.93872 1 7.65365 1H17.7121C18.5613 1 19.4021 1.15868 20.1866 1.46697C20.9711 1.77526 21.6839 2.22712 22.2844 2.79677C22.8848 3.36642 23.3611 4.04268 23.6861 4.78696C24.011 5.53124 24.1783 6.32895 24.1783 7.13456V16.6772C24.1783 17.4828 24.011 18.2805 23.6861 19.0248C23.3611 19.7691 22.8848 20.4453 22.2844 21.015C21.6839 21.5846 20.9711 22.0365 20.1866 22.3448C19.4021 22.6531 18.5613 22.8118 17.7121 22.8118H4.06135C3.29915 22.8118 2.56818 22.5245 2.02923 22.0132C1.49028 21.5019 1.1875 20.8084 1.1875 20.0853V20.0853Z"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M6.93555 11.9061H11.9648C12.727 11.9061 13.4579 12.1933 13.9969 12.7046C14.5358 13.2159 14.8386 13.9094 14.8386 14.6325C14.8386 15.3556 14.5358 16.0491 13.9969 16.5604C13.4579 17.0717 12.727 17.359 11.9648 17.359H6.93555V7.81636C6.93555 7.45481 7.08694 7.10806 7.35641 6.85241C7.62589 6.59675 7.99137 6.45312 8.37247 6.45312H10.5279C11.29 6.45312 12.021 6.74038 12.56 7.25169C13.0989 7.763 13.4017 8.45649 13.4017 9.17959C13.4017 9.9027 13.0989 10.5962 12.56 11.1075C12.021 11.6188 11.29 11.9061 10.5279 11.9061H8.37247"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M18.4307 17.3594H18.446"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Get connected to all major marketplaces worldwide
                              through a single link
                            </div>
                          </div>
                          <div className="flex flex-row gap-2 items-center">
                            <div className="p-2 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.92659 6.37939C4.92628 6.17465 5.01128 5.97808 5.16307 5.83254L5.17128 5.82475C5.32469 5.68074 5.53188 5.6001 5.74769 5.6004H9.03209C9.24986 5.6004 9.45871 5.68247 9.61269 5.82856C9.76668 5.97465 9.85319 6.17279 9.85319 6.37939C9.85319 6.58599 9.76668 6.78413 9.61269 6.93022C9.45871 7.07631 9.24986 7.15838 9.03209 7.15838H7.72982L9.61343 8.94383C9.76761 9.0901 9.85422 9.28849 9.85422 9.49536C9.85422 9.70222 9.76761 9.90061 9.61343 10.0469C9.45924 10.1932 9.25013 10.2753 9.03209 10.2753C8.81404 10.2753 8.60493 10.1932 8.45075 10.0469L6.56879 8.25988V9.49536C6.56879 9.70196 6.48228 9.9001 6.3283 10.0462C6.17431 10.1923 5.96546 10.2743 5.74769 10.2743C5.52992 10.2743 5.32107 10.1923 5.16709 10.0462C5.0131 9.9001 4.92659 9.70196 4.92659 9.49536V6.37939ZM4.989 17.5828C4.9478 17.4885 4.92659 17.3874 4.92659 17.2853V14.1693C4.92659 13.9627 5.0131 13.7646 5.16709 13.6185C5.32107 13.4724 5.52992 13.3903 5.74769 13.3903C5.96546 13.3903 6.17431 13.4724 6.3283 13.6185C6.48228 13.7646 6.56879 13.9627 6.56879 14.1693V15.4048L8.45075 13.6178C8.52709 13.5453 8.61772 13.4879 8.71747 13.4487C8.81721 13.4095 8.92412 13.3893 9.03209 13.3893C9.14005 13.3893 9.24696 13.4095 9.34671 13.4487C9.44645 13.4879 9.53708 13.5453 9.61343 13.6178C9.68977 13.6902 9.75033 13.7762 9.79164 13.8708C9.83296 13.9654 9.85422 14.0669 9.85422 14.1693C9.85422 14.2717 9.83296 14.3732 9.79164 14.4678C9.75033 14.5624 9.68977 14.6484 9.61343 14.7208L7.72982 16.5063H9.03209C9.24986 16.5063 9.45871 16.5883 9.61269 16.7344C9.76668 16.8805 9.85319 17.0787 9.85319 17.2853C9.85319 17.4919 9.76668 17.69 9.61269 17.8361C9.45871 17.9822 9.24986 18.0643 9.03209 18.0643H5.74277C5.5808 18.0638 5.4226 18.0179 5.28815 17.9322C5.1537 17.8465 5.04903 17.7249 4.98735 17.5828H4.989ZM17.5567 5.6596C17.652 5.69699 17.7423 5.75308 17.8195 5.82475L17.8277 5.83254C17.9792 5.97827 18.0641 6.17471 18.0642 6.37939V9.49536C18.0642 9.70196 17.9777 9.9001 17.8237 10.0462C17.6697 10.1923 17.4608 10.2743 17.2431 10.2743C17.0253 10.2743 16.8165 10.1923 16.6625 10.0462C16.5085 9.9001 16.422 9.70196 16.422 9.49536V8.25988L14.54 10.0469C14.3858 10.1932 14.1767 10.2753 13.9587 10.2753C13.7406 10.2753 13.5315 10.1932 13.3773 10.0469C13.2232 9.90061 13.1365 9.70222 13.1365 9.49536C13.1365 9.28849 13.2232 9.0901 13.3773 8.94383L15.2609 7.15838H13.9587C13.7409 7.15838 13.5321 7.07631 13.3781 6.93022C13.2241 6.78413 13.1376 6.58599 13.1376 6.37939C13.1376 6.17279 13.2241 5.97465 13.3781 5.82856C13.5321 5.68247 13.7409 5.6004 13.9587 5.6004H17.2431C17.3507 5.60044 17.4573 5.62056 17.5567 5.6596ZM17.8195 17.8399C17.666 17.9838 17.4589 18.0644 17.2431 18.0643H13.9587C13.7409 18.0643 13.5321 17.9822 13.3781 17.8361C13.2241 17.69 13.1376 17.4919 13.1376 17.2853C13.1376 17.0787 13.2241 16.8805 13.3781 16.7344C13.5321 16.5883 13.7409 16.5063 13.9587 16.5063H15.2609L13.3773 14.7208C13.301 14.6484 13.2404 14.5624 13.1991 14.4678C13.1578 14.3732 13.1365 14.2717 13.1365 14.1693C13.1365 14.0669 13.1578 13.9654 13.1991 13.8708C13.2404 13.7762 13.301 13.6902 13.3773 13.6178C13.4537 13.5453 13.5443 13.4879 13.6441 13.4487C13.7438 13.4095 13.8507 13.3893 13.9587 13.3893C14.0666 13.3893 14.1736 13.4095 14.2733 13.4487C14.373 13.4879 14.4637 13.5453 14.54 13.6178L16.422 15.4048V14.1693C16.422 13.9627 16.5085 13.7646 16.6625 13.6185C16.8165 13.4724 17.0253 13.3903 17.2431 13.3903C17.4608 13.3903 17.6697 13.4724 17.8237 13.6185C17.9777 13.7646 18.0642 13.9627 18.0642 14.1693V17.2853C18.0641 17.4899 17.9792 17.6864 17.8277 17.8321L17.8195 17.8399ZM0 4.04242C0 3.21601 0.346033 2.42345 0.961977 1.8391C1.57792 1.25474 2.41332 0.926453 3.2844 0.926453H19.7064C20.5774 0.926453 21.4128 1.25474 22.0288 1.8391C22.6447 2.42345 22.9908 3.21601 22.9908 4.04242V19.6222C22.9908 20.4486 22.6447 21.2412 22.0288 21.8256C21.4128 22.4099 20.5774 22.7382 19.7064 22.7382H3.2844C2.41332 22.7382 1.57792 22.4099 0.961977 21.8256C0.346033 21.2412 0 20.4486 0 19.6222V4.04242ZM3.2844 2.48443C2.84886 2.48443 2.43116 2.64858 2.12319 2.94076C1.81521 3.23294 1.6422 3.62921 1.6422 4.04242V19.6222C1.6422 20.0354 1.81521 20.4317 2.12319 20.7239C2.43116 21.0161 2.84886 21.1802 3.2844 21.1802H19.7064C20.1419 21.1802 20.5596 21.0161 20.8676 20.7239C21.1756 20.4317 21.3486 20.0354 21.3486 19.6222V4.04242C21.3486 3.62921 21.1756 3.23294 20.8676 2.94076C20.5596 2.64858 20.1419 2.48443 19.7064 2.48443H3.2844Z"
                                  fill="#B5A3C0"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Omni-channel retail plug-in to online and offline
                              stores and seamless account management
                            </div>
                          </div>{" "}
                          <div className="flex flex-row gap-2 items-center">
                            <div className="px-2 py-3 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="25"
                                height="16"
                                viewBox="0 0 25 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.9673 0.601432H15.608V0.960663V2.51865V2.87788H15.9673H20.4744L14.3251 8.71189L11.0473 5.60225L11.0473 5.60221C10.8247 5.39107 10.5266 5.27555 10.2196 5.27555C9.91253 5.27555 9.61448 5.39107 9.39186 5.60221L9.39183 5.60225L0.940256 13.6204L0.66556 13.881L0.940256 14.1416L2.10129 15.2431L2.34853 15.4777L2.59578 15.2431L10.2196 8.01027L13.4973 11.1199L13.4974 11.12C13.72 11.3311 14.018 11.4466 14.3251 11.4466C14.6321 11.4466 14.9302 11.3311 15.1528 11.12L15.1528 11.1199L22.1768 4.45612V8.75057V9.10981H22.5361H24.1783H24.5375V8.75057V0.960663V0.601432H24.1783H15.9673Z"
                                  fill="#B5A3C0"
                                  stroke="#B5A3C0"
                                  stroke-width="0.718461"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Dynamic listings powered with customised language,
                              products, pricing
                            </div>
                          </div>{" "}
                        </div>
                        <div className="pt-4">
                          <KnowMore path="/features/3">Know More</KnowMore>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-4/12 ">
                    <Image
                      className="h-full w-full md:p-4 max-h-[400px]  block dark:hidden"
                      src={`/asset/feature-slide/feature-slide-4.png`}
                      alt="hero image"
                      loading="lazy"
                      width="400"
                      height="400"
                    />
                    <Image
                      className="h-full w-full md:p-4 max-h-[400px]  hidden dark:block"
                      src={`/asset/feature-slide/feature-slide-4.png`}
                      alt="hero image"
                      loading="lazy"
                      width="400"
                      height="400"
                    />

                    {/* feature-slide-1-dark */}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between pt-2 ">
                  <div className="flex flex-row items-center gap-3 pb-4">
                    <div className="body-2 headingColor">01</div>

                    <div className="body-2 headingColor">02</div>

                    <div className="body-2 headingColor">03</div>
                    <div className=" heading headingColor-2">04</div>
                    <div>
                      <svg
                        width="60"
                        height="2"
                        viewBox="0 0 60 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.912598"
                          y1="0.91201"
                          x2="102.216"
                          y2="0.912009"
                          stroke="#463C4B"
                          stroke-width="0.718461"
                        />
                      </svg>
                    </div>
                    <div className="body-2 headingColor">05</div>
                    <div className="body-2 headingColor">06</div>
                    <div className="body-2 headingColor">07</div>
                    <div className="body-2 headingColor">08</div>
                  </div>
                  <div className="flex flex-row gap-6">
                    <div id="prev">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="22.0337"
                          cy="22.5535"
                          r="21.6408"
                          fill="white"
                          stroke="#9C4AD3"
                          stroke-width="0.718461"
                        />
                        <path
                          d="M14.1528 22.3414L24.2365 31.908L25.6482 30.5686L16.9763 22.3414L25.6482 14.1142L24.2365 12.7748L14.1528 22.3414Z"
                          fill="#9C4AD3"
                        />
                      </svg>
                    </div>
                    <div id="next">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="22.0337"
                          cy="22.5535"
                          r="21.6408"
                          fill="white"
                          stroke="#9C4AD3"
                          stroke-width="0.718461"
                        />
                        <path
                          d="M29.981 22.3417L19.8973 12.7751L18.4856 14.1145L27.1575 22.3417L18.4856 30.5689L19.8973 31.9083L29.981 22.3417Z"
                          fill="#9C4AD3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide  h-full">
              <div className="flex flex-col">
                <div className="flex flex-row gap-20 w-full h-[30rem] sm:h-[25rem] md:h-[30rem] items-start">
                  <div className="w-full md:w-8/12  ">
                    <div className="flex flex-col gap-4 items-start">
                      <h2 className="heading headingColor-2 text-left">
                        Glocal e-commerce Fulfilment
                      </h2>
                      <p className="text-left headingColor body-2">
                        Seamless national and international omnichannel order
                        fulfillment to super-charge businesses
                      </p>
                      <div className="pt-4 flex-col gap-4">
                        <div className="block hidden ">
                          <Image
                            className="h-[30rem] w-full object-contain py-0 px-2 md:p-20 block dark:hidden "
                            src={`/asset/feature-slide/feature-slide-5.png`}
                            alt="hero image"
                            loading="lazy"
                            width="400"
                            height="400"
                          />
                          <Image
                            className="h-[30rem] w-full px-2 hidden dark:block object-contain"
                            src={`/asset/feature-slide/feature-slide-5.png`}
                            alt="hero image"
                            loading="lazy"
                            width="400"
                            height="400"
                          />
                        </div>
                        <div className="flex flex-col gap-6 pt-4 md:pt-8">
                          <div className="flex flex-row gap-2 items-center">
                            <div className="p-2 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.1875 20.0853V7.13456C1.1875 5.50757 1.86875 3.94722 3.08139 2.79677C4.29403 1.64632 5.93872 1 7.65365 1H17.7121C18.5613 1 19.4021 1.15868 20.1866 1.46697C20.9711 1.77526 21.6839 2.22712 22.2844 2.79677C22.8848 3.36642 23.3611 4.04268 23.6861 4.78696C24.011 5.53124 24.1783 6.32895 24.1783 7.13456V16.6772C24.1783 17.4828 24.011 18.2805 23.6861 19.0248C23.3611 19.7691 22.8848 20.4453 22.2844 21.015C21.6839 21.5846 20.9711 22.0365 20.1866 22.3448C19.4021 22.6531 18.5613 22.8118 17.7121 22.8118H4.06135C3.29915 22.8118 2.56818 22.5245 2.02923 22.0132C1.49028 21.5019 1.1875 20.8084 1.1875 20.0853V20.0853Z"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M6.93555 11.9061H11.9648C12.727 11.9061 13.4579 12.1933 13.9969 12.7046C14.5358 13.2159 14.8386 13.9094 14.8386 14.6325C14.8386 15.3556 14.5358 16.0491 13.9969 16.5604C13.4579 17.0717 12.727 17.359 11.9648 17.359H6.93555V7.81636C6.93555 7.45481 7.08694 7.10806 7.35641 6.85241C7.62589 6.59675 7.99137 6.45312 8.37247 6.45312H10.5279C11.29 6.45312 12.021 6.74038 12.56 7.25169C13.0989 7.763 13.4017 8.45649 13.4017 9.17959C13.4017 9.9027 13.0989 10.5962 12.56 11.1075C12.021 11.6188 11.29 11.9061 10.5279 11.9061H8.37247"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M18.4307 17.3594H18.446"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              End to end international delivery run,
                              warehousing, Quality Checks and Export complaint
                              packaging
                            </div>
                          </div>
                          <div className="flex flex-row gap-2 items-center">
                            <div className="p-2 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.92659 6.37939C4.92628 6.17465 5.01128 5.97808 5.16307 5.83254L5.17128 5.82475C5.32469 5.68074 5.53188 5.6001 5.74769 5.6004H9.03209C9.24986 5.6004 9.45871 5.68247 9.61269 5.82856C9.76668 5.97465 9.85319 6.17279 9.85319 6.37939C9.85319 6.58599 9.76668 6.78413 9.61269 6.93022C9.45871 7.07631 9.24986 7.15838 9.03209 7.15838H7.72982L9.61343 8.94383C9.76761 9.0901 9.85422 9.28849 9.85422 9.49536C9.85422 9.70222 9.76761 9.90061 9.61343 10.0469C9.45924 10.1932 9.25013 10.2753 9.03209 10.2753C8.81404 10.2753 8.60493 10.1932 8.45075 10.0469L6.56879 8.25988V9.49536C6.56879 9.70196 6.48228 9.9001 6.3283 10.0462C6.17431 10.1923 5.96546 10.2743 5.74769 10.2743C5.52992 10.2743 5.32107 10.1923 5.16709 10.0462C5.0131 9.9001 4.92659 9.70196 4.92659 9.49536V6.37939ZM4.989 17.5828C4.9478 17.4885 4.92659 17.3874 4.92659 17.2853V14.1693C4.92659 13.9627 5.0131 13.7646 5.16709 13.6185C5.32107 13.4724 5.52992 13.3903 5.74769 13.3903C5.96546 13.3903 6.17431 13.4724 6.3283 13.6185C6.48228 13.7646 6.56879 13.9627 6.56879 14.1693V15.4048L8.45075 13.6178C8.52709 13.5453 8.61772 13.4879 8.71747 13.4487C8.81721 13.4095 8.92412 13.3893 9.03209 13.3893C9.14005 13.3893 9.24696 13.4095 9.34671 13.4487C9.44645 13.4879 9.53708 13.5453 9.61343 13.6178C9.68977 13.6902 9.75033 13.7762 9.79164 13.8708C9.83296 13.9654 9.85422 14.0669 9.85422 14.1693C9.85422 14.2717 9.83296 14.3732 9.79164 14.4678C9.75033 14.5624 9.68977 14.6484 9.61343 14.7208L7.72982 16.5063H9.03209C9.24986 16.5063 9.45871 16.5883 9.61269 16.7344C9.76668 16.8805 9.85319 17.0787 9.85319 17.2853C9.85319 17.4919 9.76668 17.69 9.61269 17.8361C9.45871 17.9822 9.24986 18.0643 9.03209 18.0643H5.74277C5.5808 18.0638 5.4226 18.0179 5.28815 17.9322C5.1537 17.8465 5.04903 17.7249 4.98735 17.5828H4.989ZM17.5567 5.6596C17.652 5.69699 17.7423 5.75308 17.8195 5.82475L17.8277 5.83254C17.9792 5.97827 18.0641 6.17471 18.0642 6.37939V9.49536C18.0642 9.70196 17.9777 9.9001 17.8237 10.0462C17.6697 10.1923 17.4608 10.2743 17.2431 10.2743C17.0253 10.2743 16.8165 10.1923 16.6625 10.0462C16.5085 9.9001 16.422 9.70196 16.422 9.49536V8.25988L14.54 10.0469C14.3858 10.1932 14.1767 10.2753 13.9587 10.2753C13.7406 10.2753 13.5315 10.1932 13.3773 10.0469C13.2232 9.90061 13.1365 9.70222 13.1365 9.49536C13.1365 9.28849 13.2232 9.0901 13.3773 8.94383L15.2609 7.15838H13.9587C13.7409 7.15838 13.5321 7.07631 13.3781 6.93022C13.2241 6.78413 13.1376 6.58599 13.1376 6.37939C13.1376 6.17279 13.2241 5.97465 13.3781 5.82856C13.5321 5.68247 13.7409 5.6004 13.9587 5.6004H17.2431C17.3507 5.60044 17.4573 5.62056 17.5567 5.6596ZM17.8195 17.8399C17.666 17.9838 17.4589 18.0644 17.2431 18.0643H13.9587C13.7409 18.0643 13.5321 17.9822 13.3781 17.8361C13.2241 17.69 13.1376 17.4919 13.1376 17.2853C13.1376 17.0787 13.2241 16.8805 13.3781 16.7344C13.5321 16.5883 13.7409 16.5063 13.9587 16.5063H15.2609L13.3773 14.7208C13.301 14.6484 13.2404 14.5624 13.1991 14.4678C13.1578 14.3732 13.1365 14.2717 13.1365 14.1693C13.1365 14.0669 13.1578 13.9654 13.1991 13.8708C13.2404 13.7762 13.301 13.6902 13.3773 13.6178C13.4537 13.5453 13.5443 13.4879 13.6441 13.4487C13.7438 13.4095 13.8507 13.3893 13.9587 13.3893C14.0666 13.3893 14.1736 13.4095 14.2733 13.4487C14.373 13.4879 14.4637 13.5453 14.54 13.6178L16.422 15.4048V14.1693C16.422 13.9627 16.5085 13.7646 16.6625 13.6185C16.8165 13.4724 17.0253 13.3903 17.2431 13.3903C17.4608 13.3903 17.6697 13.4724 17.8237 13.6185C17.9777 13.7646 18.0642 13.9627 18.0642 14.1693V17.2853C18.0641 17.4899 17.9792 17.6864 17.8277 17.8321L17.8195 17.8399ZM0 4.04242C0 3.21601 0.346033 2.42345 0.961977 1.8391C1.57792 1.25474 2.41332 0.926453 3.2844 0.926453H19.7064C20.5774 0.926453 21.4128 1.25474 22.0288 1.8391C22.6447 2.42345 22.9908 3.21601 22.9908 4.04242V19.6222C22.9908 20.4486 22.6447 21.2412 22.0288 21.8256C21.4128 22.4099 20.5774 22.7382 19.7064 22.7382H3.2844C2.41332 22.7382 1.57792 22.4099 0.961977 21.8256C0.346033 21.2412 0 20.4486 0 19.6222V4.04242ZM3.2844 2.48443C2.84886 2.48443 2.43116 2.64858 2.12319 2.94076C1.81521 3.23294 1.6422 3.62921 1.6422 4.04242V19.6222C1.6422 20.0354 1.81521 20.4317 2.12319 20.7239C2.43116 21.0161 2.84886 21.1802 3.2844 21.1802H19.7064C20.1419 21.1802 20.5596 21.0161 20.8676 20.7239C21.1756 20.4317 21.3486 20.0354 21.3486 19.6222V4.04242C21.3486 3.62921 21.1756 3.23294 20.8676 2.94076C20.5596 2.64858 20.1419 2.48443 19.7064 2.48443H3.2844Z"
                                  fill="#B5A3C0"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Efficient and effective international dropshipping
                            </div>
                          </div>{" "}
                          <div className="flex flex-row gap-2 items-center">
                            <div className="px-2 py-3 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="25"
                                height="16"
                                viewBox="0 0 25 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.9673 0.601432H15.608V0.960663V2.51865V2.87788H15.9673H20.4744L14.3251 8.71189L11.0473 5.60225L11.0473 5.60221C10.8247 5.39107 10.5266 5.27555 10.2196 5.27555C9.91253 5.27555 9.61448 5.39107 9.39186 5.60221L9.39183 5.60225L0.940256 13.6204L0.66556 13.881L0.940256 14.1416L2.10129 15.2431L2.34853 15.4777L2.59578 15.2431L10.2196 8.01027L13.4973 11.1199L13.4974 11.12C13.72 11.3311 14.018 11.4466 14.3251 11.4466C14.6321 11.4466 14.9302 11.3311 15.1528 11.12L15.1528 11.1199L22.1768 4.45612V8.75057V9.10981H22.5361H24.1783H24.5375V8.75057V0.960663V0.601432H24.1783H15.9673Z"
                                  fill="#B5A3C0"
                                  stroke="#B5A3C0"
                                  stroke-width="0.718461"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Worry free streamlined international returns
                              procedure
                            </div>
                          </div>{" "}
                        </div>
                        <div className="pt-4">
                          <KnowMore path="/features/5">Know More</KnowMore>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-4/12 ">
                    <Image
                      className="h-full w-full md:p-4 max-h-[400px]  block dark:hidden scale-110"
                      src={`/asset/feature-slide/feature-slide-5.png`}
                      alt="hero image"
                      loading="lazy"
                      width="400"
                      height="400"
                    />
                    <Image
                      className="h-full w-full md:p-4 max-h-[400px]  hidden dark:block scale-110"
                      src={`/asset/feature-slide/feature-slide-5.png`}
                      alt="hero image"
                      loading="lazy"
                      width="400"
                      height="400"
                    />

                    {/* feature-slide-1-dark */}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between pt-2 ">
                  <div className="flex flex-row items-center gap-3 pb-4">
                    <div className="body-2 headingColor">01</div>

                    <div className="body-2 headingColor">02</div>

                    <div className="body-2 headingColor">03</div>

                    <div className="body-2 headingColor">04</div>
                    <div className=" heading headingColor-2">05</div>
                    <div>
                      <svg
                        width="60"
                        height="2"
                        viewBox="0 0 60 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.912598"
                          y1="0.91201"
                          x2="102.216"
                          y2="0.912009"
                          stroke="#463C4B"
                          stroke-width="0.718461"
                        />
                      </svg>
                    </div>
                    <div className="body-2 headingColor">06</div>
                    <div className="body-2 headingColor">07</div>
                    <div className="body-2 headingColor">08</div>
                  </div>
                  <div className="flex flex-row gap-6">
                    <div id="prev">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="22.0337"
                          cy="22.5535"
                          r="21.6408"
                          fill="white"
                          stroke="#9C4AD3"
                          stroke-width="0.718461"
                        />
                        <path
                          d="M14.1528 22.3414L24.2365 31.908L25.6482 30.5686L16.9763 22.3414L25.6482 14.1142L24.2365 12.7748L14.1528 22.3414Z"
                          fill="#9C4AD3"
                        />
                      </svg>
                    </div>
                    <div id="next">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="22.0337"
                          cy="22.5535"
                          r="21.6408"
                          fill="white"
                          stroke="#9C4AD3"
                          stroke-width="0.718461"
                        />
                        <path
                          d="M29.981 22.3417L19.8973 12.7751L18.4856 14.1145L27.1575 22.3417L18.4856 30.5689L19.8973 31.9083L29.981 22.3417Z"
                          fill="#9C4AD3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide  h-full">
              <div className="flex flex-col">
                <div className="flex flex-row gap-20 w-full h-[30rem] sm:h-[25rem] md:h-[30rem] items-start">
                  <div className="w-full md:w-8/12  ">
                    <div className="flex flex-col gap-4 items-start">
                      <h2 className="heading headingColor-2 text-left">
                        Cross-border Trade Compliance
                      </h2>
                      <p className="text-left headingColor body-2">
                        Stress-free international companies adherence to
                        mitigate any risks and losses
                      </p>
                      <div className="pt-4 flex-col gap-4">
                        <div className="block hidden ">
                          <Image
                            className="h-[30rem] w-full object-contain py-0 px-2 md:p-20 block dark:hidden"
                            src={`/asset/feature-slide/feature-slide-6.png`}
                            alt="hero image"
                            loading="lazy"
                            width="400"
                            height="400"
                          />
                          <Image
                            className="h-[30rem] w-full px-2 hidden dark:block object-contain"
                            src={`/asset/feature-slide/feature-slide-6.png`}
                            alt="hero image"
                            loading="lazy"
                            width="400"
                            height="400"
                          />
                        </div>
                        <div className="flex flex-col gap-6 pt-4 md:pt-8">
                          <div className="flex flex-row gap-2 items-center">
                            <div className="p-2 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.1875 20.0853V7.13456C1.1875 5.50757 1.86875 3.94722 3.08139 2.79677C4.29403 1.64632 5.93872 1 7.65365 1H17.7121C18.5613 1 19.4021 1.15868 20.1866 1.46697C20.9711 1.77526 21.6839 2.22712 22.2844 2.79677C22.8848 3.36642 23.3611 4.04268 23.6861 4.78696C24.011 5.53124 24.1783 6.32895 24.1783 7.13456V16.6772C24.1783 17.4828 24.011 18.2805 23.6861 19.0248C23.3611 19.7691 22.8848 20.4453 22.2844 21.015C21.6839 21.5846 20.9711 22.0365 20.1866 22.3448C19.4021 22.6531 18.5613 22.8118 17.7121 22.8118H4.06135C3.29915 22.8118 2.56818 22.5245 2.02923 22.0132C1.49028 21.5019 1.1875 20.8084 1.1875 20.0853V20.0853Z"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M6.93555 11.9061H11.9648C12.727 11.9061 13.4579 12.1933 13.9969 12.7046C14.5358 13.2159 14.8386 13.9094 14.8386 14.6325C14.8386 15.3556 14.5358 16.0491 13.9969 16.5604C13.4579 17.0717 12.727 17.359 11.9648 17.359H6.93555V7.81636C6.93555 7.45481 7.08694 7.10806 7.35641 6.85241C7.62589 6.59675 7.99137 6.45312 8.37247 6.45312H10.5279C11.29 6.45312 12.021 6.74038 12.56 7.25169C13.0989 7.763 13.4017 8.45649 13.4017 9.17959C13.4017 9.9027 13.0989 10.5962 12.56 11.1075C12.021 11.6188 11.29 11.9061 10.5279 11.9061H8.37247"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M18.4307 17.3594H18.446"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Convenient documentation and records maintenance
                            </div>
                          </div>
                          <div className="flex flex-row gap-2 items-center">
                            <div className="p-2 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.92659 6.37939C4.92628 6.17465 5.01128 5.97808 5.16307 5.83254L5.17128 5.82475C5.32469 5.68074 5.53188 5.6001 5.74769 5.6004H9.03209C9.24986 5.6004 9.45871 5.68247 9.61269 5.82856C9.76668 5.97465 9.85319 6.17279 9.85319 6.37939C9.85319 6.58599 9.76668 6.78413 9.61269 6.93022C9.45871 7.07631 9.24986 7.15838 9.03209 7.15838H7.72982L9.61343 8.94383C9.76761 9.0901 9.85422 9.28849 9.85422 9.49536C9.85422 9.70222 9.76761 9.90061 9.61343 10.0469C9.45924 10.1932 9.25013 10.2753 9.03209 10.2753C8.81404 10.2753 8.60493 10.1932 8.45075 10.0469L6.56879 8.25988V9.49536C6.56879 9.70196 6.48228 9.9001 6.3283 10.0462C6.17431 10.1923 5.96546 10.2743 5.74769 10.2743C5.52992 10.2743 5.32107 10.1923 5.16709 10.0462C5.0131 9.9001 4.92659 9.70196 4.92659 9.49536V6.37939ZM4.989 17.5828C4.9478 17.4885 4.92659 17.3874 4.92659 17.2853V14.1693C4.92659 13.9627 5.0131 13.7646 5.16709 13.6185C5.32107 13.4724 5.52992 13.3903 5.74769 13.3903C5.96546 13.3903 6.17431 13.4724 6.3283 13.6185C6.48228 13.7646 6.56879 13.9627 6.56879 14.1693V15.4048L8.45075 13.6178C8.52709 13.5453 8.61772 13.4879 8.71747 13.4487C8.81721 13.4095 8.92412 13.3893 9.03209 13.3893C9.14005 13.3893 9.24696 13.4095 9.34671 13.4487C9.44645 13.4879 9.53708 13.5453 9.61343 13.6178C9.68977 13.6902 9.75033 13.7762 9.79164 13.8708C9.83296 13.9654 9.85422 14.0669 9.85422 14.1693C9.85422 14.2717 9.83296 14.3732 9.79164 14.4678C9.75033 14.5624 9.68977 14.6484 9.61343 14.7208L7.72982 16.5063H9.03209C9.24986 16.5063 9.45871 16.5883 9.61269 16.7344C9.76668 16.8805 9.85319 17.0787 9.85319 17.2853C9.85319 17.4919 9.76668 17.69 9.61269 17.8361C9.45871 17.9822 9.24986 18.0643 9.03209 18.0643H5.74277C5.5808 18.0638 5.4226 18.0179 5.28815 17.9322C5.1537 17.8465 5.04903 17.7249 4.98735 17.5828H4.989ZM17.5567 5.6596C17.652 5.69699 17.7423 5.75308 17.8195 5.82475L17.8277 5.83254C17.9792 5.97827 18.0641 6.17471 18.0642 6.37939V9.49536C18.0642 9.70196 17.9777 9.9001 17.8237 10.0462C17.6697 10.1923 17.4608 10.2743 17.2431 10.2743C17.0253 10.2743 16.8165 10.1923 16.6625 10.0462C16.5085 9.9001 16.422 9.70196 16.422 9.49536V8.25988L14.54 10.0469C14.3858 10.1932 14.1767 10.2753 13.9587 10.2753C13.7406 10.2753 13.5315 10.1932 13.3773 10.0469C13.2232 9.90061 13.1365 9.70222 13.1365 9.49536C13.1365 9.28849 13.2232 9.0901 13.3773 8.94383L15.2609 7.15838H13.9587C13.7409 7.15838 13.5321 7.07631 13.3781 6.93022C13.2241 6.78413 13.1376 6.58599 13.1376 6.37939C13.1376 6.17279 13.2241 5.97465 13.3781 5.82856C13.5321 5.68247 13.7409 5.6004 13.9587 5.6004H17.2431C17.3507 5.60044 17.4573 5.62056 17.5567 5.6596ZM17.8195 17.8399C17.666 17.9838 17.4589 18.0644 17.2431 18.0643H13.9587C13.7409 18.0643 13.5321 17.9822 13.3781 17.8361C13.2241 17.69 13.1376 17.4919 13.1376 17.2853C13.1376 17.0787 13.2241 16.8805 13.3781 16.7344C13.5321 16.5883 13.7409 16.5063 13.9587 16.5063H15.2609L13.3773 14.7208C13.301 14.6484 13.2404 14.5624 13.1991 14.4678C13.1578 14.3732 13.1365 14.2717 13.1365 14.1693C13.1365 14.0669 13.1578 13.9654 13.1991 13.8708C13.2404 13.7762 13.301 13.6902 13.3773 13.6178C13.4537 13.5453 13.5443 13.4879 13.6441 13.4487C13.7438 13.4095 13.8507 13.3893 13.9587 13.3893C14.0666 13.3893 14.1736 13.4095 14.2733 13.4487C14.373 13.4879 14.4637 13.5453 14.54 13.6178L16.422 15.4048V14.1693C16.422 13.9627 16.5085 13.7646 16.6625 13.6185C16.8165 13.4724 17.0253 13.3903 17.2431 13.3903C17.4608 13.3903 17.6697 13.4724 17.8237 13.6185C17.9777 13.7646 18.0642 13.9627 18.0642 14.1693V17.2853C18.0641 17.4899 17.9792 17.6864 17.8277 17.8321L17.8195 17.8399ZM0 4.04242C0 3.21601 0.346033 2.42345 0.961977 1.8391C1.57792 1.25474 2.41332 0.926453 3.2844 0.926453H19.7064C20.5774 0.926453 21.4128 1.25474 22.0288 1.8391C22.6447 2.42345 22.9908 3.21601 22.9908 4.04242V19.6222C22.9908 20.4486 22.6447 21.2412 22.0288 21.8256C21.4128 22.4099 20.5774 22.7382 19.7064 22.7382H3.2844C2.41332 22.7382 1.57792 22.4099 0.961977 21.8256C0.346033 21.2412 0 20.4486 0 19.6222V4.04242ZM3.2844 2.48443C2.84886 2.48443 2.43116 2.64858 2.12319 2.94076C1.81521 3.23294 1.6422 3.62921 1.6422 4.04242V19.6222C1.6422 20.0354 1.81521 20.4317 2.12319 20.7239C2.43116 21.0161 2.84886 21.1802 3.2844 21.1802H19.7064C20.1419 21.1802 20.5596 21.0161 20.8676 20.7239C21.1756 20.4317 21.3486 20.0354 21.3486 19.6222V4.04242C21.3486 3.62921 21.1756 3.23294 20.8676 2.94076C20.5596 2.64858 20.1419 2.48443 19.7064 2.48443H3.2844Z"
                                  fill="#B5A3C0"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Incorporation of VAT, duties, certifications and
                              restrictions
                            </div>
                          </div>{" "}
                          <div className="flex flex-row gap-2 items-center">
                            <div className="px-2 py-3 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="25"
                                height="16"
                                viewBox="0 0 25 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.9673 0.601432H15.608V0.960663V2.51865V2.87788H15.9673H20.4744L14.3251 8.71189L11.0473 5.60225L11.0473 5.60221C10.8247 5.39107 10.5266 5.27555 10.2196 5.27555C9.91253 5.27555 9.61448 5.39107 9.39186 5.60221L9.39183 5.60225L0.940256 13.6204L0.66556 13.881L0.940256 14.1416L2.10129 15.2431L2.34853 15.4777L2.59578 15.2431L10.2196 8.01027L13.4973 11.1199L13.4974 11.12C13.72 11.3311 14.018 11.4466 14.3251 11.4466C14.6321 11.4466 14.9302 11.3311 15.1528 11.12L15.1528 11.1199L22.1768 4.45612V8.75057V9.10981H22.5361H24.1783H24.5375V8.75057V0.960663V0.601432H24.1783H15.9673Z"
                                  fill="#B5A3C0"
                                  stroke="#B5A3C0"
                                  stroke-width="0.718461"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Single point of contact for all international
                              customs, licenses, permits and IOR service
                            </div>
                          </div>{" "}
                        </div>
                        <div className="pt-4">
                          <KnowMore path="/features/6">Know More</KnowMore>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-4/12 ">
                    <Image
                      className="h-full w-full md:p-4 max-h-[400px]  block dark:hidden  scale-110"
                      src={`/asset/feature-slide/feature-slide-6.png`}
                      alt="hero image"
                      loading="lazy"
                      width="400"
                      height="400"
                    />
                    <Image
                      className="h-full w-full md:p-4 max-h-[400px]  hidden dark:block  scale-110"
                      src={`/asset/feature-slide/feature-slide-6.png`}
                      alt="hero image"
                      loading="lazy"
                      width="400"
                      height="400"
                    />

                    {/* feature-slide-1-dark */}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between pt-2 ">
                  <div className="flex flex-row items-center gap-3 pb-4">
                    <div className="body-2 headingColor">01</div>
                    <div className="body-2 headingColor">02</div>
                    <div className="body-2 headingColor">03</div>
                    <div className="body-2 headingColor">04</div>
                    <div className="body-2 headingColor">05</div>
                    <div className=" heading headingColor-2">06</div>
                    <div>
                      <svg
                        width="60"
                        height="2"
                        viewBox="0 0 60 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.912598"
                          y1="0.91201"
                          x2="102.216"
                          y2="0.912009"
                          stroke="#463C4B"
                          stroke-width="0.718461"
                        />
                      </svg>
                    </div>
                    <div className="body-2 headingColor">07</div>
                    <div className="body-2 headingColor">08</div>
                  </div>
                  <div className="flex flex-row gap-6">
                    <div id="prev">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="22.0337"
                          cy="22.5535"
                          r="21.6408"
                          fill="white"
                          stroke="#9C4AD3"
                          stroke-width="0.718461"
                        />
                        <path
                          d="M14.1528 22.3414L24.2365 31.908L25.6482 30.5686L16.9763 22.3414L25.6482 14.1142L24.2365 12.7748L14.1528 22.3414Z"
                          fill="#9C4AD3"
                        />
                      </svg>
                    </div>
                    <div id="next">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="22.0337"
                          cy="22.5535"
                          r="21.6408"
                          fill="white"
                          stroke="#9C4AD3"
                          stroke-width="0.718461"
                        />
                        <path
                          d="M29.981 22.3417L19.8973 12.7751L18.4856 14.1145L27.1575 22.3417L18.4856 30.5689L19.8973 31.9083L29.981 22.3417Z"
                          fill="#9C4AD3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide  h-full">
              <div className="flex flex-col">
                <div className="flex flex-row gap-20 w-full h-[30rem] sm:h-[25rem] md:h-[30rem] items-start">
                  <div className="w-full md:w-8/12  ">
                    <div className="flex flex-col gap-4 items-start">
                      <h2 className="heading headingColor-2 text-left">
                        International Payments
                      </h2>
                      <p className="text-left headingColor body-2">
                        Unlock opportunities with convenient international
                        payments and managing your digital business funds
                      </p>
                      <div className="pt-4 flex-col gap-4">
                        <div className="block hidden ">
                          <Image
                            className="h-[30rem] w-full object-contain py-0 px-2 md:p-20 block dark:hidden"
                            src={`/asset/feature-slide/feature-slide-7.png`}
                            alt="hero image"
                            loading="lazy"
                            width="400"
                            height="400"
                          />
                          <Image
                            className="h-[30rem] w-full px-2 hidden dark:block object-contain"
                            src={`/asset/feature-slide/feature-slide-7.png`}
                            alt="hero image"
                            loading="lazy"
                            width="400"
                            height="400"
                          />
                        </div>
                        <div className="flex flex-col gap-6 pt-4 md:pt-8">
                          <div className="flex flex-row gap-2 items-center">
                            <div className="p-2 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.1875 20.0853V7.13456C1.1875 5.50757 1.86875 3.94722 3.08139 2.79677C4.29403 1.64632 5.93872 1 7.65365 1H17.7121C18.5613 1 19.4021 1.15868 20.1866 1.46697C20.9711 1.77526 21.6839 2.22712 22.2844 2.79677C22.8848 3.36642 23.3611 4.04268 23.6861 4.78696C24.011 5.53124 24.1783 6.32895 24.1783 7.13456V16.6772C24.1783 17.4828 24.011 18.2805 23.6861 19.0248C23.3611 19.7691 22.8848 20.4453 22.2844 21.015C21.6839 21.5846 20.9711 22.0365 20.1866 22.3448C19.4021 22.6531 18.5613 22.8118 17.7121 22.8118H4.06135C3.29915 22.8118 2.56818 22.5245 2.02923 22.0132C1.49028 21.5019 1.1875 20.8084 1.1875 20.0853V20.0853Z"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M6.93555 11.9061H11.9648C12.727 11.9061 13.4579 12.1933 13.9969 12.7046C14.5358 13.2159 14.8386 13.9094 14.8386 14.6325C14.8386 15.3556 14.5358 16.0491 13.9969 16.5604C13.4579 17.0717 12.727 17.359 11.9648 17.359H6.93555V7.81636C6.93555 7.45481 7.08694 7.10806 7.35641 6.85241C7.62589 6.59675 7.99137 6.45312 8.37247 6.45312H10.5279C11.29 6.45312 12.021 6.74038 12.56 7.25169C13.0989 7.763 13.4017 8.45649 13.4017 9.17959C13.4017 9.9027 13.0989 10.5962 12.56 11.1075C12.021 11.6188 11.29 11.9061 10.5279 11.9061H8.37247"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M18.4307 17.3594H18.446"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Easy access to collateral-free working capital
                              with financing
                            </div>
                          </div>
                          <div className="flex flex-row gap-2 items-center">
                            <div className="p-2 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.92659 6.37939C4.92628 6.17465 5.01128 5.97808 5.16307 5.83254L5.17128 5.82475C5.32469 5.68074 5.53188 5.6001 5.74769 5.6004H9.03209C9.24986 5.6004 9.45871 5.68247 9.61269 5.82856C9.76668 5.97465 9.85319 6.17279 9.85319 6.37939C9.85319 6.58599 9.76668 6.78413 9.61269 6.93022C9.45871 7.07631 9.24986 7.15838 9.03209 7.15838H7.72982L9.61343 8.94383C9.76761 9.0901 9.85422 9.28849 9.85422 9.49536C9.85422 9.70222 9.76761 9.90061 9.61343 10.0469C9.45924 10.1932 9.25013 10.2753 9.03209 10.2753C8.81404 10.2753 8.60493 10.1932 8.45075 10.0469L6.56879 8.25988V9.49536C6.56879 9.70196 6.48228 9.9001 6.3283 10.0462C6.17431 10.1923 5.96546 10.2743 5.74769 10.2743C5.52992 10.2743 5.32107 10.1923 5.16709 10.0462C5.0131 9.9001 4.92659 9.70196 4.92659 9.49536V6.37939ZM4.989 17.5828C4.9478 17.4885 4.92659 17.3874 4.92659 17.2853V14.1693C4.92659 13.9627 5.0131 13.7646 5.16709 13.6185C5.32107 13.4724 5.52992 13.3903 5.74769 13.3903C5.96546 13.3903 6.17431 13.4724 6.3283 13.6185C6.48228 13.7646 6.56879 13.9627 6.56879 14.1693V15.4048L8.45075 13.6178C8.52709 13.5453 8.61772 13.4879 8.71747 13.4487C8.81721 13.4095 8.92412 13.3893 9.03209 13.3893C9.14005 13.3893 9.24696 13.4095 9.34671 13.4487C9.44645 13.4879 9.53708 13.5453 9.61343 13.6178C9.68977 13.6902 9.75033 13.7762 9.79164 13.8708C9.83296 13.9654 9.85422 14.0669 9.85422 14.1693C9.85422 14.2717 9.83296 14.3732 9.79164 14.4678C9.75033 14.5624 9.68977 14.6484 9.61343 14.7208L7.72982 16.5063H9.03209C9.24986 16.5063 9.45871 16.5883 9.61269 16.7344C9.76668 16.8805 9.85319 17.0787 9.85319 17.2853C9.85319 17.4919 9.76668 17.69 9.61269 17.8361C9.45871 17.9822 9.24986 18.0643 9.03209 18.0643H5.74277C5.5808 18.0638 5.4226 18.0179 5.28815 17.9322C5.1537 17.8465 5.04903 17.7249 4.98735 17.5828H4.989ZM17.5567 5.6596C17.652 5.69699 17.7423 5.75308 17.8195 5.82475L17.8277 5.83254C17.9792 5.97827 18.0641 6.17471 18.0642 6.37939V9.49536C18.0642 9.70196 17.9777 9.9001 17.8237 10.0462C17.6697 10.1923 17.4608 10.2743 17.2431 10.2743C17.0253 10.2743 16.8165 10.1923 16.6625 10.0462C16.5085 9.9001 16.422 9.70196 16.422 9.49536V8.25988L14.54 10.0469C14.3858 10.1932 14.1767 10.2753 13.9587 10.2753C13.7406 10.2753 13.5315 10.1932 13.3773 10.0469C13.2232 9.90061 13.1365 9.70222 13.1365 9.49536C13.1365 9.28849 13.2232 9.0901 13.3773 8.94383L15.2609 7.15838H13.9587C13.7409 7.15838 13.5321 7.07631 13.3781 6.93022C13.2241 6.78413 13.1376 6.58599 13.1376 6.37939C13.1376 6.17279 13.2241 5.97465 13.3781 5.82856C13.5321 5.68247 13.7409 5.6004 13.9587 5.6004H17.2431C17.3507 5.60044 17.4573 5.62056 17.5567 5.6596ZM17.8195 17.8399C17.666 17.9838 17.4589 18.0644 17.2431 18.0643H13.9587C13.7409 18.0643 13.5321 17.9822 13.3781 17.8361C13.2241 17.69 13.1376 17.4919 13.1376 17.2853C13.1376 17.0787 13.2241 16.8805 13.3781 16.7344C13.5321 16.5883 13.7409 16.5063 13.9587 16.5063H15.2609L13.3773 14.7208C13.301 14.6484 13.2404 14.5624 13.1991 14.4678C13.1578 14.3732 13.1365 14.2717 13.1365 14.1693C13.1365 14.0669 13.1578 13.9654 13.1991 13.8708C13.2404 13.7762 13.301 13.6902 13.3773 13.6178C13.4537 13.5453 13.5443 13.4879 13.6441 13.4487C13.7438 13.4095 13.8507 13.3893 13.9587 13.3893C14.0666 13.3893 14.1736 13.4095 14.2733 13.4487C14.373 13.4879 14.4637 13.5453 14.54 13.6178L16.422 15.4048V14.1693C16.422 13.9627 16.5085 13.7646 16.6625 13.6185C16.8165 13.4724 17.0253 13.3903 17.2431 13.3903C17.4608 13.3903 17.6697 13.4724 17.8237 13.6185C17.9777 13.7646 18.0642 13.9627 18.0642 14.1693V17.2853C18.0641 17.4899 17.9792 17.6864 17.8277 17.8321L17.8195 17.8399ZM0 4.04242C0 3.21601 0.346033 2.42345 0.961977 1.8391C1.57792 1.25474 2.41332 0.926453 3.2844 0.926453H19.7064C20.5774 0.926453 21.4128 1.25474 22.0288 1.8391C22.6447 2.42345 22.9908 3.21601 22.9908 4.04242V19.6222C22.9908 20.4486 22.6447 21.2412 22.0288 21.8256C21.4128 22.4099 20.5774 22.7382 19.7064 22.7382H3.2844C2.41332 22.7382 1.57792 22.4099 0.961977 21.8256C0.346033 21.2412 0 20.4486 0 19.6222V4.04242ZM3.2844 2.48443C2.84886 2.48443 2.43116 2.64858 2.12319 2.94076C1.81521 3.23294 1.6422 3.62921 1.6422 4.04242V19.6222C1.6422 20.0354 1.81521 20.4317 2.12319 20.7239C2.43116 21.0161 2.84886 21.1802 3.2844 21.1802H19.7064C20.1419 21.1802 20.5596 21.0161 20.8676 20.7239C21.1756 20.4317 21.3486 20.0354 21.3486 19.6222V4.04242C21.3486 3.62921 21.1756 3.23294 20.8676 2.94076C20.5596 2.64858 20.1419 2.48443 19.7064 2.48443H3.2844Z"
                                  fill="#B5A3C0"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Get paid easily in international currencies across
                              countries
                            </div>
                          </div>{" "}
                          <div className="flex flex-row gap-2 items-center">
                            <div className="px-2 py-3 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="25"
                                height="16"
                                viewBox="0 0 25 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.9673 0.601432H15.608V0.960663V2.51865V2.87788H15.9673H20.4744L14.3251 8.71189L11.0473 5.60225L11.0473 5.60221C10.8247 5.39107 10.5266 5.27555 10.2196 5.27555C9.91253 5.27555 9.61448 5.39107 9.39186 5.60221L9.39183 5.60225L0.940256 13.6204L0.66556 13.881L0.940256 14.1416L2.10129 15.2431L2.34853 15.4777L2.59578 15.2431L10.2196 8.01027L13.4973 11.1199L13.4974 11.12C13.72 11.3311 14.018 11.4466 14.3251 11.4466C14.6321 11.4466 14.9302 11.3311 15.1528 11.12L15.1528 11.1199L22.1768 4.45612V8.75057V9.10981H22.5361H24.1783H24.5375V8.75057V0.960663V0.601432H24.1783H15.9673Z"
                                  fill="#B5A3C0"
                                  stroke="#B5A3C0"
                                  stroke-width="0.718461"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Mitigate losses with international transit
                              insurance
                            </div>
                          </div>{" "}
                        </div>
                        <div className="pt-4">
                          <KnowMore path="/features/7">Know More</KnowMore>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-4/12 ">
                    <Image
                      className="h-full w-full md:p-4 max-h-[400px]  block dark:hidden scale-110"
                      src={`/asset/feature-slide/feature-slide-7.png`}
                      alt="hero image"
                      loading="lazy"
                      width="400"
                      height="400"
                    />
                    <Image
                      className="h-full w-full md:p-4 max-h-[400px]  hidden dark:block scale-110"
                      src={`/asset/feature-slide/feature-slide-7.png`}
                      alt="hero image"
                      loading="lazy"
                      width="400"
                      height="400"
                    />

                    {/* feature-slide-1-dark */}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between pt-2 ">
                  <div className="flex flex-row items-center gap-3 pb-4">
                    <div className="body-2 headingColor">01</div>
                    <div className="body-2 headingColor">02</div>
                    <div className="body-2 headingColor">03</div>
                    <div className="body-2 headingColor">04</div>
                    <div className="body-2 headingColor">05</div>
                    <div className="body-2 headingColor">06</div>
                    <div className=" heading headingColor-2">07</div>
                    <div>
                      <svg
                        width="60"
                        height="2"
                        viewBox="0 0 60 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.912598"
                          y1="0.91201"
                          x2="102.216"
                          y2="0.912009"
                          stroke="#463C4B"
                          stroke-width="0.718461"
                        />
                      </svg>
                    </div>
                    <div className="body-2 headingColor">08</div>
                  </div>
                  <div className="flex flex-row gap-6">
                    <div id="prev">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="22.0337"
                          cy="22.5535"
                          r="21.6408"
                          fill="white"
                          stroke="#9C4AD3"
                          stroke-width="0.718461"
                        />
                        <path
                          d="M14.1528 22.3414L24.2365 31.908L25.6482 30.5686L16.9763 22.3414L25.6482 14.1142L24.2365 12.7748L14.1528 22.3414Z"
                          fill="#9C4AD3"
                        />
                      </svg>
                    </div>
                    <div id="next">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="22.0337"
                          cy="22.5535"
                          r="21.6408"
                          fill="white"
                          stroke="#9C4AD3"
                          stroke-width="0.718461"
                        />
                        <path
                          d="M29.981 22.3417L19.8973 12.7751L18.4856 14.1145L27.1575 22.3417L18.4856 30.5689L19.8973 31.9083L29.981 22.3417Z"
                          fill="#9C4AD3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide  h-full">
              <div className="flex flex-col">
                <div className="flex flex-row gap-20 w-full h-[30rem] sm:h-[25rem] md:h-[30rem] items-start">
                  <div className="w-full md:w-8/12  ">
                    <div className="flex flex-col gap-4 items-start">
                      <h2 className="heading headingColor-2 text-left">
                        International B2B Sourcing
                      </h2>
                      <p className="text-left headingColor body-2">
                        Grow more by bulk international selling with buyer
                        guarantee
                      </p>
                      <div className="pt-4 flex-col gap-4">
                        <div className="block hidden ">
                          <Image
                            className="h-[30rem] w-full object-contain py-0 px-2 md:p-20 block dark:hidden"
                            src={`/asset/feature-slide/feature-slide-8.png`}
                            alt="hero image"
                            loading="lazy"
                            width="400"
                            height="400"
                          />
                          <Image
                            className="h-[30rem] w-full px-2 hidden dark:block object-contain"
                            src={`/asset/feature-slide/feature-slide-8.png`}
                            alt="hero image"
                            loading="lazy"
                            width="400"
                            height="400"
                          />
                        </div>
                        <div className="flex flex-col gap-6 pt-4 md:pt-8">
                          <div className="flex flex-row gap-2 items-center">
                            <div className="p-2 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.1875 20.0853V7.13456C1.1875 5.50757 1.86875 3.94722 3.08139 2.79677C4.29403 1.64632 5.93872 1 7.65365 1H17.7121C18.5613 1 19.4021 1.15868 20.1866 1.46697C20.9711 1.77526 21.6839 2.22712 22.2844 2.79677C22.8848 3.36642 23.3611 4.04268 23.6861 4.78696C24.011 5.53124 24.1783 6.32895 24.1783 7.13456V16.6772C24.1783 17.4828 24.011 18.2805 23.6861 19.0248C23.3611 19.7691 22.8848 20.4453 22.2844 21.015C21.6839 21.5846 20.9711 22.0365 20.1866 22.3448C19.4021 22.6531 18.5613 22.8118 17.7121 22.8118H4.06135C3.29915 22.8118 2.56818 22.5245 2.02923 22.0132C1.49028 21.5019 1.1875 20.8084 1.1875 20.0853V20.0853Z"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M6.93555 11.9061H11.9648C12.727 11.9061 13.4579 12.1933 13.9969 12.7046C14.5358 13.2159 14.8386 13.9094 14.8386 14.6325C14.8386 15.3556 14.5358 16.0491 13.9969 16.5604C13.4579 17.0717 12.727 17.359 11.9648 17.359H6.93555V7.81636C6.93555 7.45481 7.08694 7.10806 7.35641 6.85241C7.62589 6.59675 7.99137 6.45312 8.37247 6.45312H10.5279C11.29 6.45312 12.021 6.74038 12.56 7.25169C13.0989 7.763 13.4017 8.45649 13.4017 9.17959C13.4017 9.9027 13.0989 10.5962 12.56 11.1075C12.021 11.6188 11.29 11.9061 10.5279 11.9061H8.37247"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M18.4307 17.3594H18.446"
                                  stroke="#B5A3C0"
                                  stroke-width="1.43692"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Smart procurement with quality checks,
                              merchandising and logistics
                            </div>
                          </div>
                          <div className="flex flex-row gap-2 items-center">
                            <div className="p-2 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.92659 6.37939C4.92628 6.17465 5.01128 5.97808 5.16307 5.83254L5.17128 5.82475C5.32469 5.68074 5.53188 5.6001 5.74769 5.6004H9.03209C9.24986 5.6004 9.45871 5.68247 9.61269 5.82856C9.76668 5.97465 9.85319 6.17279 9.85319 6.37939C9.85319 6.58599 9.76668 6.78413 9.61269 6.93022C9.45871 7.07631 9.24986 7.15838 9.03209 7.15838H7.72982L9.61343 8.94383C9.76761 9.0901 9.85422 9.28849 9.85422 9.49536C9.85422 9.70222 9.76761 9.90061 9.61343 10.0469C9.45924 10.1932 9.25013 10.2753 9.03209 10.2753C8.81404 10.2753 8.60493 10.1932 8.45075 10.0469L6.56879 8.25988V9.49536C6.56879 9.70196 6.48228 9.9001 6.3283 10.0462C6.17431 10.1923 5.96546 10.2743 5.74769 10.2743C5.52992 10.2743 5.32107 10.1923 5.16709 10.0462C5.0131 9.9001 4.92659 9.70196 4.92659 9.49536V6.37939ZM4.989 17.5828C4.9478 17.4885 4.92659 17.3874 4.92659 17.2853V14.1693C4.92659 13.9627 5.0131 13.7646 5.16709 13.6185C5.32107 13.4724 5.52992 13.3903 5.74769 13.3903C5.96546 13.3903 6.17431 13.4724 6.3283 13.6185C6.48228 13.7646 6.56879 13.9627 6.56879 14.1693V15.4048L8.45075 13.6178C8.52709 13.5453 8.61772 13.4879 8.71747 13.4487C8.81721 13.4095 8.92412 13.3893 9.03209 13.3893C9.14005 13.3893 9.24696 13.4095 9.34671 13.4487C9.44645 13.4879 9.53708 13.5453 9.61343 13.6178C9.68977 13.6902 9.75033 13.7762 9.79164 13.8708C9.83296 13.9654 9.85422 14.0669 9.85422 14.1693C9.85422 14.2717 9.83296 14.3732 9.79164 14.4678C9.75033 14.5624 9.68977 14.6484 9.61343 14.7208L7.72982 16.5063H9.03209C9.24986 16.5063 9.45871 16.5883 9.61269 16.7344C9.76668 16.8805 9.85319 17.0787 9.85319 17.2853C9.85319 17.4919 9.76668 17.69 9.61269 17.8361C9.45871 17.9822 9.24986 18.0643 9.03209 18.0643H5.74277C5.5808 18.0638 5.4226 18.0179 5.28815 17.9322C5.1537 17.8465 5.04903 17.7249 4.98735 17.5828H4.989ZM17.5567 5.6596C17.652 5.69699 17.7423 5.75308 17.8195 5.82475L17.8277 5.83254C17.9792 5.97827 18.0641 6.17471 18.0642 6.37939V9.49536C18.0642 9.70196 17.9777 9.9001 17.8237 10.0462C17.6697 10.1923 17.4608 10.2743 17.2431 10.2743C17.0253 10.2743 16.8165 10.1923 16.6625 10.0462C16.5085 9.9001 16.422 9.70196 16.422 9.49536V8.25988L14.54 10.0469C14.3858 10.1932 14.1767 10.2753 13.9587 10.2753C13.7406 10.2753 13.5315 10.1932 13.3773 10.0469C13.2232 9.90061 13.1365 9.70222 13.1365 9.49536C13.1365 9.28849 13.2232 9.0901 13.3773 8.94383L15.2609 7.15838H13.9587C13.7409 7.15838 13.5321 7.07631 13.3781 6.93022C13.2241 6.78413 13.1376 6.58599 13.1376 6.37939C13.1376 6.17279 13.2241 5.97465 13.3781 5.82856C13.5321 5.68247 13.7409 5.6004 13.9587 5.6004H17.2431C17.3507 5.60044 17.4573 5.62056 17.5567 5.6596ZM17.8195 17.8399C17.666 17.9838 17.4589 18.0644 17.2431 18.0643H13.9587C13.7409 18.0643 13.5321 17.9822 13.3781 17.8361C13.2241 17.69 13.1376 17.4919 13.1376 17.2853C13.1376 17.0787 13.2241 16.8805 13.3781 16.7344C13.5321 16.5883 13.7409 16.5063 13.9587 16.5063H15.2609L13.3773 14.7208C13.301 14.6484 13.2404 14.5624 13.1991 14.4678C13.1578 14.3732 13.1365 14.2717 13.1365 14.1693C13.1365 14.0669 13.1578 13.9654 13.1991 13.8708C13.2404 13.7762 13.301 13.6902 13.3773 13.6178C13.4537 13.5453 13.5443 13.4879 13.6441 13.4487C13.7438 13.4095 13.8507 13.3893 13.9587 13.3893C14.0666 13.3893 14.1736 13.4095 14.2733 13.4487C14.373 13.4879 14.4637 13.5453 14.54 13.6178L16.422 15.4048V14.1693C16.422 13.9627 16.5085 13.7646 16.6625 13.6185C16.8165 13.4724 17.0253 13.3903 17.2431 13.3903C17.4608 13.3903 17.6697 13.4724 17.8237 13.6185C17.9777 13.7646 18.0642 13.9627 18.0642 14.1693V17.2853C18.0641 17.4899 17.9792 17.6864 17.8277 17.8321L17.8195 17.8399ZM0 4.04242C0 3.21601 0.346033 2.42345 0.961977 1.8391C1.57792 1.25474 2.41332 0.926453 3.2844 0.926453H19.7064C20.5774 0.926453 21.4128 1.25474 22.0288 1.8391C22.6447 2.42345 22.9908 3.21601 22.9908 4.04242V19.6222C22.9908 20.4486 22.6447 21.2412 22.0288 21.8256C21.4128 22.4099 20.5774 22.7382 19.7064 22.7382H3.2844C2.41332 22.7382 1.57792 22.4099 0.961977 21.8256C0.346033 21.2412 0 20.4486 0 19.6222V4.04242ZM3.2844 2.48443C2.84886 2.48443 2.43116 2.64858 2.12319 2.94076C1.81521 3.23294 1.6422 3.62921 1.6422 4.04242V19.6222C1.6422 20.0354 1.81521 20.4317 2.12319 20.7239C2.43116 21.0161 2.84886 21.1802 3.2844 21.1802H19.7064C20.1419 21.1802 20.5596 21.0161 20.8676 20.7239C21.1756 20.4317 21.3486 20.0354 21.3486 19.6222V4.04242C21.3486 3.62921 21.1756 3.23294 20.8676 2.94076C20.5596 2.64858 20.1419 2.48443 19.7064 2.48443H3.2844Z"
                                  fill="#B5A3C0"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Strategic sourcing with curated network of vendors
                              across geographies, sectors and specialities
                            </div>
                          </div>{" "}
                          <div className="flex flex-row gap-2 items-center">
                            <div className="px-2 py-3 border-1 bg-white border-gray-400 rounded-xl">
                              <svg
                                width="25"
                                height="16"
                                viewBox="0 0 25 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.9673 0.601432H15.608V0.960663V2.51865V2.87788H15.9673H20.4744L14.3251 8.71189L11.0473 5.60225L11.0473 5.60221C10.8247 5.39107 10.5266 5.27555 10.2196 5.27555C9.91253 5.27555 9.61448 5.39107 9.39186 5.60221L9.39183 5.60225L0.940256 13.6204L0.66556 13.881L0.940256 14.1416L2.10129 15.2431L2.34853 15.4777L2.59578 15.2431L10.2196 8.01027L13.4973 11.1199L13.4974 11.12C13.72 11.3311 14.018 11.4466 14.3251 11.4466C14.6321 11.4466 14.9302 11.3311 15.1528 11.12L15.1528 11.1199L22.1768 4.45612V8.75057V9.10981H22.5361H24.1783H24.5375V8.75057V0.960663V0.601432H24.1783H15.9673Z"
                                  fill="#B5A3C0"
                                  stroke="#B5A3C0"
                                  stroke-width="0.718461"
                                />
                              </svg>
                            </div>
                            <div className="body-3 headingColor text-left">
                              Powerful gateway to the future of optimised
                              sourcing
                            </div>
                          </div>{" "}
                        </div>
                        <div className="pt-4">
                          <KnowMore path="/features/9">Know More</KnowMore>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-4/12 ">
                    <Image
                      className="h-full w-full md:p-4 max-h-[400px]  block dark:hidden scale-110"
                      src={`/asset/feature-slide/feature-slide-8.png`}
                      alt="hero image"
                      loading="lazy"
                      width="400"
                      height="400"
                    />
                    <Image
                      className="h-full w-full md:p-4 max-h-[400px]  hidden dark:block scale-110"
                      src={`/asset/feature-slide/feature-slide-8.png`}
                      alt="hero image"
                      loading="lazy"
                      width="400"
                      height="400"
                    />

                    {/* feature-slide-1-dark */}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between pt-2 ">
                  <div className="flex flex-row items-center gap-3 pb-4">
                    <div className="body-2 headingColor">01</div>
                    <div className="body-2 headingColor">02</div>
                    <div className="body-2 headingColor">03</div>
                    <div className="body-2 headingColor">04</div>
                    <div className="body-2 headingColor">05</div>
                    <div className="body-2 headingColor">06</div>

                    <div className="body-2 headingColor">07</div>
                    <div className=" heading headingColor-2">08</div>
                    <div>
                      <svg
                        width="60"
                        height="2"
                        viewBox="0 0 60 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.912598"
                          y1="0.91201"
                          x2="102.216"
                          y2="0.912009"
                          stroke="#463C4B"
                          stroke-width="0.718461"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6">
                    <div id="prev">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="22.0337"
                          cy="22.5535"
                          r="21.6408"
                          fill="white"
                          stroke="#9C4AD3"
                          stroke-width="0.718461"
                        />
                        <path
                          d="M14.1528 22.3414L24.2365 31.908L25.6482 30.5686L16.9763 22.3414L25.6482 14.1142L24.2365 12.7748L14.1528 22.3414Z"
                          fill="#9C4AD3"
                        />
                      </svg>
                    </div>
                    <div id="next">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="22.0337"
                          cy="22.5535"
                          r="21.6408"
                          fill="white"
                          stroke="#9C4AD3"
                          stroke-width="0.718461"
                        />
                        <path
                          d="M29.981 22.3417L19.8973 12.7751L18.4856 14.1145L27.1575 22.3417L18.4856 30.5689L19.8973 31.9083L29.981 22.3417Z"
                          fill="#9C4AD3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <style>
        {`
        .mainDiv {
        position: relative;
        height: 100%;
        padding: 20px;
        width: 100%;
      }

      .swiper-button-next::after,
        .swiper-button-prev::after {
            content: "";
        }

        .swiper-wrapper{
            display: flex;
            align-items: center;
        } 

        .swiper-button-next,
        .swiper-button-prev {
         
        }

        .swiper {    
            height: 100%;
        }
       
        @media (min-width: 768px) { 
        .mainDiv {
        position: relative;
        width: 100%
      } 

      .swiper-slide img {       
        object-fit: contain;
        padding: 0rem 0rem;
        padding-top: 2rem;
        padding-right: 2rem;
    }


    
      }
      @media (min-width: 1024px) { 
        .mainDiv {
        position: relative;
        padding: 40px;
        width: 100%
      } 

   

        .swiper-slide {
            
            text-align: center;
            font-size: 18px;
            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
        }
        .swiper-slide img {          
            object-fit: contain;
        }
    

        `}
      </style>
    </div>
  );
}
