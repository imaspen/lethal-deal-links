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

        <link rel="icon" href="/path/to/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/path/to/favicon-128.png" sizes="128x128" />
        <link rel="icon" href="/path/to/favicon-192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon-180.png" sizes="180x180" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
