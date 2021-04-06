import { AppProps } from "next/app";
import "../styles/index.css";
import { GlobalStyles } from "twin.macro";
// import "../util/analytics";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}
