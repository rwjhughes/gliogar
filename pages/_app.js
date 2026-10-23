import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next"
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta key="og:url" property="og:url" content="https://gliogar.ie" />
        <meta key="og:title" property="og:title" content="Féile Ghliogar" />
        <meta key="og:description" property="og:description" content="Féile ealaíne ar an gCeathrú Rua, 5 - 7 Márta 2027." />
        <meta key="twitter:title" property="twitter:title" content="Féile Ghliogar" />
        <meta key="twitter:description" property="twitter:description" content="Féile ealaíne ar an gCeathrú Rua, 5 - 7 Márta 2027." />
        <meta key="twitter:image" property="twitter:image" content="https://gliogar.ie/imgs/feile_ghliogar_og.png" />
        <meta key="twitter:url" property="twitter:url" content="https://gliogar.ie" />
        <meta key="og:image" property="og:image" content="https://gliogar.ie/imgs/feile_ghliogar_og.png" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
