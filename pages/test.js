import Head from "next/head";
import { motion } from "framer-motion";
import useDarkMode from "../utils/useDarkMode";
import styles from "../styles/Home.module.css";
import LogoSVG from "./../components/icons/logo";

export default function Home() {
  const [colorTheme, setTheme] = useDarkMode();

  const raysVariants = {
    initial: { rotate: 45 },
    animate: {
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  const coreVariants = {
    initial: { scale: 1.5 },
    animate: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  const variants = {
    initial: { scale: 0.6, rotate: 90 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    whileTap: {
      scale: 0.95,
      rotate: 15
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Goglocal site</title>
        <meta name="description" content="Goglocal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="h-full w-screen p-6 bg-light dark:bg-dark hero-pattern">
          {colorTheme === "light" ? (
            <motion.svg
              onClick={() => setTheme("light")}
              key="sun"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              whileTap={{
                scale: 0.95,
                rotate: 15
              }}
              style={{ originX: "50%", originY: "50%" }}
            >
              <motion.circle
                cx="11.9998"
                cy="11.9998"
                r="5.75375"
                fill="#fffff"
                initial="initial"
                animate="animate"
                variants={coreVariants}
              />
              <motion.g
                initial="initial"
                animate="animate"
                variants={raysVariants}
              >
                <circle
                  cx="3.08982"
                  cy="6.85502"
                  r="1.71143"
                  transform="rotate(-60 3.08982 6.85502)"
                  fill="#fffff"
                />
                <circle
                  cx="3.0903"
                  cy="17.1436"
                  r="1.71143"
                  transform="rotate(-120 3.0903 17.1436)"
                  fill="#fffff"
                />
                <circle cx="12" cy="22.2881" r="1.71143" fill="#fffff" />
                <circle
                  cx="20.9101"
                  cy="17.1436"
                  r="1.71143"
                  transform="rotate(-60 20.9101 17.1436)"
                  fill="#fffff"
                />
                <circle
                  cx="20.9101"
                  cy="6.8555"
                  r="1.71143"
                  transform="rotate(-120 20.9101 6.8555)"
                  fill="#fffff"
                />
                <circle cx="12" cy="1.71143" r="1.71143" fill="#fffff" />
              </motion.g>
            </motion.svg>
          ) : (
            <motion.svg
              onClick={() => setTheme("dark")}
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 50 50"
              key="moon"
            >
              <motion.path
                d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z"
                fill="currentColor"
                initial="initial"
                animate="animate"
                whileTap="whileTap"
                variants={variants}
              />
            </motion.svg>
          )}
          <LogoSVG />
          <div className="pt-16"></div>
          <div className="flex flex-col gap-8">
            <div
              className="heading text-dark-1 dark:text-light-1 cursor-pointer"
              data-clipboard-text="heading"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </div>
            <div
              className="heading-2 text-dark-1 dark:text-light-1 cursor-pointer"
              data-clipboard-text="heading-2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </div>
            <div
              className="sub-heading text-dark-1 dark:text-light-1 cursor-pointer"
              data-clipboard-text="sub-heading"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </div>
            <div
              className="sub-heading-2 text-dark-2 dark:text-light-2 cursor-pointer"
              data-clipboard-text="sub-heading-2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </div>
            <div
              className="subtitle-1 text-dark-2 dark:text-light-2 cursor-pointer"
              data-clipboard-text="subtitle-1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </div>
            <div
              className="subtitle-2 text-dark-2 dark:text-light-2 cursor-pointer"
              data-clipboard-text="subtitle-2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </div>
            <div
              className="body-1 text-dark-2 dark:text-light-2 cursor-pointer"
              data-clipboard-text="body-1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </div>
            <div
              className="body-2 text-dark-2 dark:text-light-2 cursor-pointer"
              data-clipboard-text="body-2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 items-center justify-center mx-auto pt-20">
            <div
              className="h-60 w-60 main-grad rounded-xl cursor-pointer items-center justify-center mx-auto"
              data-clipboard-text="main-grad"
            />
            <div
              className="h-60 w-60 main-grad-2 rounded-xl cursor-pointer items-center justify-center mx-auto"
              data-clipboard-text="main-grad-2"
            />
            <div
              className="h-60 w-60 accent-grad rounded-xl cursor-pointer items-center justify-center max-auto"
              data-clipboard-text="accent-grad"
            />
            <div
              className="h-60 w-60 dark-grad-cover rounded-xl cursor-pointer items-center justify-center mx-auto"
              data-clipboard-text="accent-grad"
            />
          </div>
          <div className="grid grid-cols-6 gap-8 items-center justify-center mx-auto pt-20">
            <div
              className="h-40 w-40 bg-dark-1  rounded-xl cursor-pointer"
              data-clipboard-text="dark-1"
            />
            <div
              className="h-40 w-40 bg-dark-2 rounded-xl cursor-pointer"
              data-clipboard-text="body-1"
            />
            <div
              className="h-40 w-40 bg-light-1 border-2 rounded-xl"
              data-clipboard-text="dark-2"
            />
            <div
              className="h-40 w-40 bg-light-2 border-2 rounded-xl cursor-pointer"
              data-clipboard-text="light-2"
            />
            <div
              className="h-40 w-40 bg-accent-1 border-2 rounded-xl cursor-pointer"
              data-clipboard-text="accent-1"
            />
            <div
              className="h-40 w-40 bg-accent-2 border-2 rounded-xl cursor-pointer"
              data-clipboard-text="accent-2"
            />
          </div>
        </div>
      </main>
    </div>
  );
}



;
