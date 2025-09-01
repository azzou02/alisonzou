import Image from "next/image";

export default function Home() {
  return (
    <>
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

      {/* flower divider */}
      <div className="flex justify-center space-x-6 mt-9">
          {Array.from({ length: 16 }, (_, i) => {
            const flowerNumber = (i % 4) + 1;
            return(
              <Image
                key={i}
                src={`/decorations/flower${flowerNumber}.svg`}
                alt="flower decoration"
                width={45}
                height={40}
                className="object-cover"
              />
            );  
          })}
      </div>

      {/* about me & interests section */}
      <section className="my-12 grid md:grid-cols-2 gap-10">
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
          <h2 className="mt-4 text-xl text-brand-brown">current interests</h2>
          <p className="mt-4 text-brand-brown">
            <span className="italic font-semibold text-md">Watching</span>: the summer i turned pretty<br/>
            <span className="italic font-semibold text-md">Listening</span>: charlotte dobre and kpop (nct, red velvet, aespa...)<br/>
            <span className="italic font-semibold text-md">Wanting</span>: a red velvet world tour, f1 grand prix ticket, world cup ticker<br/>
            <span className="italic font-semibold text-md">Fave sport</span>: formula 1
          </p>
        </div>
      </section>

      {/* interests section */}
      <section className="mb-20">
        <h1 className="my-6 text-5xl text-brand-brown font-light text-center">Recent Fun Activities</h1>
        <div className="flex flex-row gap-6 overflow-auto">
          <Image
            src="/activities/quebec-street.jpeg"
            alt="activity 1"
            width={250}
            height={359}
            className="rounded-lg w-full h-auto object-cover"
          />
          <Image
            src="/activities/canada-sunset.jpeg"
            alt="activity 2"
            width={250}
            height={359}
            className="rounded-lg w-full h-auto object-cover"
          />
          <Image
            src="/activities/quebec-dinner.jpeg"
            alt="activity 3"
            width={250}
            height={359}
            className="rounded-lg w-full h-auto object-cover"
          />
          <Image
            src="/activities/montreal-koi.jpeg"
            alt="activity 4"
            width={250}
            height={359}
            className="rounded-lg w-full h-auto object-cover"
          />
          <Image
            src="/activities/montreal-lilypads.jpeg"
            alt="activity 5"
            width={250}
            height={359}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </section>

    </>
  );
}
