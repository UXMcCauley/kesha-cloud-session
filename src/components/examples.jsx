import Image from "next/image";

const features = [
    { name: 'Haircuts & Styling', description: 'From classic trims to edgy modern cuts, we create looks that suit your style and face shape.' },
    { name: 'Extensions', description: 'Add length, volume, and versatility to your hair with expertly applied extensions. We work with high-quality materials for a seamless and natural look.' },
    { name: 'Dreadlocks & Braids', description: 'Specializing in dreadlocks and intricate braiding, we help you achieve stunning, long-lasting styles that showcase your individuality.' },
    { name: 'Perms & Relaxers', description: 'Whether you’re looking for soft curls or sleek, smooth hair, our perms and relaxers are designed to give you the texture and manageability you desire.' },
    { name: 'Special Occasion Styling', description: 'Get camera-ready for weddings, proms, or any event with elegant updos, curls, or creative styles.' },
    { name: 'Scalp Treatments', description: 'Healthy hair starts with a healthy scalp. Kesha offers revitalizing scalp treatments that help soothe irritation, reduce buildup, and promote hair growth. Using high-quality products and personalized care, we’ll leave your scalp feeling refreshed and your hair looking its best.' },
]

export default function Examples() {
    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A look at the artist.</h2>
                    <p className="mt-4 text-gray-500">
                        At Kesha&apos;s Hair Studio, we believe your hair is a reflection of your personality and style. Whether you're looking for a bold new look, a touch of maintenance, or a transformation that turns heads, Kesha is here to bring your vision to life.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <div className={`max-w-[260px] max-h-[260px] overflow-hidden shadow-lg rounded-lg lg:rounded-md`}>
                        <Image
                            width={300}
                            height={300}
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            src="/examples/example13-2.jpg"
                            // sizes="(min-width: 300px) 10vw, 30vw"
                            style={{
                                objectFit: 'fill',
                                marginTop: '-50px'
                            }}
                        />
                    </div>
                    <div className={`max-w-[260px] max-h-[260px] overflow-hidden shadow-lg rounded-lg lg:rounded-md`}>
                        <Image
                            width={300}
                            height={300}
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            src="/examples/example1.jpg"
                            // sizes="(min-width: 300px) 10vw, 30vw"
                            style={{
                                objectFit: 'fill',
                                marginTop: '-110px'
                            }}
                        />
                    </div>
                    <div className={`max-w-[260px] max-h-[260px] overflow-hidden shadow-lg rounded-lg lg:rounded-md`}>
                        <Image
                            width={300}
                            height={300}
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            src="/examples/example8.jpg"
                            // sizes="(min-width: 300px) 10vw, 30vw"
                            style={{
                                objectFit: 'fill',
                                marginTop: '-40px'
                            }}
                        />
                    </div>
                    <div className={`max-w-[260px] max-h-[260px] overflow-hidden shadow-lg rounded-lg lg:rounded-md`}>
                        <Image
                            width={300}
                            height={300}
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            src="/examples/example3.jpg"
                            // sizes="(min-width: 300px) 10vw, 30vw"
                            style={{
                                objectFit: 'fill', // cover, contain, none
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
