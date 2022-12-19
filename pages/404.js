import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components/navbar";

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>404 | IT SKANDA</title>
      </Head>
      <Navbar />
      <section className="flex items-center justify-center h-screen">
        <div className="w-1/2 h-full bg-ijo rounded-r-2xl p-20 flex items-end">
          <h1 className="font-semibold text-[80px] text-banana">404</h1>
        </div>
        <div className="w-1/2 p-20 grid space-y-4">
          <h1 className="text-ijo lg:text-[80px] text-[40px] font-semibold">Oops!</h1>
          <p className="text-ijo max-w-sm font-acumin text-[18px]">
            The requested page could not be found. Perhaps you're looking for more information on itskanda.
            <br />
            <br /> If you still haven't found what you're looking for, Contact us.
          </p>
          {/* <button className="text-ijo font-semibold text-[18px] mt-6 py-2.5 px-5 rounded-xl border border-ijo">
            <Link href="/">
              <a>Back to Home &gt;</a>
            </Link>
          </button> */}
        </div>
      </section>
    </>
  );
}
