import { onChange } from "@material-tailwind/react/types/components/select";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export type SelectDefaultProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  value?: string;
  defaultValue?: string;
  register: UseFormRegister<T>;
  onChange?: onChange | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
  className?: string;
};
