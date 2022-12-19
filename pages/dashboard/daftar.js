import Head from "next/head";
import Link from "next/link";

export default function Daftar() {
  return (
    <>
      <Head>
        <title>Registrasi | SMKN 2 PKU - Informatics Engineering</title>
      </Head>
      <section className="flex items-center h-screen text-black justify-between p-20">
        <div className="lg:w-2/3 h-full bg-white rounded-xl border-2 border-ijo"></div>
        <div className="lg:w-1/2 rounded-lg px-6 mx-auto">
          <div className="flex justify-center items-center space-x-8">
            <a href="#">
              <img className="m-auto flex items-center" src="../logo-smk.svg" alt="logo" />
            </a>
            <div className="border-l-2 border-l-black px-8">
              <h1 className="text-[40px] font-semibold font-sf">Daftar</h1>
            </div>
          </div>
          <div className="py-8 space-y-4 md:space-y-6 sm:p-8 p-4">
            <h1 className="font-medium text-center">Silahkan Registrasi data diri anda dahulu</h1>
            <form className="space-y-4 md:space-y-10" method="POST" action="#">
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="Username"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-cream rounded-2xl border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label
                    for="Username"
                    className="absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-cream px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-4"
                  >
                    Username
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="Email"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-cream rounded-2xl border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label
                    for="Email"
                    className="absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-cream px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-4"
                  >
                    Email
                  </label>
                </div>
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      id="Password"
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-cream rounded-2xl border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      placeholder=" "
                      autoComplete="off"
                    />
                    <label
                      for="Password"
                      className="absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-cream px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-4"
                    >
                      Password
                    </label>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      id="Confirm Password"
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-cream rounded-2xl border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      placeholder=" "
                      autoComplete="off"
                    />
                    <label
                      for="Confirm Password"
                      className="absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-cream px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-4"
                    >
                      Confirm Password
                    </label>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-ijo hover:scale-105 rounded-lg px-5 py-3 text-center duration-500">
                Register
              </button>
              <p className="text-center text-md font-medium text-gray-500">
                Sudah punya akun? {""}
                <Link href="/dashboard/masuk">
                  <a className="font-bold text-ijo">Login{"   "}</a>
                </Link>
                disini
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
