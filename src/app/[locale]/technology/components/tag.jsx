export default function Tag({ children, className="" }) {
  return (
    <span className={`inline-block rounded-md bg-white/5 px-2.5 py-1 text-[11px] tracking-wide text-text-mute ring-1 ring-white/10 ${className}`}>
      {children}
    </span>
  );
}
