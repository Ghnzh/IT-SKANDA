import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export function PrestasiForm() {
  const [prestasi, setPrestasi] = useState({
    nama_murid: "",
    kelas: "",
    prestasi: "",
    nama_lomba: "",
  });
  const router = useRouter();

  useEffect(() => {
    const fetchPrestasi = async (id) => {
      try {
        const { data } = await axios.get("/api/prestasi/" + id);
        setPrestasi(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (router.query?.id) {
      fetchPrestasi(router.query.id);
    }
    console.log("called");
  }, [router.query.id]);

  const handleChange = ({ target: { name, value } }) => setPrestasi({ ...prestasi, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (router.query?.id) {
        await axios.put("/api/prestasi/" + router.query.id, {
          nama_murid: prestasi.nama_murid,
          kelas: prestasi.kelas,
          prestasi: prestasi.prestasi,
          nama_lomba: prestasi.nama_lomba,
        });
        toast.success("Task Updated", {
          position: "bottom-center",
        });
      } else {
        await axios.post("/api/prestasi", prestasi);
        toast.success("Task Saved", {
          position: "bottom-center",
        });
      }

      router.push("/dashboard/prestasi");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="name">
            Nama Murid
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            type="text"
            placeholder="name"
            id="nama_murid"
            name="nama_murid"
            onChange={handleChange}
            value={prestasi.nama_murid}
            autoComplete="off"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 dark:text-white font-bold mb-2 text-sm">
            Kelas
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            name="kelas"
            placeholder="10.00"
            onChange={handleChange}
            value={prestasi.kelas}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="desc" className="block text-gray-700 dark:text-white font-bold mb-2 text-sm">
            Nama Lomba
          </label>
          <textarea
            name="nama_lomba"
            id="nama_lomba"
            rows="2"
            placeholder="Product description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            onChange={handleChange}
            value={prestasi.nama_lomba}
          ></textarea>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{router.query?.id ? "Update Prestasi" : "Save Prestasi"}</button>
      </form>
    </div>
  );
}
