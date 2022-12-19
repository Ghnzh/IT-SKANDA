import Head from "next/head";
import { Navbar } from "../../components/navbar";
import Footer from "../../components/footer";
import CardProduct from "../../components/CardProduct";
import axios from "axios";

function Product({ products = [] }) {
  const renderProducts = () => {
    if (products.length === 0) return <h1 className="text-center font-semibold text-ijo text-[60px] col-span-2">Produk Belum Tersedia</h1>;
    return products.map((product) => <CardProduct key={product.id} product={product} />);
  };
  return (
    <>
      <Head>
        <title>Products | SMKN 2 PKU</title>
      </Head>
      <Navbar />
      <main className="bg-ijo">
        <div className="flex justify-center items-center h-screen bg-ijo text-banana rounded-b-[40px]">
          <h1 className="text-[80px] font-semibold">Some Creations We Build.</h1>
        </div>
        <div className=" bg-cream h-[2000px] p-20 mx-auto rounded-[40px]">
          <div className="grid grid-cols-2 justify-center items-center gap-10">{renderProducts()}</div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Product;

export const getServerSideProps = async () => {
  const { data: products } = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      products,
    },
  };
};
