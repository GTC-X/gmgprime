import Button from "./button";

export default function CTA() {
    return (
        <section className="relative bg-navy-900/40">
            <div className="absolute inset-0 bg-dots opacity-20" />
            <div className="container relative py-14 text-center">
                <h2 className="text-[40px] text-accent-400 font-semibold">What happens next</h2>
                <p className="mx-auto mt-2 max-w-2xl text-[16px] leading-6 text-text-mute">
                    Connect to our network, run a short parallel, then go live with confidence.
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                    <Button size="md">Book a consult</Button>
                    <Button size="md" variant="ghost">Get in touch</Button>
                </div>
            </div>
        </section>
    );
}
