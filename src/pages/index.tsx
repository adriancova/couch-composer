import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Couch Composer</title>
        <meta name="description" content="Couch composer app. Eventually?" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Couch <span className="text-[hsl(280,100%,70%)]">Composer</span>
          </h1>
          <Image
            src="/logo.jpeg"
            width={500}
            height={500}
            alt="Couch Composer"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
