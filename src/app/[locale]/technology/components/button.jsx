export default function Button({ children, as = "button", href, className = "", size = "md", variant = "primary", ...rest }) {
  const Comp = href ? "a" : as;
  const sizes = {
    sm: "px-3.5 py-2 text-[12px]",
    md: "px-4.5 py-2.5 text-[13px]",
  };
  const variants = {
    primary: "bg-accent-400 hover:bg-accent-orangeDark text-[#fff]",
    ghost: "bg-[#265B9F] hover:bg-white/10 text-text-base text-white",
    outline: "border border-white/15 hover:border-white/25 text-text-base",
  };
  return (
    <Comp
      href={href}
      className={`btn-press inline-flex items-center gap-2 rounded-lg ${sizes[size]} ${variants[variant]} shadow-md shadow-black/20 ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  );
}
