"use client"
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

/* ---------- Reusable Formik-aware Inputs ---------- */

function Label({ text }) {
    return <label className="block text-sm text-neutral-300 mb-2">{text}</label>;
}

function Error({ name, className = "" }) {
    return (
        <ErrorMessage
            name={name}
            component="div"
            className={`mt-1 text-[12px] text-red-400 ${className}`}
        />
    );
}

function Input({ label, name, type = "text" }) {
    return (
        <div>
            <Label text={label} />
            <Field
                name={name}
                type={type}
                className="w-full rounded-lg bg-transparent border border-neutral-400/50 text-white p-3 focus:ring-2 focus:ring-sky-blue-500 outline-none"
            />
            <Error name={name} />
        </div>
    );
}

function Select({ label, name, options }) {
    return (
        <div>
            <Label text={label} />
            <Field
                as="select"
                name={name}
                className="w-full rounded-lg bg-transparent border border-neutral-400/50 text-white p-3 focus:ring-2 focus:ring-sky-blue-500 outline-none"
            >
                <option value="">Select</option>
                {options.map((opt) => (
                    <option key={opt} value={opt} className="bg-primary-950">
                        {opt}
                    </option>
                ))}
            </Field>
            <Error name={name} />
        </div>
    );
}

function MultiCheckbox({ label, name, options }) {
    return (
        <div className="md:col-span-2">
            <Label text={label} />
            <FieldArray
                name={name}
                render={(arrayHelpers) => (
                    <div className="flex flex-wrap gap-4">
                        {options.map((opt) => (
                            <label key={opt} className="flex items-center gap-2 text-sm text-neutral-300">
                                <Field
                                    type="checkbox"
                                    name={name}
                                    value={opt}
                                    className="accent-sky-blue-500"
                                />
                                {opt}
                            </label>
                        ))}
                    </div>
                )}
            />
            <Error name={name} />
        </div>
    );
}



const ContactForm = () => {
    // ---------- Validation Schema (required fields) ----------
    const Schema = Yup.object({
        firstName: Yup.string().trim().required("First name is required"),
        lastName: Yup.string().trim().required("Last name is required"),
        workEmail: Yup.string()
            .trim()
            .email("Enter a valid work email")
            .required("Work email is required"),
        phone: Yup.string().trim().nullable(),
        company: Yup.string().trim().nullable(),
        legalEntity: Yup.string().trim().required("Legal entity name is required"),
        website: Yup.string()
            .trim()
            .url("Enter a valid URL (include http/https)")
            .nullable(),
        countryIncorp: Yup.string().trim().required("Country of incorporation is required"),
        operatingCountries: Yup.string().trim().nullable(),
        clientCategory: Yup.string().required("Select a client category"),
        platformAccess: Yup.string().required("Select a platform/access option"),
        goLiveDate: Yup.string().required("Target go-live date is required"),
        estMonthlyVolume: Yup.string().required("Please select an estimated volume"),
        instruments: Yup.array().of(Yup.string()).min(1, "Select at least one instrument"),
        pricingModel: Yup.string().required("Select a preferred pricing model"),
        notes: Yup.string().trim().nullable(),
        consent: Yup.boolean().oneOf([true], "You must agree to proceed"),
    });

    // ---------- Initial Values ----------
    const initialValues = {
        firstName: "",
        lastName: "",
        workEmail: "",
        phone: "",
        company: "",
        legalEntity: "",
        website: "",
        countryIncorp: "",
        operatingCountries: "",
        clientCategory: "",
        platformAccess: "",
        goLiveDate: "",
        estMonthlyVolume: "",
        instruments: [],
        pricingModel: "",
        notes: "",
        consent: false,
    };

    /* ---------- Submit handler (POST to /api/contact) ---------- */
    async function onSubmit(values, { setSubmitting, resetForm }) {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "Failed to submit");
            }

            // Success UX
            alert("Thanks! Your enquiry has been received. Our team will get back to you shortly.");
            resetForm();
        } catch (err) {
            console.error(err);
            alert("Sorry, something went wrong submitting your enquiry.");
        } finally {
            setSubmitting(false);
        }
    }
    return (
        <div className="overflow-hidden rounded-2xl p-px bg-gradient-to-b from-[#265B9F] via-primary-800 to-accent-400">
            <div className="h-full rounded-2xl bg-primary-950 bg-gradient-to-r from-sky-blue-400/25 via-primary-800 to-primary-800 p-8 xl:p-10">
                <h2 className="text-3xl font-normal mb-6">Enquiry Form</h2>
                <p className="text-neutral-400 mb-8">
                    Keep it short on first pass — we’ll collect docs at onboarding.
                </p>

                <Formik
                    initialValues={initialValues}
                    validationSchema={Schema}
                    onSubmit={onSubmit}
                    validateOnBlur
                    validateOnChange={false}
                >
                    {({ isSubmitting, values, setFieldValue }) => (
                        <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input name="firstName" label="First Name*" />
                            <Input name="lastName" label="Last Name*" />
                            <Input name="workEmail" label="Work Email*" type="email" />
                            <Input name="phone" label="Phone (incl. country code)" />

                            <Input name="company" label="Company" />
                            <Input name="legalEntity" label="Legal Entity Name*" />
                            <Input name="website" label="Website" />
                            <Input name="countryIncorp" label="Country of Incorporation*" />

                            <Input name="operatingCountries" label="Operating Countries" />

                            <Select
                                name="clientCategory"
                                label="Client Category*"
                                options={["Eligible Counterparty", "Professional", "Not sure"]}
                            />
                            <Select
                                name="platformAccess"
                                label="Platform and Access*"
                                options={["FIX 4.4", "MT5 via Bridge", "Both"]}
                            />
                            <Input name="goLiveDate" label="Target Go-Live Date*" type="date" />

                            <Select
                                name="estMonthlyVolume"
                                label="Estimated Monthly Volume (USD Notional)*"
                                options={["< 1B", "1–5B", "> 5B", "Not sure"]}
                            />

                            <MultiCheckbox
                                name="instruments"
                                label="Instruments of Interest*"
                                options={["FX", "Metals", "Indices", "Energies", "Single Stocks", "Crypto"]}
                            />

                            <Select
                                name="pricingModel"
                                label="Preferred Pricing Model*"
                                options={[
                                    "Commission plus raw",
                                    "Embedded mark-up",
                                    "Hybrid",
                                    "Not sure",
                                ]}
                            />

                            <div className="md:col-span-2">
                                <Label text="Notes for our engineers (optional)" />
                                <Field
                                    as="textarea"
                                    name="notes"
                                    rows={4}
                                    className="w-full rounded-lg bg-transparent border border-neutral-400/50 text-white p-3 focus:ring-2 focus:ring-sky-blue-500 outline-none"
                                />
                                <Error name="notes" />
                            </div>

                            <div className="md:col-span-2 flex items-start gap-3 mt-2">
                                <Field type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-sky-blue-500" />
                                <p className="text-sm text-neutral-400">
                                    I agree that GMG Prime may contact me about my enquiry and process my data in line with the{" "}
                                    <a href="/privacy-policy" className="text-accent-400 underline hover:text-accent-300">
                                        Privacy Policy
                                    </a>.
                                    <Error name="consent" className="block mt-1" />
                                </p>
                            </div>

                            <div className="md:col-span-2 pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-accent-400 px-8 py-3 rounded-lg text-primary-950 font-medium hover:opacity-90 transition disabled:opacity-60"
                                >
                                    {isSubmitting ? "Sending…" : "Send Enquiry"}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ContactForm;
