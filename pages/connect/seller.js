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
    base("Seller")
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

  function ValidateEmail(input) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

  function ValidatePhone(input) {
    var phoneno =
      /(?:\s+|)((0|(?:(\+|)91))(?:\s|-)*(?:(?:\d(?:\s|-)*\d{9})|(?:\d{2}(?:\s|-)*\d{8})|(?:\d{3}(?:\s|-)*\d{7}))|\d{10})(?:\s+|)/;
    if (input.match(phoneno)) {
      return true;
    } else {
      return false;
    }
  }

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
    } else if (!ValidatePhone(values.phone)) {
      errors.phone = "Please enter a valid phone number!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!ValidateEmail(values.email)) {
      errors.email = "Please enter a valid email!";
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
            <div className="flex flex-col justify-center  items-center py-16 md:py-40 px-5">
              <h1 className="main-heading2 md:main-heading headingColor2 text-center">
                Let’s work together
              </h1>
              <h1 className="subtitle text-center pt-4 max-w-[700px]  mt-5">
                If you are a brand looking to understand and maximize your
                global potential. Or if you are an ecosystem partner who can
                help improve the global e-commerce journey. Please get in touch
                with us.
              </h1>
            </div>
            <div className="bg-[#1D1125] py-20 px-6 md:px-12 rounded-b-[2rem]">
              <div className="flex flex-row gap-10 md:gap-10 justify-center items-center flex-wrap">
                {/* left  section */}
                <div className="flex flex-col gap-4 md:gap-8 max-w-xl">
                  <p className="heading-1 heading-color max-w-sm text-center md:text-start">
                    Become a goGLOCAL Partner
                  </p>
                  <p className="subtitle2 heading-color text-center md:text-start">
                    Skyrocket your business today
                  </p>
                  <p className="subtitle heading-color text-center md:text-start">
                    Our broad selection of local and international marketplaces
                    will help connect your store to millions of consumers and
                    grow internationally.
                  </p>
                  <p className="subtitle heading-color text-center md:text-start">
                    We are looking to onboard partners who can help provide a
                    smoother global e-commerce experience.
                  </p>
                </div>

                {/* right section */}
                <div className="flex flex-col gap-5 md:gap-10 justify-center items-center max-w-xl ">
                  <p className="subtitle2 heading-color">
                    Get in touch with us
                  </p>
                  <div className="flex flex-col gap-3 md:gap-5 justify-center ">
                    <div>
                      <input
                        className="bg-[#F0F0F0] dark:bg-transparent border-2 border-[#D8D8D8] py-4 px-4 md:px-8 w-full rounded-xl focus:outline-none outline-none text-black"
                        placeholder="Your company’s name"
                        name="company"
                        value={state.company}
                        onChange={handleChange}
                      />
                      <p className="formError">{formErrors.company}</p>
                    </div>
                    <div>
                      <input
                        className="bg-[#F0F0F0] dark:bg-transparent border-2 border-[#D8D8D8] py-4 px-4 md:px-8 w-full rounded-xl focus:outline-none outline-none text-black"
                        placeholder="Email"
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                      />
                      <p className="formError">{formErrors.email}</p>
                    </div>
                    <div>
                      <input
                        className="bg-[#F0F0F0] dark:bg-transparent border-2 border-[#D8D8D8] dark:input_contact py-4 px-4 md:px-8 w-full rounded-xl focus:outline-none outline-none text-black"
                        placeholder="Phone number"
                        name="phone"
                        value={state.phone}
                        onChange={handleChange}
                      />
                      <p className="formError">{formErrors.phone}</p>
                    </div>
                    <div>
                      <input
                        className="bg-[#F0F0F0] dark:bg-transparent border-2 border-[#D8D8D8]  py-4 px-4 md:px-8 w-full rounded-xl focus:outline-none outline-none text-black"
                        placeholder="Contact person’s name"
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
