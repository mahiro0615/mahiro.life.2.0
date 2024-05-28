import { classNames } from "@/functions/class-names";

export function Content({
  className = "",
  wide = false,
  as = "div",
  children,
}) {
  const As = as;

  return (
    <As
      className={classNames(
        "mx-auto px-4 sm:px-6 lg:px-8",
        wide ? "max-w-7xl" : "max-w-3xl",
        className
      )}
    >
      {children}
    </As>
  );
}
