import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  /** Associates the section with a visible heading for assistive tech. */
  labelledBy?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, labelledBy, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      tabIndex={id ? -1 : undefined}
      className={cn("section-x section-y", className)}
    >
      <div className="mx-auto max-w-content">{children}</div>
    </section>
  );
}
