import axios from "axios";
import { PrestasiForm } from "../../../components/PrestasiForm";
import Layout from "../../../components/Layout";

function NewPrestasiPage() {
  return (
    <Layout>
      <div className="h-5/6 grid place-items-center">
        <PrestasiForm />
      </div>
    </Layout>
  );
}
export default NewPrestasiPage;

export const getServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:3000/api/prestasi");

  return {
    props: {
      prestasi: res.data,
    },
  };
};
