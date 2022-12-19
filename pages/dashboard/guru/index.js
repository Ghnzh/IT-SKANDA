import axios from "axios";
import GuruCard from "../../../components/GuruCard";
import Layout from "../../../components/Layout";

function GuruDashboard({ guru = [] }) {
  const renderGuru = () => {
    if (guru.length === 0) return <h1>No guru</h1>;
    return guru.map((guru) => <GuruCard key={guru.id} guru={guru} />);
  };

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">{renderGuru()}</div>
    </Layout>
  );
}

export default GuruDashboard;

export const getServerSideProps = async () => {
  const { data: guru } = await axios.get("http://localhost:3000/api/guru");

  return {
    props: {
      guru,
    },
  };
};
