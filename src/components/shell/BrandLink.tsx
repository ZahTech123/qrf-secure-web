import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BrandLinkProps {
  compact?: boolean;
  className?: string;
  onClick?: () => void;
}

export function BrandLink({
  className,
  compact = false,
  onClick,
}: BrandLinkProps) {
  return (
    <Link
      aria-label="QRF home"
      className={cn(
        "group inline-flex min-w-0 items-center gap-3 rounded-qrf-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan",
        className,
      )}
      onClick={onClick}
      to="/"
    >
      <span className="flex h-11 w-11 flex-none items-center justify-center overflow-hidden rounded-qrf-sm bg-white shadow-sm">
        <img
          alt=""
          aria-hidden="true"
          className="h-9 w-9 object-contain"
          height="64"
          src="/qrf-favicon-64x64.png"
          width="64"
        />
      </span>
      {!compact && (
        <span className="min-w-0">
          <strong className="block font-heading text-lg font-extrabold tracking-[-0.03em] text-white">
            QRF
          </strong>
        </span>
      )}
    </Link>
  );
}
