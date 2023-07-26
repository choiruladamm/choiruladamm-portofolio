import React from "react";
import Head from "next/head";
import { Navbar } from "../global";

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc: string;
  };
  children?: JSX.Element | JSX.Element[];
};

function Page({ currentPage, meta: { title, desc }, children }: PageProps) {
  const pageTitle = `${
    currentPage === "Home"
      ? "Choirul Adam - Web Developer"
      : `${currentPage} - AdamCH`
  }`;

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen m-auto overflow-hidden text-white opening-box-animate-paddin md:overflow-visible"
      style={{
        maxWidth: "1200px",
      }}
    >
      <Head>
        <title>{pageTitle}</title>

        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />
      </Head>
      <main className="flex-1 w-full p-5 text-center">
        <div className="hidden sm:block">
          <Navbar currentPage="Home" />
        </div>
        {children}
      </main>
    </div>
  );
}

export default Page;
