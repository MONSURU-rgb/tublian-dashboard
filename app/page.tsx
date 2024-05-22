import { Sidebar } from "./home";
import { MainPage } from "./home";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-[234px_1fr] grid-cols-[74px_1fr]">
      <Sidebar />
      <MainPage />
    </div>
  );
}
