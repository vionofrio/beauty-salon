import { Hero } from "./Hero";
import { About } from "./About";
import { Service } from "./Service";
import { Testimonial } from "./Testimonial";
import { Contact } from "./Contact";

export const Main = () => {
  return (
    <main className="[&>*:nth-child(odd)]:bg-brand-lighter [&>*~*:nth-child(odd)]:before:[transform:matrix(-1,0,0,1,0,0)] [&>*~*]:relative [&>*~*]:before:absolute [&>*~*]:before:inset-0 [&>*~*]:before:h-px [&>*~*]:before:bg-section-divide-gradient [&>*~*]:before:content-['']">
      <Hero />
      <About />
      <Service />
      <Testimonial />
      <Contact />
    </main>
  );
};
