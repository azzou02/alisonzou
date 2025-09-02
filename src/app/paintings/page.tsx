import Image from "next/image";

export default function Paintings() {
    return (
        <>
            <section>
                <h1 className="text-brand-brown text-7xl text-center mt-15 mb-5">
                    Paintings
                </h1>
            </section>

            <div className="w-full p-4 px-6 flex justify-center">
                {/* masonry-style layout */}
                <div className="flex flex-wrap gap-4 max-w-5xl items-center">
                    {/* Left column */}
                    <div className="flex flex-col gap-4 flex-1 min-w-0">
                        <div className="flex-shrink-0">
                            <Image
                                src="/paintings/self-portrait.jpg"
                                alt="painting"
                                width={405}
                                height={537}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                        
                        <div className="flex-shrink-0">
                            <Image
                                src="/paintings/portrait.jpg"
                                alt="young woman painting"
                                width={405}
                                height={537}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>

                        <div className="flex-shrink-0">
                            <Image
                                src="/paintings/ball.jpg"
                                alt="ball painting"
                                width={405}
                                height={300}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>

                        <div className="flex-shrink-0">
                            <Image
                                src="/paintings/take-flight.jpg"
                                alt="duck taking flight"
                                width={654}
                                height={400}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>

                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-4 flex-1 min-w-0">
                        <div className="flex-shrink-0">
                            <Image
                                src="/paintings/duck.png"
                                alt="duck painting"
                                width={654}
                                height={300}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                        
                        <div className="flex-shrink-0">
                            <Image
                                src="/paintings/rock-carving.jpg"
                                alt="ancient mask painting"
                                width={654}
                                height={600}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                        
                        <div className="flex-shrink-0">
                            <Image
                                src="/paintings/still-life.jpg"
                                alt="copper pitcher still life"
                                width={654}
                                height={400}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>

                        <div className="flex-shrink-0">
                            <Image
                                src="/paintings/flamingo.png"
                                alt="flamingo painting"
                                width={405}
                                height={300}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}