import { AsideContext } from "@/context/aside-context";
import { MenuIcon } from "lucide-react";
import { useContext } from "react";

export function Navbar() {
  const { toggleAside } = useContext(AsideContext);

  return (
    <nav className="bg-white z-40 fixed w-full flex items-center justify-between h-16 p-4 shadow-md lg:pl-80">
      <div className="flex items-center space-x-4">
        <MenuIcon className="lg:hidden" onClick={() => toggleAside()} />
        <h1 className="text-green-600 fluid-lg font-semibold">Grilo</h1>
      </div>
      <div>
        <ul className="flex">
          <li className="mx-2">Home</li>
          <li className="mx-2">Profile</li>
        </ul>
      </div>
    </nav>
  );
}
