import { AppProps } from "next/app";
import "../styles/index.css";
import { GlobalStyles } from "twin.macro";
import Layout from "../components/layout";
// import "../util/analytics";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
