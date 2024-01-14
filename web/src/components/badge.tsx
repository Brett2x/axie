import classnames from "classnames";
import * as React from "react";
import { unreachable } from "../utils/unreachable";

type BadgeElement = React.ElementRef<"span">;
type RootProps = React.ComponentPropsWithoutRef<"span">;

type Appearance = "cyan";
type Size = "1";

interface BadgeProps extends RootProps {
  appearance?: Appearance;
  size?: Size;
}

export const Badge = React.forwardRef<BadgeElement, Readonly<BadgeProps>>(
  (
    { appearance = "cyan", className, children, size = "1", ...props },
    forwardedRef,
  ) => {
    const classNames = classnames(
      getSize(size),
      getAppearance(appearance),
      "inline-flex items-center justify-center border font-medium",
      className,
    );

    return (
      <span className={classNames} ref={forwardedRef} {...props}>
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";

const getAppearance = (appearance: Appearance | undefined) => {
  switch (appearance) {
    case "cyan":
    case undefined:
      return "bg-purple-2 text-purple-300 border-purple-500";
    default:
      unreachable(appearance);
  }
};

const getSize = (size: Size | undefined) => {
  switch (size) {
    case "1":
    case undefined:
      return "text-xs rounded px-1.5 py-0.5";
    default:
      unreachable(size);
  }
};
