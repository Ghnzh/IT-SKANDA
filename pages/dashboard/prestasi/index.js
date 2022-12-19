import axios from "axios";
import Layout from "../../../components/Layout";
import { PrestasiCard } from "../../../components/PrestasiCard";

function PrestasiPage({ prestasi = [] }) {
  const renderPrestasi = () => {
    if (prestasi.length === 0) return <h1 className="text-black">No Prestasi</h1>;
    return prestasi.map((prestasi) => <PrestasiCard key={prestasi.id} prestasi={prestasi} />);
  };

  return (
    <Layout>
      <div className="">{renderPrestasi()}</div>
    </Layout>
  );
}

export default PrestasiPage;

export const getServerSideProps = async () => {
  const { data: prestasi } = await axios.get("http://localhost:3000/api/prestasi");

  return {
    props: {
      prestasi,
    },
  };
};
