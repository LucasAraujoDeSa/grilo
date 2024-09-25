import { ReactNode, useState } from "react";
import { Aside } from "./components/aside";
import { Navbar } from "./components/navbar";
import { AsideProvider } from "./context/aside-context";
import { ItensMenu } from "./pages/dashboard/submenus/itens";

function App() {
  const [currentMenu, setCurrentMenu] = useState<ReactNode>(<ItensMenu />);

  const handleChangeMenu = (section: ReactNode) => {
    setCurrentMenu(section);
  };

  return (
    <>
      <AsideProvider>
        <Aside handleChangeMenu={handleChangeMenu} />
        <Navbar />
        <main className="lg:pl-72 pt-20">
          <div className="p-4">{currentMenu}</div>
        </main>
      </AsideProvider>
    </>
  );
}

export default App;
