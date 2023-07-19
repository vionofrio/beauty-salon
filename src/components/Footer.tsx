import { InstagramIcon, FacebookIcon, YoutubeIcon } from "lucide-react";

import { Wrapper } from "./Wrapper";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-brand py-16">
      <Wrapper className="flex flex-col justify-between gap-8 tablet:flex-row tablet:items-center">
        <div className="space-y-6">
          <Logo large light />
          <div className="space-y-3">
            <div className="text-brand-lighter">&copy; 2021 BeautySalon.</div>
            <div className="text-brand-lighter">
              Todos os direitos reservados.
            </div>
          </div>
        </div>
        <ul className="flex gap-8">
          <li className="text-brand-lighter">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
          </li>
          <li className="text-brand-lighter">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
          </li>
          <li className="text-brand-lighter">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <YoutubeIcon />
            </a>
          </li>
        </ul>
      </Wrapper>
    </footer>
  );
};
