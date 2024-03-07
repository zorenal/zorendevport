import HomeAnim from "./HomeAnim";
import Image from "next/image";
import TechStack from "./StackAnim";

export default function Home() {
  return (
    <section className="min-h-screen flex justify-center items-center text-center px-4 sm:px-6 lg:px-8">
      <HomeAnim>
        <div className="relative lg:h-[300px] lg:w-[300px] md:h-[300px] md:w-[200px] h-[250px] w-[250px] ">
          <Image
            className="rounded-full object-cover"
            src="/myportrait.jpg"
            alt="Portrait"
            fill
          />
        </div>

        <p className="text-4xl sm:text-5xl lg:text-5xl m-4 sm:mt-6 lg:mt-10">
          Hi 👋, I&apos;m Zoren
        </p>
        <p className="text-base sm:text-lg lg:text-2xl mx-auto max-w-prose sm:mb-6 lg:mb-10">
          A passionate <TechStack>Software Engineer</TechStack> from California.
        </p>
        <p className="text-base sm:text-lg lg:text-2xl mx-auto max-w-prose">
          I speak JavaScript and TypeScript fluently, with Node.js as my trusty
          interpreter. With a discerning eye for detail and a relentless drive
          for excellence, I navigate the labyrinth of coding
          complexities. Each project and opportunity fuels my passion for
          innovation as I embrace tackling obstacles head-on,
          continually growing and refining my craft.
        </p>
      </HomeAnim>
    </section>
  );
}
