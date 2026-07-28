import Link from "next/link";
import { cn } from "@/lib/cn";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
};

export function NavLink({ href, label, className, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-body font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
        className ?? "text-ink hover:text-leaf focus-visible:outline-leaf",
      )}
    >
      {label}
    </Link>
  );
}
