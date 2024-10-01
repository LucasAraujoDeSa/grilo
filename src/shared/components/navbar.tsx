import { AsideContext } from "@/shared/context/aside-context";
import { MenuIcon } from "lucide-react";
import { useContext } from "react";
import { Logo } from "./logo";
import Cookies from "js-cookie";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type NavbarProps = {
  hasAside: boolean;
};

export function Navbar({ hasAside }: NavbarProps) {
  const { toggleAside } = useContext(AsideContext);

  return (
    <nav
      className={`bg-white z-40 fixed w-full flex items-center justify-between h-16 p-4 shadow-md ${
        hasAside && "lg:pl-80"
      }`}
    >
      <div className="flex items-center">
        {hasAside && (
          <MenuIcon className="lg:hidden mr-4" onClick={() => toggleAside()} />
        )}
        <Logo />
      </div>
      {Cookies.get("@username") && (
        <div className="flex items-center space-x-2">
          <p>{Cookies.get("@username")}</p>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      )}
    </nav>
  );
}
