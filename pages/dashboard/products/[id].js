import axios from "axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Layout from "../../../components/Layout";

function ProductPage({ product }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await axios.delete("/api/products/" + id);
      toast.success("Task deleted");
      router.push("/dashboard/products");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <Layout>
      <div className="p-6 bg-white dark:bg-gray-800">
        <p>Name: {product.name}</p>
        <p>Description: {product.desc}</p>
        <p>Price: {product.price}</p>
      </div>

      <div className="mt-7 flex justify-center">
        <button className="bg-red-500 hover:bg-red-700 py-2 px-3 rounded" onClick={() => handleDelete(product.id)}>
          delete
        </button>
        <button className="bg-gray-500 hover:bg-gray-800 ml-2 py-2 px-5 rounded" onClick={() => router.push("/dashboard/products/edit/" + product.id)}>
          Edit
        </button>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { data: product } = await axios.get("http://localhost:3000/api/products/" + query.id);

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
