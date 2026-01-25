"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import type { ButtonProps } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { joinModalEvent } from "@/lib/events";

interface JoinTriggerProps extends Omit<ButtonProps, "asChild" | "onClick"> {
  href?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export default function JoinTrigger({ href = "/kayit-ol", onClick, ...props }: JoinTriggerProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.dispatchEvent(new CustomEvent(joinModalEvent));
    onClick?.(event);
  };

  return (
    <Button asChild {...props}>
      <Link href={href} onClick={handleClick}>
        {props.children}
      </Link>
    </Button>
  );
}
