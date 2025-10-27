export default function Solutions() {
  const items = [
    { title: 'Liquidity for Brokers' },
    { title: 'Pricing Models' },
    { title: 'Risk & Controls' },
    { title: 'Connectivity & Access' },
    { title: 'Reporting & TCA' },
    { title: 'Onboarding & Go‑Live' },
  ]
  return (
    <section className="section bg-primary-900 bg-[url('/bg/noise.svg')] bg-no-repeat bg-bottom">
      <div className="container-balanced">
        <h2 className="text-center text-3xl lg:text-5xl font-semibold mb-10">Solutions snapshot</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="gradient-ring animate-fade-up">
              <div className="card-surface text-center py-8">
                <p className="text-lg">{it.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a className="btn-primary" href="#">See all solutions</a>
        </div>
      </div>
    </section>
  )
}
