export default function Onboarding() {
  const steps = [
    { title: 'KYC and categorisation', desc: 'Submit the corporate pack. We classify clients and confirm protections in line with FCA rules.' },
    { title: 'Sandbox and certification', desc: 'Spin up a gold sandbox, run FIX protocol tests, validate tags and sessions.' },
    { title: 'Parallel run', desc: 'Operate new and legacy flows together for a smooth migration.' },
    { title: 'Go live', desc: 'Switch keys, monitor with real‑time reporting, and scale with your named engineer.' },
  ]
  return (
    <section className="section bg-primary-900/40">
      <div className="container-balanced grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="heading-2 text-white mb-3">How onboarding works</h2>
          <ol className="space-y-6 subtle">
            {steps.map((s, i) => (
              <li key={i}>
                <p className="text-accent-400 font-semibold">{i+1}. {s.title}</p>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6"><a href="#" className="btn-outline">Read more</a></div>
        </div>
        <div className="gradient-ring">
          <div className="card-surface text-center py-24">Team working mock (replace with image)</div>
        </div>
      </div>
    </section>
  )
}
