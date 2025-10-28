import Image from "next/image";




const leaders = [
    { name: "Christinane Vasiladou", role: "Chief Compliance Officer", img: "/images/leadership/1.jpg" },
    { name: "Ross Donghour", role: "Chief Operating Officer", img: "/images/leadership/2.jpg" },
    { name: "Kosta Pourglias", role: "Head of Liquidity", img: "/images/leadership/3.jpg" },
    { name: "Gregory Hay", role: "Head of Engineering", img: "/images/leadership/4.jpg" },
];
const Leadership = () => {
    return (
        <section className="container py-16 xl:py-24">
            <h3 className="text-heading-2 text-center mb-10 font-normal text-[#ED8946]">Leadership</h3>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                {leaders.map((m) => (
                    <div key={m.name} className="rounded-2xl border border-primary-500 bg-primary-900/40">
                        <div className="h-40 w-full overflow-hidden rounded-t-2xl bg-red-400/80">
                            <Image
                                src={m.img}
                                alt={m.name}
                                width={480}
                                height={240}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <p className="text-subtitle-1">{m.name}</p>
                            <p className="text-neutral-400 text-sm">{m.role}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <a
                    href="#leadership"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-800 px-4 py-2 text-sm hover:bg-primary-700 transition-colors"
                >
                    Meet the Leadership Team
                </a>
            </div>
        </section>
    )
}

export default Leadership;