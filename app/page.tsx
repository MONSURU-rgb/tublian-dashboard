import { Sidebar } from "./home";
import { MainPage } from "./home";

export default function Home() {
  return (
    <div className="sm:grid lg:grid-cols-[234px_1fr] md:grid-cols-[74px_1fr] flex bg-[#121212] no-scrollbar">
      <Sidebar />
      <MainPage />
    </div>
  );
}
