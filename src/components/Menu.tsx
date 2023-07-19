"use client";

import { useState } from "react";

import { MenuIcon, XIcon } from "lucide-react";

interface MenuProps {
  open?: boolean;
}

export const Menu = ({ open }: MenuProps) => {
  const [opened, setOpened] = useState(open);

  const handleState = () => {
    setOpened(!opened);
  };

  return (
    <>
      {opened ? (
        <nav className="fixed inset-0 z-20 grid place-items-center bg-white text-center">
          <button onClick={handleState} className="absolute right-6 top-6">
            <XIcon />
          </button>
          <ul className="grid gap-16">
            <li className="font-poppins text-3xl font-bold text-brand-dark">
              <a href="#">Início</a>
            </li>
            <li className="font-poppins text-3xl font-bold text-brand-dark">
              <a href="#">Sobre</a>
            </li>
            <li className="font-poppins text-3xl font-bold text-brand-dark">
              <a href="#">Serviços</a>
            </li>
            <li className="font-poppins text-3xl font-bold text-brand-dark">
              <a href="#">Depoimentos</a>
            </li>
            <li className="font-poppins text-3xl font-bold text-brand-dark">
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      ) : (
        <>
          <button onClick={handleState} className="text-brand">
            <MenuIcon />
          </button>
        </>
      )}
    </>
  );
};
