import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("section-x py-16 md:py-24", className)}>
      <div className="mx-auto max-w-content">{children}</div>
    </section>
  );
}
