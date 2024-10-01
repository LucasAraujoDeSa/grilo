import { createContext, ReactNode, useState } from "react";

type AsideContextProps = {
  isOpen: boolean;
  toggleAside: () => void;
};

export const AsideContext = createContext<AsideContextProps>(
  {} as AsideContextProps
);

type AsideProviderProps = {
  children: ReactNode;
};

export function AsideProvider({ children }: AsideProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAside = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <AsideContext.Provider value={{ isOpen, toggleAside }}>
      {children}
    </AsideContext.Provider>
  );
}
