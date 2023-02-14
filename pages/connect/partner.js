import React, { useEffect, useState } from "react";
import Header from "./../../components/Header";
import Footer from "../../components/Footer";
import Airtable from "airtable";
import Head from "next/head";
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyaQg6ltysYqE1Ot",
});
var base = Airtable.base("appAaevy9PbSTpafU");

export default function Index() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [loading, setLoading] = useState(false);

  const submitData = async () => {
    setLoading(true);
    base("Partner")
      .create([
        {
          fields: { ...state },
        },
      ])
      .then((records) => {
        setState({
          name: "",
          email: "",
          phone: "",
          company: "",
        });
      });
    setLoading(false);
  };

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      submitData();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.company) {
      errors.company = "Company is required!";
    }

    if (!values.name) {
      errors.name = "Name is required!";
    }

    if (!values.phone) {
      errors.phone = "Phone Number is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(state));
    setIsSubmit(true);
  };

  const handleChange = (e) => {
    setState((old) => {
      return {
        ...old,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <Head>
        <title>Goglocal Connect</title>
        <meta name="description" content="Goglocal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-light dark:bg-dark overflow-x-hidden">
        {/* Header */}

        <Header />
        <div className="absolute top-0 left-0 white-rad-grad md:w-[3000px] md:h-[1200px] -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>

        <div className="page-bg bg-[#AC2EED29] z-[10] static z-[1]">
          <div className="page-container main mb-10">
            {/* hero */}
            <div className="flex flex-col justify-center  items-center py-40 px-5">
              <h1 className="main-heading headingColor2 text-center">
                Let’s work together
              </h1>
              <h1 className="subtitle text-center pt-4 max-w-[700px]  mt-5">
                We believe in the power of a small group of thoughtful,
                committed, and smart individuals aspiring to change the world.
                If you think you can make a differnece get in touch with us
              </h1>
            </div>
            <div className="bg-[#1D1125] py-20 px-12 rounded-b-[2rem]">
              <div className="flex flex-row gap-10 md:gap-20 justify-center flex-wrap">
                {/* left  section */}
                <div className="flex flex-col gap-8 max-w-md">
                  <p className="heading-1 heading-color ">Join goGlocal Crew</p>

                  <p className="subtitle heading-color">
                    Here’s calling out to all the darers, dreamers and doers out
                    there – together we will accomplish the unimagined.
                  </p>
                </div>

                {/* right section */}
                <div className="flex flex-col gap-10 justify-center items-center max-w-xl ">
                  <p className="subtitle2 heading-color">
                    Get in touch with us
                  </p>
                  <div className="flex flex-col gap-5 justify-center ">
                    <div>
                      <input
                        className="bg-[#F0F0F0] dark:bg-transparent border-2 border-[#D8D8D8] py-4 px-4 md:px-8 w-full rounded-xl focus:outline-none outline-none text-black"
                        placeholder="your company’s name"
                        name="company"
                        value={state.company}
                        onChange={handleChange}
                      />
                      <p className="formError">{formErrors.company}</p>
                    </div>
                    <div>
                      <input
                        className="bg-[#F0F0F0] dark:bg-transparent border-2 border-[#D8D8D8] py-4 px-4 md:px-8 w-full rounded-xl focus:outline-none outline-none text-black"
                        placeholder="email"
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                      />
                      <p className="formError">{formErrors.email}</p>
                    </div>
                    <div>
                      <input
                        className="bg-[#F0F0F0] dark:bg-transparent border-2 border-[#D8D8D8] dark:input_contact py-4 px-4 md:px-8 w-full rounded-xl focus:outline-none outline-none text-black"
                        placeholder="phone number"
                        name="phone"
                        value={state.phone}
                        onChange={handleChange}
                      />
                      <p className="formError">{formErrors.phone}</p>
                    </div>
                    <div>
                      <input
                        className="bg-[#F0F0F0] dark:bg-transparent border-2 border-[#D8D8D8]  py-4 px-4 md:px-8 w-full rounded-xl focus:outline-none outline-none text-black"
                        placeholder="contact person’s name"
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                      />
                      <p className="formError">{formErrors.name}</p>
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="accent-grad w-full py-4 px-4 md:px-8 rounded-xl focus:outline-none outline-none text-black flex item-center justify-center"
                    >
                      {loading ? <div class="loader"></div> : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* footer */}
            {/* <div className="pt-0">
              <Footer />
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
}
