import HomeAnim from "./HomeAnim";

export default function Home() {
  return (
    <section className="min-h-screen flex justify-center items-center text-center px-4 sm:px-6 lg:px-8">
      <HomeAnim>
        <p className="text-4xl sm:text-5xl lg:text-7xl m-4 sm:m-6 lg:m-10">Hi 👋, I'm Zoren</p>
        <p className="text-base sm:text-lg lg:text-2xl mx-auto max-w-prose">
        I am a goal driven software engineer who is passionate about developing
        web applications. I speak JavaScript and TypeScript fluently, with
        Node.js as my trusty interpreter. I find value in the journey of
        overcoming obstacles and continuously growing from each experience.
        </p>
      </HomeAnim>
    </section>
  );
}