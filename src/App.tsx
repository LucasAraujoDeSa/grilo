import { Aside } from "./components/aside";
import { Navbar } from "./components/navbar";
import { AsideProvider } from "./context/aside-context";

function App() {
  return (
    <>
      <AsideProvider>
        <Aside />
        <Navbar />
      </AsideProvider>
    </>
  );
}

export default App;
