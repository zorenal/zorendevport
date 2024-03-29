import FadeInAnim from "./FadeInAnim";
import Image from "next/image";
import TechStack from "./StackAnim";
export default function Home() {
  return (
    <section className="min-h-screen flex justify-center items-center text-center p-4 lg:p-8">
      <FadeInAnim>
        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden mx-auto">
          <Image
            className="rounded-full object-cover"
            src="/myportrait.jpg"
            alt="Portrait"
            fill
          />
        </div>

        <p className="2xs:text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 lg:mt-8 font-semibold">
          Hi 👋, I&apos;m Zoren
        </p>
        <p className="text-base md:text-lg lg:text-2xl mt-2 font-medium">
          A passionate Software Engineer from California.
        </p>
        <p className="text-base xs:text-xs sm:text-md md:text-lg lg:text-lg max-w-prose mt-2 md:mt-4 lg:mt-6">
          In the realm of JavaScript, I command my
          Node.js interpreter like a maestro orchestrating a symphony, with
          React as my ensemble. Armed with an insatiable thirst for growth, I turn obstacles into
          stepping stones of innovation. With every project, I craft lines of
          code into polished solutions,
          fueling my passion for pushing boundaries and embracing challenges
          head-on. In this ever-evolving landscape of technology, I am not
          merely a coder—I am an architect of possibility, constantly refining
          my craft to bring tomorrow&apos;s digital marvels to life today.
        </p>
        {/* <p className="text-base md:text-lg lg:text-lg max-w-prose mt-2 md:mt-4 lg:mt-6">
          I speak JavaScript and TypeScript fluently, with Node.js as my trusty
          interpreter. With a discerning eye for detail and a relentless drive
          for excellence, I continuously navigate through the labyrinth of
          coding complexities. Each project and opportunity fuels my passion for
          innovation as I eagerly embrace tackling obstacles head-on,
          continually growing and refining my craft.
        </p> */}
      </FadeInAnim>
    </section>
  );
}
