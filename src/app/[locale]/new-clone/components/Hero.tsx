import Image from 'next/image'

export default function Hero() {
  return (
    <section className="section">
      <div className="container-balanced grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="badge w-fit">Authorised & regulated by the FCA</p>
          <h1 className="heading-hero">Prime liquidity for<br/>growing brokers</h1>
          <p className="text-neutral-200 max-w-[560px]">
            Institutional pricing that fits your stage. Fast integration, transparent terms, and support that helps you ship.
          </p>
          <div className="flex gap-3">
            <a className="btn-outline" href="#">Book a call</a>
            <a className="btn-primary" href="#">Request pricing</a>
          </div>
          <div className="grid grid-cols-5 gap-3 text-xs subtle pt-4">
            <div className="gradient-ring"><div className="card-surface text-center py-4">Liquidity</div></div>
            <div className="gradient-ring"><div className="card-surface text-center py-4">Integration</div></div>
            <div className="gradient-ring"><div className="card-surface text-center py-4">UT &amp; margin</div></div>
            <div className="gradient-ring"><div className="card-surface text-center py-4">Risk</div></div>
            <div className="gradient-ring"><div className="card-surface text-center py-4">99.99% uptime</div></div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <Image src="/mock/laptops.png" width={900} height={680} alt="Trading terminals" className="w-full h-auto rounded-2xl shadow-card" />
        </div>
      </div>
    </section>
  )
}
