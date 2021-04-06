import React from "react";
import "styles/global.scss";
import "util/analytics.js";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
