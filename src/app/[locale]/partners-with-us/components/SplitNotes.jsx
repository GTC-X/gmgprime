import Button from "./Button";

export default function SplitNote({ title, bullets = [], cta, image = "/images/ib/referral.jpg", reverse = false }) {
    return (
        <section className="bg-navy-950">
            <div className={`container grid items-center gap-8 py-10 md:grid-cols-2`}>
                {!reverse && (
                    <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 img-frame">
                        <img src={image} alt="" className="h-full w-full object-cover" />
                    </div>
                )}
                <div>
            <h2 className=" text-[26px] md:text-[28px] xl:text-[36px] font-bold text-white">
                        {title}</h2>
                    <ul className="mt-3 space-y-2 text-[13px] leading-7 text-text-mute">
                        {bullets.map((b, i) => (
                            <li key={i} className="flex gap-2">
                                <span className="mt-3 h-1 w-1 rounded-full bg-accent-400 shrink-0" />
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>
                    {cta && <Button className="mt-4">{cta}</Button>}
                </div>
                {reverse && (
                    <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 img-frame">
                        <img src={image} alt="" className="h-full w-full object-cover" />
                    </div>
                )}
            </div>
        </section>
    );
}
