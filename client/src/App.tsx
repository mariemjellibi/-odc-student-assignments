import { useNavigate } from "react-router-dom";
import Table from "./components/table";

export default function App() {
  const navigate=useNavigate();
  return (
    <>
<button 
  onClick={() => navigate("/getprogress")}
  className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all duration-300 ease-in-out"
>
  Get Progress
</button>
      <section className="pt-6 lg:pt-8 pb-10 lg:pb-20  bg-slate-300 h-full">
        <div className="">
          <div className="flex justify-center">
            <Table />
          </div>
        </div>
      </section>
    </>
  );
}
