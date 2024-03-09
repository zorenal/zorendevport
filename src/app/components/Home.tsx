import FadeInAnim from "./FadeInAnim";
import Image from "next/image";
import TechStack from "./StackAnim";
export default function Home() {
  return (
    <section className="min-h-screen flex justify-center items-center text-center p-4 lg:p-8">
    
      <FadeInAnim>
        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden mx-auto">
          <Image
            className="rounded-full object-cover"
            src="/myportrait.jpg"
            alt="Portrait"
            fill
          />
        </div>
  
        <p className="2xs:text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 lg:mt-8">
          Hi 👋, I&apos;m Zoren
        </p>
        <p className="text-base md:text-lg lg:text-2xl mt-2">
          A passionate <TechStack>Software Engineer</TechStack> from California.
        </p>
        <p className="text-base md:text-lg lg:text-xl max-w-prose mt-2 md:mt-4 lg:mt-6">
          I speak JavaScript and TypeScript fluently, with Node.js as my trusty
          interpreter. With a discerning eye for detail and a relentless drive
          for excellence, I continuously navigate through the labyrinth of
          coding complexities. Each project and opportunity fuels my passion for
          innovation as I eagerly embrace tackling obstacles head-on,
          continually growing and refining my craft.
        </p>
      </FadeInAnim>
    </section>
  );  
}
