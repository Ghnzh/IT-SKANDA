import Head from "next/head";
import { Navbar } from "../components/navbar";
import Footer from "../components/Footer";
// import CardProduct from "../../components/CardProduct";
import axios from "axios";

function FAQPage({ faq = [] }) {
  //   const renderfaq = () => {
  //     if (faq.length === 0) return <h1 className="text-center font-semibold text-ijo text-[60px] col-span-2">Produk Belum Tersedia</h1>;
  //     return faq.map((faq) => <Cardfaq key={faq.id} faq={faq} />);
  //   };
  return (
    <>
      <Head>
        <title>FAQ | IT SKANDA</title>
      </Head>
      <Navbar />
      <main>
        <div className="flex flex-col justify-center items-center h-screen bg-ijo text-banana rounded-b-[40px]">
          <h1 className="text-[80px] font-semibold">Questions? We’ve</h1>
          <h1 className="text-[80px] font-semibold -mt-8">
            got <span className="bg-cream text-ijo rounded-xl rotate-3">answers.</span>
          </h1>
        </div>
        <div className="min-h-screen p-20 mx-auto ">
          <div className="flex justify-between text-ijo px-14">
            <h1 className="font-semibold text-[40px] w-1/2">All about IT Skanda</h1>
            {/* <div className="grid grid-cols-1 justify-center items-center gap-10">{renderfaq()}</div> */}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default FAQPage;

// export const getServerSideProps = async () => {
//   const { data: faq } = await axios.get("http://localhost:3000/api/faq");

//   return {
//     props: {
//       faq,
//     },
//   };
// };
