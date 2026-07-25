import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="text-sm font-semibold tracking-widest text-secondary uppercase mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
    </Reveal>
  );
}
