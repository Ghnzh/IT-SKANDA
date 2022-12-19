import { Navbar } from "../../components/navbar";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import Footer from "../../components/Footer";
import CardBlog from "../../components/CardBlog";
import Image from "next/image";
import Link from "next/link";

function SingleBlog({ blog }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Blog | {blog.judul}</title>
      </Head>
      <Navbar />
      <main className="bg-ijo">
        <div className="flex flex-col h-screen items-center justify-center ">
          <Link href={`/blogs`}>
            <a className="text-banana font-medium">Return to Blog</a>
          </Link>
          <h1 className="text-[60px] font-semibold text-banana max-w-[800px] text-center leading-[90px]">{blog.judul}</h1>
        </div>
        <article className="bg-nav px-20 py-14 z-99 m-10 rounded-2xl">
          <header className="mb-4 lg:mb-8 not-format">
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                <div>
                  <a href="#" rel="author" className="text-[25px] font-semibold text-ijo">
                    Jese Leos
                  </a>
                  <p className="text-[14px] font-light text-gray-500">Graphic Designer, educator & CEO Flowbite</p>
                </div>
              </div>
              <p className="text-[20px] font-medium text-ijo">
                <p>Feb. 8, 2022</p>
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image src={`/blogImages/gurun.jpg`} width={1100} height={400} alt="foto" className="rounded-2xl mx-auto flex" />
            </div>
          </header>
          <div className="font-medium text-[18px]">
            <p>And there you have it! Everything you need to design and share prototypes — right in Flowbite Figma.</p>
            <br />

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </article>
        <Footer />
      </main>
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { data: blog } = await axios.get("http://localhost:3000/api/blogs/" + query.id);

  return {
    props: {
      blog,
    },
  };
};

export default SingleBlog;
