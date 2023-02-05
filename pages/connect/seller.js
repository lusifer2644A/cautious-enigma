import React, { useState } from "react";
import Header from "./../../components/Header";
import Footer from "../../components/Footer";
import Airtable from "airtable";
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyaQg6ltysYqE1Ot",
});
var base = Airtable.base("appAaevy9PbSTpafU");

export default function Index() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    base("Seller")
      .create([
        {
          fields: {
            email: email,
            name: name,
            phone: phone,
            company: company,
          },
        },
      ])
      .then((records) => {
        setEmail("");
        setName("");
        setPhone("");
        setCompany("");
      });
  };

  return (
    <div>
      <div className="main">
        <div className=" ">
          <Header />
        </div>
        <div className="container pt-40 md:pt-60 ">
          <h1 className="heading headingColor-2 text-center">
            Let’s work together
          </h1>
          <h1 className="sub-heading headingColor-2 text-center pt-4">
            If you are a brand looking to understand and maximize your global
            potential. Or if you are an ecosystem partner who can help improve
            the global e-commerce journey. Please get in touch with us.
          </h1>
        </div>
        <div className=" bg-[#F8F8F8]  mt-8 md:mt-20 pt-8 dark:input_contact">
          <div className="container pt-0 md:pt-10">
            <div className="grid-2x2 pb-40 items-start">
              <div className="md:w-2/4 px-4">
                <div className="flex flex-col gap-4">
                  <h1 className="heading-2 headingColor2 text-start">
                    Become a <br />
                    goGLOCAL Partner
                  </h1>
                  <p className=" subtitle headingColor text-start">
                    Skyrocket your business today
                  </p>
                  <p className="body-2 headingColor text-start">
                    Our broad selection of local and international marketplaces
                    will help connect your store to millions of consumers and
                    grow internationally. <br />
                    <br />
                    We are looking to onboard partners who can help provide a
                    smoother global e-commerce experience.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-2/4 flex flex-col gap-4 pt-20 md:pt-0">
                <h1 className="heading-2 headingColor-2 text-center ">
                  Get in touch with us
                </h1>
                <div className="flex flex-col gap-4 justify-center items-center mx-auto w-full px-8 ">
                  <input
                    className="bg-[#D8D8D8] dark:bg-transparent border-2 border-[#D8D8D8] py-4 px-4 md:px-8 w-full rounded-xl focus:outline-none outline-none text-white"
                    placeholder="your company’s name"
                    name={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                  <input
                    className="bg-[#D8D8D8] dark:bg-transparent border-2 border-[#D8D8D8] py-4 px-4 md:px-8 w-full rounded-xl focus:outline-none outline-none text-white"
                    placeholder="email"
                    name={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />{" "}
                  <input
                    className="bg-[#D8D8D8] dark:bg-transparent border-2 border-[#D8D8D8] dark:input_contact py-4 px-4 md:px-8 w-full rounded-xl focus:outline-none outline-none text-white"
                    placeholder="phone number"
                    name={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />{" "}
                  <input
                    className="bg-[#D8D8D8] dark:bg-transparent border-2 border-[#D8D8D8]  py-4 px-4 md:px-8 w-full rounded-xl focus:outline-none outline-none text-white"
                    placeholder="contact person’s name"
                    name={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <button
                    onClick={handleSubmit}
                    className="accent-grad w-full py-4 px-4 md:px-8 rounded-xl focus:outline-none outline-none text-black"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
