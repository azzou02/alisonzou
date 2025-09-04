import Image from 'next/image';

export default function Visuals() {
    return (
        <main className="pb-14">
            <section>
                <h1 className="text-brand-blue text-7xl text-center mt-10 mb-5">
                    Visual Work
                </h1>
            </section>

            <section className="w-full p-4 px-6 flex justify-center">
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex-shrink-0">
                        <Image
                            src="/visuals/cloud-computing.png"
                            alt="cloud computing"
                            width={370}
                            height={570}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>

                    <div className="flex-shrink-0">
                        <Image
                            src="/visuals/racing.png"
                            alt="poster"
                            width={370}
                            height={570}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>

                    <div className="flex-shrink-0">
                        <Image
                            src="/visuals/lnyf-poster.png"
                            alt="lnyf"
                            width={370}
                            height={570}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>

                    <div className="flex-shrink-0">
                        <Image
                            src="/visuals/protein-factory.PNG"
                            alt="cell press 1"
                            width={370}
                            height={570}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>

                    <div className="flex-shrink-0">
                        <Image
                            src="/visuals/brain.JPG"
                            alt="cell press 1"
                            width={370}
                            height={570}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>

                    <div className="flex-shrink-0">
                        <Image
                            src="/visuals/plant-attack.PNG"
                            alt="cell press 1"
                            width={370}
                            height={570}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>

                    
                </div>
            </section>

        </main>
    )
}