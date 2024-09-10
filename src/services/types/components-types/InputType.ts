import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export type InputDefaultProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type: string;
  value?: string;
  defaultValue?: string;
  register: UseFormRegister<T>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
  className?: string;
};
