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
        "text-body font-semibold text-ink transition-colors hover:text-leaf",
        className,
      )}
    >
      {label}
    </Link>
  );
}
