import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { createHeadingId } from "@/lib/content-shared";
import { cn } from "@/lib/utils";
import type { MDXComponents } from "mdx/types";

function getText(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getText).join("");
  if (typeof children === "object" && children && "props" in children) {
    return getText((children as { props?: { children?: ReactNode } }).props?.children);
  }
  return "";
}

export const mdxComponents: MDXComponents = {
  h2: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
    const text = getText(children);
    return (
      <h2 id={createHeadingId(text)} className="scroll-mt-24" {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
    const text = getText(children);
    return (
      <h3 id={createHeadingId(text)} className="scroll-mt-24" {...props}>
        {children}
      </h3>
    );
  },
  a: ({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const className = cn("text-brand hover:text-brand-dark", props.className);
    if (!href) {
      return <span className={className}>{children}</span>;
    }
    if (href.startsWith("/")) {
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
