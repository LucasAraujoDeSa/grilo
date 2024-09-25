import { AsideContext } from "@/context/aside-context";
import { MenuIcon } from "lucide-react";
import { useContext } from "react";
import { Logo } from "./logo";

export function Navbar() {
  const { toggleAside } = useContext(AsideContext);

  return (
    <nav className="bg-white z-40 fixed w-full flex items-center justify-between h-16 p-4 shadow-md lg:pl-80">
      <div className="flex items-center">
        <MenuIcon className="lg:hidden mr-4" onClick={() => toggleAside()} />
        <Logo />
      </div>
    </nav>
  );
}
