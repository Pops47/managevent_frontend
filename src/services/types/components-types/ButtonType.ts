import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export type Variant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "delete"
  | "disabled";

export type ButtonDefaultProps = ComponentPropsWithoutRef<"button"> &
  PropsWithChildren<{
    variant?: Variant;
  }>;
