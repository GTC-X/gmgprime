import Image from "next/image";
import Link from "next/link";
import CommonButton from "../../components/CommonButton";

const WhoWeAre = ({ page = "" }) => {
    return ( 
        <section className="bg-[#0a1942]">

     
        <div className="container py-16 xl:py-24">
            <div className="grid gap-8 xl:grid-cols-2 xl:items-center">
                <div>
                    <h1 className={`text-heading-1 mb-4 ${page=="homepage"?" text-white":"text-[#ED8946]"} font-normal capitalize`}>Who we are</h1>
                    <p className="text-neutral-200 text-sm lg:text-base mb-4">
                        GMG Prime is the liquidity partner built for start-up and small-to-medium brokerages. We pair institutional pricing with practical onboarding so you can launch fast, trade confidently and scale with clarity.
                    </p>
                    <p className="text-neutral-200 text-sm lg:text-base mb-4">
                        Authorised and regulated by the Financial Conduct Authority. FRN 744501.  Global Markets Group Limited, trading as gmgmarkets.co.uk. Company number 09493910.

                    </p>
                    <p className="text-neutral-200 text-sm lg:text-base mb-4">
                        Principal Office The Jellicoe, 5 Beaconsfield Street, King’s Cross, London, N1C 4EW
 Registered Office Green Park House, 15 Stratton Street, London, W1J 8LQ
 Telephone (+44) 0203 865 3306

                    </p>
                    <div className="mt-8">
<CommonButton>Register to Explore More</CommonButton>
                    </div>

                 
                </div>

                <div className="relative xl:justify-end">
                    <Image
                        src="/new/about.svg"
                        alt="Trading laptop"
                        width={640}
                        height={420}
                        className="w-full max-w-[560px] mx-auto"
                        priority
                    />
                </div>
            </div>
        </div>
           </section>
    )
}

export default WhoWeAre;