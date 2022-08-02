import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";

import Layout from "../components/layout";
import "../styles/globals.css";
import H2 from "../components/mdx/H2";
import H3 from "../components/mdx/H3";
import H4 from "../components/mdx/H4";
let components = {
  h2: H2,
  h3: H3,
  h4: H4,
};
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </Layout>
  );
}
