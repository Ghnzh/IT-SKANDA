import Head from "next/head";
import Link from "next/link";

export default function Masuk() {
  return (
    <>
      <Head>
        <title>Masuk | SMKN 2 PKU - Informatics Engineering</title>
      </Head>
      <section className="flex items-center h-screen text-ijo justify-center">
        <div>
          <div className="flex justify-center items-center space-x-8 mb-6">
            <div>
              <Link href="/">
                <a>
                  <img className="mx-auto flex items-center" src="../logo-smk.svg" alt="logo" />
                </a>
              </Link>
            </div>
            <div className="w-1/2 border-l-2 border-l-ijo px-8 text-ijo">
              <h1 className="text-[60px] font-semibold font-sf">Login</h1>
            </div>
          </div>
          <div className="py-6 space-y-4 md:space-y-6 sm:p-4 p-5">
            <h1 className="font-medium text-center">Welcome Back, Silahkan login data diri anda</h1>
            <form className="space-y-4 md:space-y-10" method="POST" action="#">
              <div className="space-y-5">
                <div className="relative">
                  <input
                    type="text"
                    id="Username"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-2xl border-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label
                    for="Username"
                    className="absolute text-md text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white rounded-xl px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-4"
                  >
                    Username
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="Password"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-2xl border-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label
                    for="Password"
                    className="absolute text-md text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white rounded-xl px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-4"
                  >
                    Password
                  </label>
                </div>

                <div className="flex items-center justify-between px-1">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-5 h-5 border border-gray-600 rounded-2xl bg-gray-50 focus:ring-3 focus:ring-green-700 " required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-black font-semibold">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-[#FF0000] ">
                    Forgot password?
                  </a>
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-ijo hover:scale-105 font-medium rounded-lg px-5 py-3 text-center duration-500">
                Sign in
              </button>
              <p className="text-center text-lg text-gray-500">
                Belum punya akun? {""}
                <Link href="/dashboard/daftar">
                  <a className="font-bold text-ijo">Daftar </a>
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
