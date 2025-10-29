export default function SectionTitle({ kicker, title, className = "" }) {
    return (
        <div className={`text-center ${className}`}>
            {kicker && <p className="text-[12px] tracking-[.18em] text-text-mute uppercase">{kicker}</p>}
            <h2 className="text-center text-[26px] md:text-[28px] xl:text-[36px] font-bold text-[#F29120] mb-8">
                {title}</h2>
        </div>
    );
}
