import Image from 'next/image';

export default function About() {
    return (
     <section  className="min-h-dvh flex justify-center">
          <div className="relative 3xl:w-[350px] lg:h-[400px] lg:w-[300px] md:h-[300px] md:w-[200px] h-[300px] w-[250px]">
            <Image
              className="object-cover"
              src="/me.jpg"
              alt="Portrait"
              fill
              sizes=""
            />
          </div>
      I'm a goal driven software engineer passion about developing web applications. I find value in the journey of overcoming obstacles and continuously growing from each experience.
    </section>
    );
  }
  