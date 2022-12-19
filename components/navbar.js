import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="fixed w-full top-0 z-[99] p-6 lg:px-20 2xl:px-40 lg:py-0">
        <div className="bg-nav py-4 px-6 rounded-xl lg:rounded-t-none lg:border-[0.5px] border-[#dfdfdf] border-t-0">
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:gap-x-12 text-sm">
              <Link href={`/about-us`}>
                <a className="font-medium text-gray-900 hover:text-gray-900">About Us</a>
              </Link>
              <Link href={`/blogs`}>
                <a className="font-medium text-gray-900 hover:text-gray-900">Articels</a>
              </Link>
              <Link href={`/products`}>
                <a className="font-medium text-gray-900 hover:text-gray-900">Products</a>
              </Link>
            </div>
            <div className="flex self-center justify-center lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link href={`/`}>
                <a className="-m-1.5 p-1.5 flex items-center space-x-2">
                  <img className="h-10" src="/logo-smk.svg" alt="" />
                  <p className="font-semibold text-2xl">IT Skanda</p>
                </a>
              </Link>
            </div>
            <div className="flex lg:hidden" onClick={handleClick}>
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end lg:items-center lg:gap-x-8">
              <Link href={`/faq`}>
                <a className="font-medium text-gray-900 hover:text-gray-900 text-sm">FAQ</a>
              </Link>
              <Link href={`/contact`}>
                <a className="font-medium text-gray-900 hover:text-gray-900 text-sm">Contact Us</a>
              </Link>
              <Link href={`/`}>
                <a className="inline-block rounded-full px-5 py-2.5 text-sm font-semibold leading-6  hover:scale-105 text-white bg-ijo duration-500">Join Us</a>
              </Link>
            </div>
          </nav>
          <div role="dialog" aria-modal="true">
            <div focus="true" className={`${active ? "" : "hidden"} fixed inset-0 z-10 overflow-y-auto bg-nav px-6 py-6 lg:hidden m-6 h-fit rounded-xl`}>
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <Link href={`/`}>
                    <a className="-m-1.5 p-1.5">
                      <img className="h-10" src="logo-smk.svg" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="flex" onClick={handleClick}>
                  <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ">
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 text-2xl">
                  <div className="space-y-2 py-6">
                    <Link href="/about-us">
                      <a className="-mx-3 block rounded-lg py-2 px-3 font-semibold leading-7 text-ijo">About Us</a>
                    </Link>
                    <Link href={`/blogs`}>
                      <a className="-mx-3 block rounded-lg py-2 px-3 font-semibold leading-7 text-ijo">Articel</a>
                    </Link>
                    <Link href={`/prodcuts`}>
                      <a className="-mx-3 block rounded-lg py-2 px-3 font-semibold leading-7 text-ijo">Products</a>
                    </Link>
                    <Link href={`/faq`}>
                      <a className="-mx-3 block rounded-lg py-2 px-3 font-semibold leading-7 text-ijo">FAQ</a>
                    </Link>
                    <Link href={`/contact`}>
                      <a className="-mx-3 block rounded-lg py-2 px-3 font-semibold leading-7 text-ijo">Contact Us</a>
                    </Link>
                  </div>
                  <div className="py-6">
                    <Link href={`/`}>
                      <a className="-mx-3 block rounded-lg py-2.5 px-3 font-semibold leading-6 text-ijo">Join Us</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${active ? "" : "hidden"}hidden justify-between items-center w-full md:flex md:w-auto md:order-1`} id="navbar-sticky" onClick={handleClick}></div>
    </>
  );
};
