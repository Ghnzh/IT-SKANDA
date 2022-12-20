import Head from "next/head";
import axios from "axios";
import CardGuru from "../components/CardGuru";
import { Navbar } from "../components/navbar";
import Footer from "../components/Footer";

function AboutUs({ guru = [] }) {
  const renderGuru = () => {
    if (guru.length === 0) return <h1 className="text-center font-medium text-[40px]">Data Guru Tidak Ada</h1>;
    return guru.map((guru) => <CardGuru key={guru.id} guru={guru} />);
  };
  return (
    <>
      <Head>
        <title>About Us | IT SKANDA</title>
      </Head>
      <Navbar />
      <section>
        <div className="flex justify-center items-center h-screen bg-ijo text-banana rounded-b-[40px]">
          <h1 className="text-[80px] font-semibold">About Us</h1>
        </div>
        <div className="flex flex-col justify-center items-center px-12 -mt-20 mb-20">
          <div alt="foto" className="bg-auto bg-[url('/Tech-Institute-02.jpg')] rounded-2xl mx-auto flex h-[500px] w-[90%]"></div>
          <div className="flex justify-between text-ijo px-24 py-12">
            <h1 className="font-semibold text-[40px] w-1/2">Profile IT Skanda</h1>
            <p className="w-1/2 text-right">
              The string of simple words above is worthy of contemplation by anyone, who feels part of the education system at SMK Negeri 2 Pekanbaru, in order to introduce this school to anyone who needs information. And if you need deeper
              information, for this reason through this Website, we introduce SMKN 2 Pekanbaru to anyone who has time to read. With our meanings, we always open the doors and windows wide, so that anyone can see, watch, watch, and enjoy
              whatever is inside, not even from the outside, but welcome to come inside to integrate with each other.
            </p>
          </div>
          <div className="flex justify-between text-ijo px-24 py-12">
            <h1 className="font-semibold text-[40px] w-1/2">Vision & Mision</h1>
            <p className="w-1/2 text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate metus vitae lobortis convallis. Nulla a ultricies ligula. Nunc fermentum ornare ipsum, ac blandit sem iaculis sed.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-ijo text-banana rounded-t-[40px] pb-12">
          <p className="font-semibold text-[60px] text-center py-12">Teachers.</p>
          <div className="grid lg:grid-cols-4 justify-center px-12">{renderGuru()}</div>
        </div>
        <div className="h-screen bg-[#97C74B] text-ijo flex items-center">
          <div className="w-1/2 px-12">
            <h1 className="font-semibold text-[50px]">Our Achievement</h1>
          </div>
          <div className="w-1/2 h-full bg-cover bg-[url('/achievment.jpg')]"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;

export const getServerSideProps = async () => {
  const { data: guru } = await axios.get("http://localhost:3000/api/guru");

  return {
    props: {
      guru,
    },
  };
};
