import Image from "next/image";

import { Wrapper } from "./Wrapper";

export const Testimonial = () => {
  return (
    <section className="py-20 tablet:py-40">
      <Wrapper className="space-y-16">
        <h2 className="max-w-lg font-poppins text-3xl font-bold text-brand-dark tablet:mx-auto tablet:text-center tablet:text-4xl">
          Depoimentos de quem já passou por aqui
        </h2>
        <div className="w-full space-y-8 tablet:space-y-14">
          <div className="grid auto-cols-fr gap-6 tablet:grid-flow-col tablet:gap-8">
            <div className="space-y-6 rounded p-8 shadow-lg tablet:p-14">
              <div className="text-brand-dark before:relative before:top-6 before:mr-1.5 before:font-serif before:text-5xl before:leading-6 before:text-brand before:content-[open-quote] after:content-[no-close-quote]">
                Eu sou cliente do BeautySalon há 5 anos e não troco por nada!
                Certamente meu cabelo mudou muito depois que comecei a tratar
                somente com produtos naturais e veganos. São profissionais
                incríveis e qualificados.
              </div>
              <div className="flex items-center gap-2 text-gray">
                <div className="relative aspect-square w-8 overflow-hidden rounded-full">
                  <Image
                    src="/avatar.jpg"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                Wanessa Souza
              </div>
            </div>
            <div className="space-y-6 rounded p-8 shadow-lg tablet:p-14">
              <div className="text-brand-dark before:relative before:top-6 before:mr-1.5 before:font-serif before:text-5xl before:leading-6 before:text-brand before:content-[open-quote] after:content-[no-close-quote]">
                Minha mãe frequenta o salão há anos e me levou um dia para
                conhecer. Minha experiência foi incrível, eu continuo fazendo o
                a terapia capilar e isso salvou o meu cabelo. Adoro todos os
                profissionais do BeautySalon.
              </div>
              <div className="flex items-center gap-2 text-gray">
                <div className="relative aspect-square w-8 overflow-hidden rounded-full">
                  <Image
                    src="/avatar2.jpg"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                Luna Falcão
              </div>
            </div>
          </div>
          <ul className="flex justify-center gap-6 tablet:gap-2">
            <li>
              <button className="aspect-square w-3 rounded-full bg-brand tablet:w-4" />
            </li>
            <li>
              <button className="aspect-square w-3 rounded-full bg-gray-light tablet:w-4" />
            </li>
            <li>
              <button className="aspect-square w-3 rounded-full bg-gray-light tablet:w-4" />
            </li>
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};
