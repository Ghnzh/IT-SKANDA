import Sidebar from "../components/sidebar";
import { Toaster } from "react-hot-toast";
export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <div className="bg-cream text-ijo min-h-screen p-10 lg:pl-72">
        <div className="container mx-auto h-full">{children}</div>
      </div>
      <Toaster />
    </>
  );
}
