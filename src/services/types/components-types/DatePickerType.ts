import { FieldErrors, UseFormSetError, UseFormSetValue } from "react-hook-form";
import { CreateEventFormType } from "../CreateEventPageType";

export type DatePIckerDefaultPropsType = {
  errors: FieldErrors<CreateEventFormType>;
  setError: UseFormSetError<CreateEventFormType>;
  setValue: UseFormSetValue<CreateEventFormType>;
  startDateWhenUpdate?: Date;
  endDateWhenUpdate?: Date;
};
