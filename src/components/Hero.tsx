import Image from "next/image";

import { Wrapper } from "./Wrapper";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="pb-20 pt-8 tablet:pb-40 tablet:pt-20">
      <Wrapper className="flex flex-col-reverse items-center justify-between gap-8 laptop:flex-row">
        <div className="space-y-8 tablet:space-y-6">
          <div className="max-w-sm space-y-4 text-center tablet:space-y-3 laptop:text-left">
            <h1 className="font-poppins text-3xl font-bold text-brand-dark tablet:text-4xl">
              Saúde natural para os seus cabelos
            </h1>
            <p className="text-gray tablet:text-lg">
              Um salão exclusivo em São Paulo, especializado em tratamentos
              naturais.
            </p>
          </div>
          <Button.Root className="mx-auto laptop:mx-0">
            Agendar um horário
          </Button.Root>
        </div>
        <div className="relative h-[16.5625rem] w-full max-w-[41.125rem] tablet:h-[27.6875rem]">
          <div className="absolute -right-6 h-[15.125rem] w-full rounded bg-brand-light tablet:right-0 tablet:h-[25.3125rem] tablet:w-[36.3125rem]"></div>
          <div className="absolute -left-6 bottom-0 h-[14rem] w-full overflow-hidden rounded tablet:left-0 tablet:h-[23.4375rem] tablet:w-[35.0625rem]">
            <Image
              src="/hero-img.jpg"
              alt=""
              quality={100}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
