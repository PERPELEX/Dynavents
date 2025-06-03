export default function Home() {
  return (
    <section
      id="home"
      className="px-4 sm:px-6 md:px-10 py-12 sm:py-16 bg-transparent text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-4">
        Welcome to Dynavents
      </h2>
      <p className="text-base sm:text-lg text-black leading-relaxed">
        Dynavents is your one-stop solution to finding info about the local
        events. The name is inspired by &#39;Dynamic&#39; from
        &#39;Dynamic360&#39; and &#39;Events&#39; making Dyna-vents. The site
        features a single responsive and interactive web-page. The page features
        a carousel, nav bar, search bar, filters, contact form, splash screen
        and elegant UI design.
      </p>

      <div className="mt-8 w-full flex flex-wrap justify-center gap-4 text-black text-base sm:text-lg">
        <p className="w-full text-center font-semibold">
          The tech stack used for the website is as follows:
        </p>

        <div className="flex items-center gap-2 border-2 border-black rounded-full px-4 py-2">
          Next
          <i
            className="devicon-nextjs-plain colored text-xl sm:text-2xl"
            title="Next.js"
          ></i>
        </div>
        <div className="flex items-center gap-2 border-2 border-black rounded-full px-4 py-2">
          Tailwind
          <i
            className="devicon-tailwindcss-plain colored text-xl sm:text-2xl"
            title="Tailwind CSS"
          ></i>
        </div>
        <div className="flex items-center gap-2 border-2 border-black rounded-full px-4 py-2">
          Vercel
          <i
            className="devicon-vercel-plain colored text-xl sm:text-2xl"
            title="Vercel"
          ></i>
        </div>
        <div className="flex items-center gap-2 border-2 border-black rounded-full px-4 py-2">
          Framer Motion
          <i
            className="devicon-framermotion-original colored text-xl sm:text-2xl"
            title="Framer Motion"
          ></i>
        </div>
      </div>
    </section>
  );
}
