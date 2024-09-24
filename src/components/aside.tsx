import { AsideContext } from "@/context/aside-context";
import { BookIcon, FileTextIcon, LogOutIcon, UserIcon, X } from "lucide-react";
import { useContext } from "react";

export function Aside() {
  const { isOpen, toggleAside } = useContext(AsideContext);

  return (
    <aside
      className={`bg-white ${
        isOpen ? "flex" : "hidden"
      } z-50 fixed w-72 h-full border-2 flex-col justify-between lg:flex`}
    >
      <div>
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-green-600 fluid-lg font-semibold">Grilo</h1>
          <X className="lg:hidden" onClick={() => toggleAside()} />
        </div>
        <div>
          <ul className="p-4 space-y-4">
            <li className="flex cursor-pointer hover:opacity-25">
              <BookIcon className="mr-4" />
              <span>Itens</span>
            </li>
            <li className="flex cursor-pointer hover:opacity-25">
              <FileTextIcon className="mr-4" />
              <span>Orders</span>
            </li>
            <li className="flex cursor-pointer hover:opacity-25">
              <UserIcon className="mr-4" />
              <span>Employees</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex p-4 space-x-2 hover:opacity-25 cursor-pointer">
        <LogOutIcon />
        <h3>SignOut</h3>
      </div>
    </aside>
  );
}
