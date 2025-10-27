import Image from "next/image";

const logos = [
  ["/images/logos/onezero.png", "oneZero", 200, 80],
  ["/images/logos/yourbourse.png", "Your Bourse", 200, 40],
  ["/images/logos/mfinance.png", "m-FINANCE", 185, 75],
  ["/images/logos/primexm.png", "PrimXM", 175, 50],
  ["/images/logos/goldi.png", "Gold-I", 130, 50],
  ["/images/logos/ctrader.png", "cTrader", 160, 50],
  ["/images/logos/fxcubic.png", "FX Cubic", 120, 60],
  ["/images/logos/centroid-solutions.png", "Centroid Solutions", 200, 50],
  ["/images/logos/iress.png", "Iress", 130, 100],
  ["/images/logos/cqg.png", "CQG", 190, 45],
];

export default function PlatformEcosystem() {
  return (
    <section className="py-20 xl:py-28">
      <div className="container">
        <h1 className="mb-12 text-center text-xl text-accent-400">Platform Ecosystem:</h1>
        <div className="grid grid-cols-2 items-center gap-12 lg:grid-cols-3 xl:grid-cols-5 xl:gap-6">
          {logos.map(([src, alt, w, h]) => (
            <div key={src}>
              <Image src={src} alt={alt} width={w} height={h} className="mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
