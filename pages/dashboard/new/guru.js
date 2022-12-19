import axios from "axios";
import { GuruForm } from "../../../components/GuruForm";
import Layout from "../../../components/Layout";

function NewGuruPage() {
  return (
    <Layout>
      <div className="h-5/6 grid place-items-center">
        <GuruForm />
      </div>
    </Layout>
  );
}
export default NewGuruPage;

export const getServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:3000/api/guru");

  return {
    props: {
      guru: res.data,
    },
  };
};
