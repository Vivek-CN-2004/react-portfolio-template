import SectionHeading from "../components/SectionHeading";
import CertificationCard from "../components/CertificationCard";
import { CERTIFICATIONS } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-background/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Certifications" title="Continued learning" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <CertificationCard key={cert.title} cert={cert} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
