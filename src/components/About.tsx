import Image from "next/image";

export const About = () => {
  return (
    <section className="flex flex-col gap-8 overflow-x-hidden py-20 tablet:gap-16 tablet:py-40 laptop:flex-row laptop:items-center">
      <div className="relative h-[17.5rem] w-full max-w-[48.3125rem] tablet:-ml-[12.625rem] tablet:h-[27.875rem]">
        <div className="absolute -ml-[6.9375rem] h-[15.875rem] w-full rounded bg-brand-light tablet:ml-0 tablet:h-[25.3125rem] tablet:w-[36.3125rem]"></div>
        <div className="absolute bottom-0 right-0 h-[16.125rem] w-full overflow-hidden rounded tablet:h-[25.75rem] tablet:w-[38.5625rem]">
          <Image
            src="/about-img.jpg"
            alt=""
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="flex-1 space-y-4 px-6 tablet:space-y-3 laptop:max-w-[38.125rem] laptop:px-0">
        <h2 className="font-poppins text-3xl font-bold text-brand-dark tablet:text-4xl">
          Sobre nós
        </h2>
        <div className="space-y-8 tablet:space-y-6">
          <p className="text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin
            quis bibendum diam. Sed consequat nisl laoreet eros ultricies
            pellentesque. Nullam in est porta, pellentesque massa vitae,
            vehicula risus.
          </p>
          <p className="text-gray">
            In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut
            pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec
            luctus, nunc finibus elementum suscipit, tortor augue vulputate
            sapien, vitae feugiat enim augue sed.
          </p>
          <p className="text-gray">
            Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis
            rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu
            tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat,
            nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend
            dolor. Nullam eget dui at sem ullamcorper luctus.
          </p>
        </div>
      </div>
    </section>
  );
};
