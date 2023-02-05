import { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
