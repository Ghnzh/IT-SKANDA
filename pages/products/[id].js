import { Navbar } from "../../components/navbar";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import Footer from "../../components/Footer";

function SingleProduct({ product }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Product | {product.name}</title>
      </Head>
      <Navbar />
      <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
            <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                <div class="inline-flex items-center mr-3 text-sm text-gray-900">
                  <img class="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                  <div>
                    <a href="#" rel="author" class="text-xl font-bold text-gray-900">
                      Jese Leos
                    </a>
                    <p class="text-base font-light text-gray-500">Graphic Designer, educator & CEO Flowbite</p>
                    <p class="text-base font-light text-gray-500">
                      <time pubdate datetime="2022-02-08" title="February 8th, 2022">
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">{product.name}</h1>
            </header>
            {/* <img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png" alt="" /> */}
            <p>{product.desc}</p>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { data: product } = await axios.get("http://localhost:3000/api/products/" + query.id);

  console.log(product);

  return {
    props: {
      product,
    },
  };
};

export default SingleProduct;
