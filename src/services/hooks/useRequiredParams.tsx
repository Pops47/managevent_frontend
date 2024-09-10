import { useParams } from "react-router-dom";

export const useRequiredParams = <T extends Record<string, unknown>>() =>
  useParams() as T;

// Hook permettant de typer plus facilement les params car sinon ils sont potentiellement undefined
