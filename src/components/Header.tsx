import { Wrapper } from "./Wrapper";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-light bg-brand-lighter py-5 laptop:py-6">
      <Wrapper className="flex items-center justify-between">
        <Logo />
        <div className="tablet:hidden">
          <Menu />
        </div>
        <nav className="hidden tablet:block">
          <ul className="flex gap-8">
            <li className="relative font-bold text-brand before:absolute before:inset-0 before:-bottom-5 before:top-auto before:h-0.5 before:translate-y-[calc(200%+1px)] before:bg-brand before:content-[''] laptop:before:-bottom-6">
              <a href="#">Início</a>
            </li>
            <li className="text-brand-dark">
              <a href="#">Sobre</a>
            </li>
            <li className="text-brand-dark">
              <a href="#">Serviços</a>
            </li>
            <li className="text-brand-dark">
              <a href="#">Depoimentos</a>
            </li>
            <li className="text-brand-dark">
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
};
