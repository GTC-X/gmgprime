export default function Button({ children, href, size = "md", variant = "primary", className = "", ...props }) {
    const Comp = href ? "a" : "button";
    const sizes = { sm: "px-3.5 py-2 text-[12px]", md: "px-4.5 py-2.5 text-[13px]" };
    const variants = {
    primary: "bg-accent-400 hover:bg-accent-orangeDark text-[#fff]",
    ghost: "bg-[#265B9F] hover:bg-white/10 text-text-base text-white",
    };
    return (
        <Comp
            href={href}
            className={`rounded-lg shadow-md shadow-black/20 btn-press inline-flex items-center ${sizes[size]} ${variants[variant]} ${className}`}
            {...props}
        >{children}</Comp>
    );
}
