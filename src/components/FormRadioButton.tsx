import { Typography } from '@material-tailwind/react';
import RadioDefault from './RadioDefault';
import ButtonDefault from './ButtonDefault';
import { TaskIdInterface } from '../services/interfaces/TaskInterface';

export type FormRadioButtonPropsType = {
  task_id: TaskIdInterface[];
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | null;
};

export default function FormRadioButton({
  handleSubmit,
  task_id,
  value,
  handleChange
}: FormRadioButtonPropsType) {
  return (
    <form className="w-full" action="" onSubmit={handleSubmit}>
      <div className="mb-5 flex flex-col items-center">
        <Typography className="underline font-normal mb-5" variant="h6">
          Veuillez choisir une mission
        </Typography>
        <div>
          {task_id.map((task, index) => (
            <RadioDefault
              key={index}
              name="task"
              value={task.id}
              id={task.name}
              checked={value === task.id}
              onChange={handleChange}
              label={task.name}
              taskInfos={task}
            />
          ))}
        </div>
      </div>
      <ButtonDefault type="submit">Je participe</ButtonDefault>
    </form>
  );
}
