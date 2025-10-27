import Image from 'next/image'

export default function TechHighlight() {
  return (
    <section className="section">
      <div className="container-balanced grid lg:grid-cols-2 gap-12">
        <div className="gradient-ring order-last lg:order-first animate-fade-up">
          <div className="card-surface p-0">
            <Image src="/mock/charts.jpg" width={1200} height={800} alt="Charts" className="rounded-2xl" />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl text-accent-400 font-medium">Technology highlight</h3>
          <h2 className="heading-2">Built on PrimeXM LD4</h2>
          <p className="subtle">
            A dedicated global network with low latency and failover protection for continuous access.
          </p>
          <ul className="list-disc list-outside pl-6 subtle space-y-2">
            <li>Real‑time P&amp;L, centralised margin, quick order entry, drop copy, and reliable redundancy.</li>
            <li>Bridges supported include PrimeXM and TFB. Integrated to MetaTrader 5.</li>
          </ul>
          <a className="btn-outline" href="#">Explore our technology</a>
        </div>
      </div>
    </section>
  )
}
