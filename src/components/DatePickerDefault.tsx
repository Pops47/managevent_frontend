import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePIckerDefaultPropsType } from "../services/types/components-types/DatePickerType";

export default function DatePickerDefault({
  errors,
  setError,
  setValue,
  startDateWhenUpdate,
  endDateWhenUpdate,
}: DatePIckerDefaultPropsType) {
  const [dateRange, setDateRange] = useState<(Date | null)[]>([null, null]);

  useEffect(() => {
    if (startDateWhenUpdate && endDateWhenUpdate) {
      setDateRange([startDateWhenUpdate, endDateWhenUpdate]);
    }
  }, [endDateWhenUpdate, startDateWhenUpdate]);

  const [startDate, endDate] = dateRange;
  return (
    <>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setError("endDate", { message: "" });
          setDateRange(update);
          if (update[0] !== null && update[1] !== null) {
            setValue("startDate", update[0]);
            setValue("endDate", update[1]);
          }
        }}
        className="border-dp border-[1px] rounded-[7px] bg-darkBlueDP text-sm p-3 placeholder-white"
        placeholderText="Date de début - Date de fin"
        dateFormat="dd/MM/yyyy"
      />
      {errors && (
        <small className="text-red-600 ml-small">
          {errors["endDate"]?.message}
        </small>
      )}
    </>
  );
}
