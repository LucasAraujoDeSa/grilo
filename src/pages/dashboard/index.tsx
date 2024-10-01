import { ReactNode, useState } from "react";
import { ItensMenu } from "./submenus/itens";
import { AsideProvider } from "@/shared/context/aside-context";
import { Aside } from "@/shared/components/aside";
import { Navbar } from "@/shared/components/navbar";

function DashboardPage() {
  const [currentMenu, setCurrentMenu] = useState<ReactNode>(<ItensMenu />);

  const handleChangeMenu = (section: ReactNode) => {
    setCurrentMenu(section);
  };

  return (
    <>
      <AsideProvider>
        <Aside handleChangeMenu={handleChangeMenu} />
        <Navbar hasAside />
        <main className="lg:pl-72 pt-20">
          <div className="p-4">{currentMenu}</div>
        </main>
      </AsideProvider>
    </>
  );
}

export default DashboardPage;
