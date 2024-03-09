import Project from "./Project";
import Work from "./Work";
import FadeInAnim from "./FadeInAnim";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="min-h-dvh flex flex-col items-center justify-center"
    >
      <FadeInAnim>
      <p className="2xs:text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl m-4 sm:m-6 lg:m-10 font-bold">Experience</p>
      <Work/>
      <p className="2xs:text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl m-4 sm:m-6 lg:m-10 font-bold">Projects</p>
      <Project />
      </FadeInAnim>
    </section>
  );
}
12