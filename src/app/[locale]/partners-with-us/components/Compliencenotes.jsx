import SplitNote from "./SplitNotes";

export default function ComplianceNote() {
    return (
        <SplitNote
            reverse
            title="Compliance Notes"
            image="/partner/notes.jpg"
            bullets={[
                "Partner communications must be fair, clear and not misleading and approved where required.",
                "Do not promote to jurisdictions we do not serve or position us for retail use.",
                "All claims about pricing, execution or performance must use approved wording only.",
            ]}
            cta="See the policy"
        />
    );
}
