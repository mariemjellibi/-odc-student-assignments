import Table from "./components/table";

export default function App() {
  return (
    <>
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
