import { Wrapper } from "./Wrapper";

import { HairTherapyIcon, HairCutIcon, HairTreatmentIcon } from "./Icons";

export const Service = () => {
  return (
    <section className="py-20 tablet:py-40">
      <Wrapper className="space-y-16">
        <div className="max-w-xl space-y-4 tablet:mx-auto tablet:space-y-3 tablet:text-center">
          <h2 className="font-poppins text-3xl font-bold text-brand-dark tablet:text-4xl">
            Serviços
          </h2>
          <p className="text-brand-dark tablet:text-lg">
            Com mais de 10 anos no mercado, o{" "}
            <span className="font-bold text-brand">BeautySalon</span> já
            conquistou clientes de inúmeros países com seus tratamentos
            exclusivos e totalmente naturais
          </p>
        </div>
        <div className="grid auto-cols-fr gap-6 tablet:gap-8 laptop:grid-flow-col">
          <div className="space-y-6 rounded-t border-b-4 border-brand px-8 py-14 shadow-lg tablet:px-12">
            <HairTherapyIcon size={80} className="mx-auto text-brand" />
            <div className="space-y-3 text-center">
              <h3 className="font-poppins text-2xl font-bold text-brand-dark">
                Terapia capilar
              </h3>
              <p className="text-gray">
                Terapia completa para couro cabeludo e fios, protegendo todos os
                tipos de cabelos, inclusive os longos e finos.
              </p>
            </div>
          </div>
          <div className="space-y-6 rounded-t border-b-4 border-brand px-8 py-14 shadow-lg tablet:px-12">
            <HairCutIcon size={80} className="mx-auto text-brand" />
            <div className="space-y-3 text-center">
              <h3 className="font-poppins text-2xl font-bold text-brand-dark">
                Cortes
              </h3>
              <p className="text-gray">
                A nossa equipe é repleta de profissionais renomados, famosos por
                lançarem tendências com cortes diferenciados e clássicos.
              </p>
            </div>
          </div>
          <div className="space-y-6 rounded-t border-b-4 border-brand px-8 py-14 shadow-lg tablet:px-12">
            <HairTreatmentIcon size={80} className="mx-auto text-brand" />
            <div className="space-y-3 text-center">
              <h3 className="font-poppins text-2xl font-bold text-brand-dark">
                Tratamentos
              </h3>
              <p className="text-gray">
                O BeautySalon conta com diversos tratamentos naturais e
                totalmente veganos, para qualquer tipo de cabelo.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
