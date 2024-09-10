import { Textarea } from "@material-tailwind/react";
import { FieldValues } from "react-hook-form";
import { TextareaDefaultProps } from "../services/types/components-types/TextareaType";

export function TextareaDefault<T extends FieldValues>({
  label,
  name,
  register,
  errors,
  value,
  defaultValue,
  className,
}: TextareaDefaultProps<T>) {
  return (
    <>
      <Textarea
        {...register(name)}
        label={label}
        name={name}
        value={value}
        defaultValue={defaultValue}
        className={className}
      />
      {errors && (
        <small className="text-red-600 ml-small">{errors[name]?.message}</small>
      )}
    </>
  );
}
