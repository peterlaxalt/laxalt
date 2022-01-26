// /pages/_app_.js
import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { ColorContext, ColorContext_Dark_Defaults, useColorContext } from "../constants/styles/Color";
import { LaxaltContext, useLaxaltState } from "../state";

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
  const laxaltState = useLaxaltState();

  // Render our App
  return (
    <LaxaltContext.Provider value={laxaltState}>
      <ColorContext.Provider value={colorTheme}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ColorContext.Provider>
    </LaxaltContext.Provider>
  );
};

export default MyApp;
