const products = [
    {
        id: 1,
        href: '#',
        imageSrc: '/examples/example1.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
        id: 2,
        href: '#',
        imageSrc: '/examples/example2.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
        id: 3,
        href: '#',
        imageSrc: '/examples/example3.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
        id: 4,
        href: '#',
        imageSrc: '/examples/example4.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
        id: 5,
        href: '#',
        imageSrc: '/examples/example5.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
        id: 6,
        href: '#',
        imageSrc: '/examples/example6.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
        id: 7,
        href: '#',
        imageSrc: '/examples/example7.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
        id: 8,
        href: '#',
        imageSrc: '/examples/example8.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
        id: 9,
        href: '#',
        imageSrc: '/examples/example9.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
        id: 10,
        href: '#',
        imageSrc: '/examples/example10.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
        id: 11,
        href: '#',
        imageSrc: '/examples/example11.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
        id: 12,
        href: '#',
        imageSrc: '/examples/example12.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
        id: 13,
        href: '#',
        imageSrc: '/examples/example13.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
        id: 14,
        href: '#',
        imageSrc: '/examples/example13-2.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
        id: 15,
        href: '#',
        imageSrc: '/examples/example14.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
]

export default function Gallery() {
    return (
        <div className="bg-white">
            <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
                <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
                    {/*<h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>*/}
                    {/*<a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">*/}
                    {/*    See everything*/}
                    {/*    <span aria-hidden="true"> &rarr;</span>*/}
                    {/*</a>*/}
                </div>

                <div className="relative mt-8">
                    <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                        <ul
                            role="list"
                            className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                        >
                            {products.map((product) => (
                                <li key={product.id} className="inline-flex w-64 flex-col text-center lg:w-auto">
                                    <div className="group relative">
                                        <img
                                            alt={product.imageAlt}
                                            src={product.imageSrc}
                                            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                                        />
                                        {/*<div className="mt-6">*/}
                                        {/*    <p className="text-sm text-gray-500">{product.color}</p>*/}
                                        {/*    <h3 className="mt-1 font-semibold text-gray-900">*/}
                                        {/*        <a href={product.href}>*/}
                                        {/*            <span className="absolute inset-0" />*/}
                                        {/*            {product.name}*/}
                                        {/*        </a>*/}
                                        {/*    </h3>*/}
                                        {/*    <p className="mt-1 text-gray-900">{product.price}</p>*/}
                                        {/*</div>*/}
                                    </div>

                                    {/*<h4 className="sr-only">Available colors</h4>*/}
                                    {/*<ul role="list" className="mt-auto flex items-center justify-center space-x-3 pt-6">*/}
                                    {/*    {product.availableColors.map((color) => (*/}
                                    {/*        <li*/}
                                    {/*            key={color.name}*/}
                                    {/*            style={{ backgroundColor: color.colorBg }}*/}
                                    {/*            className="size-4 rounded-full border border-black/10"*/}
                                    {/*        >*/}
                                    {/*            <span className="sr-only">{color.name}</span>*/}
                                    {/*        </li>*/}
                                    {/*    ))}*/}
                                    {/*</ul>*/}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/*<div className="mt-12 flex px-4 sm:hidden">*/}
                {/*    <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">*/}
                {/*        See everything*/}
                {/*        <span aria-hidden="true"> &rarr;</span>*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
