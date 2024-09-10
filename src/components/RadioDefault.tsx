import { Radio } from '@material-tailwind/react';
import { DialogDetailTask } from './Dialog/DialogDetailTask';

export type TaskInfosPropsType = {
  name: string;
  description: string;
};

export type RadioDefaultPropsType = {
  label: string;
  id: string;
  taskInfos: TaskInfosPropsType;
  name: string;
  value: number;
  checked: boolean;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function RadioDefault({
  id,
  label,
  taskInfos,
  name,
  value,
  checked,
  onChange
}: RadioDefaultPropsType) {
  return (
    <div className="flex gap-10 justify-between ">
      <Radio
        id={id}
        name={name}
        label={label}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <DialogDetailTask taskInfos={taskInfos} />
    </div>
  );
}
