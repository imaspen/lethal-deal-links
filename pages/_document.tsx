import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap"
          rel="stylesheet"
        />

        <meta name="theme-color" content="#7c1e21" />

        <link rel="icon" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-128.png" sizes="128x128" />
        <link rel="icon" href="/favicon-192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon-180.png" sizes="180x180" />

        <meta property="og:title" content="Lethal Deal" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lethaldeal.imaspen.dev/" />
        <meta
          property="og:image"
          content="https://lethaldeal.imaspen.dev/splash.png"
        />
        <meta
          name="og:description"
          content="Links to the portfolios of Lethal Deal’s development team."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lethaldeal.imaspen.dev" />
        <meta property="twitter:url" content="https://lethaldeal.imaspen.dev" />
        <meta name="twitter:title" content="Lethal Deal" />
        <meta
          name="twitter:description"
          content="Links to the portfolios of Lethal Deal’s development team."
        />
        <meta
          name="twitter:image"
          content="https://lethaldeal.imaspen.dev/splash.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
