import type { ReactNode } from "react";
import Link from "next/link";
import { createHeadingId } from "@/lib/content";
import { cn } from "@/lib/utils";

function getText(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getText).join("");
  if (typeof children === "object" && children && "props" in children) {
    return getText((children as { props?: { children?: ReactNode } }).props?.children);
  }
  return "";
}

export const mdxComponents = {
  h2: ({ children, ...props }) => {
    const text = getText(children);
    return (
      <h2 id={createHeadingId(text)} className="scroll-mt-24" {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }) => {
    const text = getText(children);
    return (
      <h3 id={createHeadingId(text)} className="scroll-mt-24" {...props}>
        {children}
      </h3>
    );
  },
  a: ({ href, children, ...props }) => {
    const className = cn("text-brand hover:text-brand-dark", (props as any).className);
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
};
