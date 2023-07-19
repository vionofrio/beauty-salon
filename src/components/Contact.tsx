import { PhoneIcon, MapPinIcon, MailIcon } from "lucide-react";

import { Wrapper } from "./Wrapper";
import { Button } from "./Button";

export const Contact = () => {
  return (
    <section className="py-20 tablet:py-40">
      <Wrapper className="flex flex-col justify-between gap-16 tablet:flex-row tablet:items-center">
        <div className="space-y-8 tablet:space-y-6">
          <div className="max-w-sm space-y-4 tablet:space-y-3">
            <h2 className="font-poppins text-3xl font-bold text-brand-dark tablet:text-4xl">
              Entre em contato com a gente!
            </h2>
            <p className="text-gray tablet:text-lg">
              Entre em contato com a BeautySalon, queremos tirar suas dúvidas,
              ouvir suas críticas e sugestões.
            </p>
          </div>
          <Button.Root>
            <Button.Icon icon={PhoneIcon} />
            Entrar em contato
          </Button.Root>
        </div>
        <ul className="space-y-8">
          <li className="flex items-center gap-3 text-gray tablet:text-lg">
            <PhoneIcon className="text-brand" />
            11 99845-6754
          </li>
          <li className="flex items-center gap-3 text-gray tablet:text-lg">
            <MapPinIcon className="text-brand" />
            R. Amauri Souza, 346
          </li>
          <li className="flex items-center gap-3 text-gray tablet:text-lg">
            <MailIcon className="text-brand" />
            contato@BeautySalon.com
          </li>
        </ul>
      </Wrapper>
    </section>
  );
};
