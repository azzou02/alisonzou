import Image from "next/image";
import SlidingImage from "@/components/SlidingImage";

export default function Home() {
  return (
    <main className="pb-14">
      {/* top banner */}
      <div className="w-full">
        <Image
          src="/decorations/about-banner.png"
          alt="hero banner"
          width={1200}
          height={285}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* hero section */}
      <section className="bg-cream h-90 mx-45 -mt-56 mb-10 p-10 rounded-xl shadow-lg 
                          flex flex-row justify-between gap-7 items-center text-left relative z-10">

        {/* hero text */}
        <div className="flex-1 pl-5">
          <h1 className="text-brand-brown text-7xl">HI, I&apos;M ALISON ZOU</h1>
          <h3 className="text-brand-brown text-5xl font-light mt-14">nice to meet you
            <span className="text-4xl">  ₊✩‧₊˚౨ৎ˚₊✩‧₊</span></h3>
        </div>

        {/* hero image */}
        <div className="relative flex-shrink-0 pr-12">
          <Image
            src="/decorations/yellow-frame.png"
            alt="Instagram frame"
            width={264}
            height={380}
            className="rounded-lg shadow-md rotate-3 object-cover relative z-10"
          />
          <Image
            src="/decorations/alison-profile.png"
            alt="A photo of Alison Zou"
            width={220}
            height={282}
            className="absolute top-1/2 left-1/2 -translate-x-3/5 -translate-y-5/9 rotate-3 object-cover z-20"
          />
          <Image
            src="/decorations/orange.png"
            alt="Orange sticker"
            width={70}
            height={70}
            className="absolute right-8 bottom-28 z-30"
          />
          <Image
            src="/decorations/star-button.png"
            alt="Yellow star button"
            width={90}
            height={90}
            className="absolute right-1 bottom-14 z-30"
          />
        </div>

      </section>

      {/* divider */}
      <div className="flex justify-center space-x-6 mt-14 mb-8">
        <Image
          src="/decorations/border-figures.png"
          alt="Yellow star button"
          width={630}
          height={90}
          className="w-280"
        />
      </div>

      {/* about me & interests section */}
      <section className="mt-8 mb-12 grid md:grid-cols-2 gap-10">
        <div className="ml-44">
          <hr className="text-brand-brown"></hr>
          <h2 className="mt-4 text-xl text-brand-brown">about me</h2>
          <p className="mt-4 text-brand-brown">
            I&apos;m a junior studying computer science, art, and math at Vanderbilt University. I&apos;m
            passionate about designing and building user-centered digital experiences, and I care
            deeply about accessibility. I work as a senior innovation fellow at the Wond&apos;ry
            Innovation Center, where I&apos;ve led user research and cross-functional collaboration on
            projects like improving driver accessibility with Nissan. On campus, I&apos;m also actively
            engages as the president of Google Developer Group Vanderbilt, and vice president of
            Girls Who Code Vanderbilt chapter.
          </p>
        </div>

        <div className="mr-45">
          <hr className="text-brand-brown"></hr>
          <h2 className="mt-4 text-xl text-brand-brown">education</h2>
          <p className="mt-4 text-brand-brown">
            <br />Vanderbilt University 2023-2027
            <br />Computer Science, Art, & Math
          </p>
        </div>
      </section>

      {/* photo section */}
      <section className="mb-20">
        <h1 className="my-10 pt-8 text-5xl text-brand-brown font-light text-center">Photo Dump ⋆.˚ ☾⭒.˚</h1>
        <div className="flex flex-row gap-6 overflow-auto">
          <Image
            src="/activities/quebec-street.jpeg"
            alt="activity 1"
            width={250}
            height={359}
            className="rounded-lg w-80 h-90 object-cover"
          />
          <Image
            src="/activities/canada-sunset.jpeg"
            alt="activity 2"
            width={250}
            height={359}
            className="rounded-lg w-80 h-90 object-cover"
          />
          <Image
            src="/activities/quebec-dinner.jpeg"
            alt="activity 3"
            width={250}
            height={359}
            className="rounded-lg w-80 h-90 object-cover"
          />
          <Image
            src="/activities/montreal-koi.jpeg"
            alt="activity 4"
            width={250}
            height={359}
            className="rounded-lg w-80 h-90 object-cover"
          />
          <Image
            src="/activities/montreal-lilypads.jpeg"
            alt="activity 5"
            width={250}
            height={359}
            className="rounded-lg w-65 h-90 object-cover"
          />
          <Image
            src="/activities/cat.jpeg"
            alt="activity 6"
            width={250}
            height={359}
            className="rounded-lg w-65 h-90 object-cover"
          />
          <Image
            src="/activities/cheese-plate.jpeg"
            alt="activity 7"
            width={250}
            height={359}
            className="rounded-lg w-65 h-90 object-cover"
          />
          <Image
            src="/activities/matcha.jpeg"
            alt="activity 8"
            width={250}
            height={359}
            className="rounded-lg w-65 h-90 object-cover"
          />
          <Image
            src="/activities/black-dress.jpeg"
            alt="activity 9"
            width={250}
            height={359}
            className="rounded-lg w-65 h-90 object-cover"
          />
          <Image
            src="/activities/red-dress.jpeg"
            alt="activity 10"
            width={250}
            height={359}
            className="rounded-lg w-65 h-90 object-cover"
          />
          <Image
            src="/activities/eiffle.jpeg"
            alt="activity 11"
            width={250}
            height={359}
            className="rounded-lg w-65 h-90 object-cover"
          />
          <Image
            src="/activities/statue.jpeg"
            alt="activity 12"
            width={250}
            height={359}
            className="rounded-lg w-65 h-90 object-cover"
          />
          <Image
            src="/activities/copper-statue.jpeg"
            alt="activity 13"
            width={250}
            height={359}
            className="rounded-lg w-65 h-90 object-cover"
          />
          <Image
            src="/activities/glass-window.jpeg"
            alt="activity 14"
            width={250}
            height={359}
            className="rounded-lg w-65 h-90 object-cover"
          />
          <Image
            src="/activities/gelato.jpeg"
            alt="activity 15"
            width={250}
            height={359}
            className="rounded-lg w-65 h-90 object-cover"
          />
        </div>
      </section>

      {/* watching section */}
      <section>
        <h1 className="my-10 pt-5 text-5xl text-brand-brown font-light text-center">Watching ⋆.˚ 𓆉 𓆝 𓆡⋆.˚</h1>
        <div className="flex justify-center px-20 gap-6">
            <Image
              src="/activities/tsitp.jpg"
              alt="tsitp"
              width={250}
              height={359}
              className="rounded-lg w-60 h-80 object-cover"
            />
            <Image
              src="/activities/our-time.jpg"
              alt="our times"
              width={250}
              height={359}
              className="rounded-lg w-60 h-80 object-cover"
            />
            <Image
              src="/activities/the-residence.jpg"
              alt="the residence"
              width={250}
              height={359}
              className="rounded-lg w-60 h-80 object-cover"
            />
        </div>
        <SlidingImage src="/decorations/mclaren-car.png" alt="car" height={120} durationMs={4000} />
      </section>
    </main>
  );
}
