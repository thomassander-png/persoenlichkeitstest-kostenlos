import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Globale Meta-Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Geo-Meta-Tags für regionale Auffindbarkeit */}
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Berlin" />
        <meta name="geo.position" content="52.5200;13.4050" />
        <meta name="ICBM" content="52.5200, 13.4050" />
        {/* Sprache */}
        <meta httpEquiv="content-language" content="de" />
        {/* hreflang für Sprachversionen */}
        <link rel="alternate" hrefLang="de" href="https://persoenlichkeitstest-kostenlos.de/" />
        <link rel="alternate" hrefLang="x-default" href="https://persoenlichkeitstest-kostenlos.de/" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Theme Color */}
        <meta name="theme-color" content="#060A14" />
        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        {/* Author */}
        <meta name="author" content="Social Media Venture GmbH" />
        <meta name="publisher" content="Social Media Venture GmbH" />
        {/* OG Site Name */}
        <meta property="og:site_name" content="persoenlichkeitstest-kostenlos.de" />
        <meta property="og:locale" content="de_DE" />
        {/* Twitter */}
        <meta name="twitter:site" content="@findurapp" />
        <meta name="twitter:creator" content="@findurapp" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
