"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

/**
 * Device-aware email action. On touch devices (phones/tablets) a `mailto:` link
 * reliably opens the system mail app with a pre-filled draft, so we use that.
 * On desktop — where `mailto:` often has no handler and would open a blank tab
 * or do nothing — we copy the address to the clipboard with visible feedback.
 */
export function CopyEmailButton({ email, icon: Icon, iconSize = 15, className }) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    const isTouch =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isTouch) {
      window.location.href = `mailto:${email}`;
      return;
    }
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="relative">
      <MagneticButton
        as="button"
        type="button"
        onClick={handleClick}
        aria-label={`Email ${email}`}
        title={copied ? "Copied!" : email}
        className={className}
      >
        {copied ? <Check size={iconSize} /> : <Icon size={iconSize} />}
      </MagneticButton>
      {copied && (
        <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-line-visible bg-bg-elevated px-2 py-1 font-mono text-[11px] text-accent-bright shadow-lg">
          Copied!
        </span>
      )}
    </div>
  );
}
