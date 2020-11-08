/**
 *
 * Head.js
 * @author Peter Laxalt
 * @description The website <head>.
 *
 */

// Core
import Head from "next/head";

// Begin Interface
//////////////////////////////////////////////////////////////////////

interface SiteHead {
  title: string;
}

// Begin Component
//////////////////////////////////////////////////////////////////////

export const SiteHead = ({ title = "This is the default title" }: SiteHead) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};
