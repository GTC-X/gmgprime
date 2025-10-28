import Button from "./button";

export default function FeatureRow({
  title, desc, cta="Request a consultation", ctaHref="#",
  image, reverse=false
}) {
  return (
    <section className="bg-navy-950">
      <div className={`container grid items-center gap-8 py-8 md:py-12 ${reverse ? "md:grid-cols-[1fr_1.1fr]" : "md:grid-cols-[1.1fr_1fr]"}`}>
        {/* image */}
        <div className={`${reverse ? "order-last md:order-first" : ""}`}>
          <div className="img-frame card-ring">
            <img src={image} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
        {/* copy */}
        <div className="rounded-2xl border border-white/10 bg-navy-900/50 p-5 shadow-glow md:p-6">
          <h3 className="text-sec-h font-semibold">{title}</h3>
          <p className="mt-3 text-[13px] leading-6 text-text-mute">{desc}</p>
          <Button className="mt-4" size="sm">{cta}</Button>
        </div>
      </div>
    </section>
  );
}
