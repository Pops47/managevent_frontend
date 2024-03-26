import { Select } from "@material-tailwind/react";
import { FieldValues } from "react-hook-form";
import { SelectDefaultProps } from "../services/types/components-types/SelectType";

export function SelectDefault<T extends FieldValues>({
  label,
  name,
  register,
  onChange,
  errors,
  value,
  defaultValue,
  className,
}: SelectDefaultProps<T>) {
  return (
    <div className="w-72">
      <Select
        children={undefined}
        {...(register(name), { onChange: onChange })}
        label={label}
        name={name}
        value={value}
        defaultValue={defaultValue}
        className={className}
      >
        {/* Les options seront dans le .map ou children */}

        {/* {datas.map((data) => (
          <>
            <Option value={data} key={data.id}>
              {data.blabla}
            </Option>
          </>
        ))} */}
      </Select>
      {errors && <p className="text-red-600">{errors[name]?.message}</p>}
    </div>
  );
}
