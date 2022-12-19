import axios from "axios";
import Head from "next/head";
import CardBlog from "../../components/CardBlog";
import { Navbar } from "../../components/navbar";
import Footer from "../../components/Footer";

function Blog({ blog = [] }) {
  const renderBlog = () => {
    if (blog.length === 0) return <h1 className="text-center font-medium text-[40px]">blog not found</h1>;
    return blog.map((blog) => <CardBlog key={blog.id} blog={blog} />);
  };
  return (
    <>
      <Head>
        <title>Blogs | SMKN 2 PKU</title>
      </Head>
      <Navbar />
      <section>
        <div className="flex justify-center items-center h-screen bg-ijo text-banana rounded-b-[40px]">
          <h1 className="text-[80px] font-semibold">Blogs & School News</h1>
        </div>
        <div className="px-12 -mt-12 mb-12">
          <div className="grid lg:grid-cols-3 2xl:grid-cols-4 lg:gap-10 px-4">{renderBlog()}</div>
          {/* <nav className="grid place-items-center">
          <ul className="inline-flex -space-x-px">
            <li>
              <a
                href="#"
                className="px-3 py-2 ml-0 leading-tight text-ijo bg-white border border-green-300 rounded-l-lg hover:bg-green-100 hover:text-green-700 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a href="#" className="px-3 py-2 leading-tight text-ijo bg-white border border-green-300 hover:bg-green-100 hover:text-green-700 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-700 dark:hover:text-white">
                1
              </a>
            </li>
            <li>
              <a href="#" className="px-3 py-2 leading-tight text-ijo bg-white border border-green-300 hover:bg-green-100 hover:text-green-700 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-700 dark:hover:text-white">
                2
              </a>
            </li>
            <li>
              <a href="#" aria-current="page" className="px-3 py-2 text-blue-600 border border-green-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-green-700 dark:bg-green-700 dark:text-white">
                3
              </a>
            </li>
            <li>
              <a href="#" className="px-3 py-2 leading-tight text-ijo bg-white border border-green-300 hover:bg-green-100 hover:text-green-700 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-700 dark:hover:text-white">
                4
              </a>
            </li>
            <li>
              <a href="#" className="px-3 py-2 leading-tight text-ijo bg-white border border-green-300 hover:bg-green-100 hover:text-green-700 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-700 dark:hover:text-white">
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-ijo bg-white border border-green-300 rounded-r-lg hover:bg-green-100 hover:text-green-700 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav> */}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;

export const getServerSideProps = async () => {
  const { data: blog } = await axios.get("http://localhost:3000/api/blogs");

  return {
    props: {
      blog,
    },
  };
};
