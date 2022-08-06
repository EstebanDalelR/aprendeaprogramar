import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

import { MDXProvider } from "@mdx-js/react";

import Layout from "../components/layout";
import "../styles/globals.css";
import H2 from "../components/mdx/H2";
import H3 from "../components/mdx/H3";
import H4 from "../components/mdx/H4";
import NestedLayout from "../components/nested-layout";

let components = {
  h2: H2,
  h3: H3,
  h4: H4,
};
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const defaultLayout = (page: ReactElement) => {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? defaultLayout;
  return getLayout(
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
