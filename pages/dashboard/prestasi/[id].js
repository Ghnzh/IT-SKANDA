import axios from "axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Layout from "../../../components/Layout";

function PrestasiPage({ prestasi }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await axios.delete("/api/prestasi/" + id);
      toast.success("Task deleted");
      router.push("/dashboard/prestasi");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <Layout>
      <div className="p-6 bg-white dark:bg-gray-800">
        <p>Nama Murid: {prestasi.nama_murid}</p>
        <p>Kelas: {prestasi.kelas}</p>
        <p>Nama Lomba: {prestasi.nama_lomba}</p>
      </div>

      <div className="mt-7 flex justify-center">
        <button className="bg-red-500 hover:bg-red-700 py-2 px-3 rounded" onClick={() => handleDelete(prestasi.id)}>
          delete
        </button>
        <button className="bg-gray-500 hover:bg-gray-800 ml-2 py-2 px-5 rounded" onClick={() => router.push("/dashboard/prestasi/edit/" + prestasi.id)}>
          Edit
        </button>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { data: prestasi } = await axios.get("http://localhost:3000/api/prestasi/" + query.id);

  return {
    props: {
      prestasi,
    },
  };
};

export default PrestasiPage;
