import PastProjects from "./PastProjects";
import Work from "./Work";
import FadeInAnim from "./FadeInAnim";
import CurrentProjects from "./CurrentProjects";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="min-h-dvh flex flex-col items-center justify-center"
    >
      <FadeInAnim>
      <p className="2xs:text-lg xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 font-semibold">Experience</p>
      <Work/>
      <p className="2xs:text-lg xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 font-semibold">Current Projects</p>
      <PastProjects />
      </FadeInAnim>
    </section>
  );
}
12