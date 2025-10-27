import Image from 'next/image'

const tiles = [
  { icon: '/images/icons/fx.svg', label: 'Forex' },
  { icon: '/images/icons/indices.svg', label: 'Indices' },
  { icon: '/images/icons/futures.svg', label: 'Futures' },
  { icon: '/images/icons/metals.svg', label: 'Metals' },
  { icon: '/images/icons/energies.svg', label: 'Energies' },
  { icon: '/images/icons/commodities.svg', label: 'Commodities' },
]

export default function Instruments() {
  return (
    <section className="section">
      <div className="container-balanced grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="heading-2 text-white mb-3">Instruments overview</h2>
          <p className="subtle mb-6">Trade multi‑asset with confidence. FX spot and forwards, precious and base metals, energy, single stocks, and cryptocurrencies.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {tiles.map((t) => (
              <div key={t.label} className="gradient-ring">
                <div className="card-surface flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary-900/60 flex items-center justify-center">
                    <Image src="/images/icons/fx.svg" alt="" width={24} height={24} />
                  </div>
                  <p className="text-white">{t.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="gradient-ring">
          <div className="card-surface p-0">
            <Image src="/mock/laptop-angle.png" width={1000} height={700} alt="Platform" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
