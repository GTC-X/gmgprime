import Button from "./Button";
import SectionTitle from "./SectionTitle";

export default function CTA() {
    return (
        <section className="relative bg-navy-900/40">
            <div className="absolute inset-0 bg-dots opacity-20" />
            <div className="container relative py-14 text-center">
                <SectionTitle title="Ready to talk?" />
                <p className="mx-auto mt-2 max-w-xl text-[13px] leading-6 text-text-mute">
                    Bring your next business forward. Submit the short form and get onboarded quickly.
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                    <Button>Become a partner</Button>
                    <Button variant="ghost">Book a call</Button>
                </div>
            </div>
        </section>
    );
}
