// /pages/_app_.js
import React from "react";
import { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { ColorContext, useColorContext } from "../constants/styles/Color";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_CustomAppData = AppProps & {};

/**
 *
 * /pages/_app_.js
 * @author Peter Laxalt
 * @description The wrapper around every page. This is the best place to load data and
 * @description store it in our React Context to be accessible anywhere, so we are doing
 * @description one call for all data at a time.
 *
 */

const MyApp = ({ Component, pageProps }: LMNTS_CustomAppData) => {
  const colorTheme = useColorContext();

  // Render our App
  return (
    <ColorContext.Provider value={colorTheme}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ColorContext.Provider>
  );
};

export default MyApp;
