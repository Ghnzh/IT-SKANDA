import axios from "axios";
import { BlogForm } from "../../../components/BlogForm";
import Layout from "../../../components/Layout";

function NewBlogPage() {
  return (
    <Layout>
      <div className="h-5/6 grid place-items-center">
        <BlogForm />
      </div>
    </Layout>
  );
}
export default NewBlogPage;

export const getServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:3000/api/blogs");

  return {
    props: {
      blogs: res.data,
    },
  };
};
