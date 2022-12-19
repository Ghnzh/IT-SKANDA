import axios from "axios";
import { BlogCard } from "../../../components/BlogCard";
import Head from "next/head";
import Sidebar from "../../../components/sidebar";
import Layout from "../../../components/Layout";

function BlogsPage({ blogs = [] }) {
  const renderBlogs = () => {
    if (blogs.length === 0) return <h1 className="text-black">No blogs</h1>;
    return blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />);
  };

  return (
    <>
      <Layout>
        <div className="grid grid-cols-3 gap-4">{renderBlogs()}</div>
      </Layout>
    </>
  );
}

export default BlogsPage;

export const getServerSideProps = async () => {
  const { data: blogs } = await axios.get("http://localhost:3000/api/blogs");

  return {
    props: {
      blogs,
    },
  };
};
