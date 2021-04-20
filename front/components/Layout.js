import { useEffect } from "react";
import { useRouter } from "next/router";
import { keepTheme } from "../utils/themes";
import Head from "next/head";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const router = useRouter();
 

  useEffect(() => {
    keepTheme();
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
       
      </Head>
      <div className="containerCustom">
        <Header />
        <Navigation />
        <div className="main">
          {children}
          
        </div>
      </div>
    </>
  );
}
