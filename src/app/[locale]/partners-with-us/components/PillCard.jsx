export default function PillCard({ icon = "🔹", title, desc }) {
    return (
        <div className="rounded-2xl bg-navy-900/60 ring-1 ring-white/10 p-5 shadow-glow text-center">
            <div className="mx-auto mb-2 grid h-8 w-8 place-items-center rounded-full bg-white/5 text-[14px]">{icon}</div>
            <h4 className="text-[15px] font-semibold">{title}</h4>
            <p className="mt-1 text-[12.5px] leading-6 text-text-mute">{desc}</p>
        </div>
    );
}
