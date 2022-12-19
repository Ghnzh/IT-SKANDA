import Head from "next/head";
import axios from "axios";
import { HistoryCard } from "../../components/historyCard";
import Layout from "../../components/Layout";

function Dashboard({ history = [] }) {
  const renderHistory = () => {
    if (history.length === 0) return <h1 className="text-center font-semibold text-[40px] capitalize">history not found</h1>;
    return history.map((history) => <HistoryCard history={history} />);
  };
  return (
    <>
      <Head>
        <title>Dashboard | SMKN 2 PKU</title>
      </Head>
      <Layout>
        <div className="mb-8 pb-6 border-b border-b-slate-600">
          <h1 className="text-2xl font-semibold">Recent Activity</h1>
        </div>
        <div className="grid space-y-6">{renderHistory()}</div>
      </Layout>
    </>
  );
}

export default Dashboard;

export const getServerSideProps = async () => {
  const { data: history } = await axios.get("http://localhost:3000/api/history");

  return {
    props: {
      history,
    },
  };
};
