/* eslint-disable react/jsx-key */
import React from "react";
import { motion } from "framer-motion";
import Header from "./../components/Header";
import Image from "next/future/image";
import ThemeToggle from "../components/ThemeToggle";

export default function Index() {
  return (
    <div>
      <div className="main">
        <div className=" ">
          <Header />
        </div>
        <div className="pt-24 ">
          <iframe
            style={{
              width: "100%",
              height: "100vh",
              overflow: "scroll"
            }}
            src="https://recruitcrm.io/jobs/goGlocal_jobs"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

{
  /*  */
}
