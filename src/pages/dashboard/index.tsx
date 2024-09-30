import { ReactNode, useState } from "react";
import { ItensMenu } from "./submenus/itens";
import { AsideProvider } from "@/context/aside-context";
import { Aside } from "@/components/aside";
import { Navbar } from "@/components/navbar";

function DashboardPage() {
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

export default DashboardPage;
