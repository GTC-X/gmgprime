"use client"
import { useState } from "react";
import SliderModal from "./SliderModal";

export default function CommonButton({ children, as = "button", href, className = "", size = "md", variant = "primary", ...rest }) {
    const Comp = href ? "a" : as;
    const sizes = {
        sm: "px-3.5 py-2 text-[12px]",
        md: "px-4.5 py-2.5 text-[16px]",
    };
    const variants = {
        primary: "bg-accent-400 hover:bg-accent-orangeDark text-[#fff]",
        ghost: "bg-[#265B9F] hover:bg-white/10 text-text-base text-white",
        outline: "border border-white/15 hover:border-white/25 text-text-base",
    };
    const [open, setOpen] = useState(false);
    const onClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Comp
                href={href}
                className={`btn-press cursor-pointer inline-flex items-center gap-2 rounded-lg ${sizes[size]} ${variants[variant]} shadow-md shadow-black/20 ${className}`}
                {...rest}
                onClick={() => {
                    if (variant === "primary") {
                        setOpen(true)
                    }
                }
                }
            >
                {children}
                <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                    <path
                        fill="currentColor"
                        d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                    />
                </svg>
            </Comp>
            <SliderModal isOpen={open} onClose={onClose} />
        </>
    );
}
