import * as React from "react";

/**
 * Minimal Radix-style Slot: merges its props onto a single child element so
 * `<Button asChild><a/></Button>` renders an anchor with the button styles.
 */
export const Slot = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }
>(({ children, ...props }, ref) => {
  if (!React.isValidElement(children)) return null;
  const child = children as React.ReactElement<Record<string, unknown>>;
  return React.cloneElement(child, {
    ...props,
    ...child.props,
    className: [props.className, child.props.className]
      .filter(Boolean)
      .join(" "),
    ref,
  });
});
Slot.displayName = "Slot";
