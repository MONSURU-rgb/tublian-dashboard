import { Sidebar } from "./home";
import { MainPage } from "./home";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});
function Demo() {
  return <MantineProvider theme={theme}>{/* Your app here */}</MantineProvider>;
}
export default function Home() {
  return (
    <MantineProvider theme={theme}>
      <div className="grid lg:grid-cols-[234px_1fr] grid-cols-[74px_1fr]">
        <Sidebar />
        <MainPage />
      </div>
    </MantineProvider>
  );
}
