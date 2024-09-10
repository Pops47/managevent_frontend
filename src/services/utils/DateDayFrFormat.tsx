// Transform Date in fr format
// ex : dimanche 28 juillet 2024

export function dayDate(date: string | Date) {
  return new Date(date).toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const transformIsoStringDateToDayAfter = (date: string): string => {
  let newDate = new Date(date);
  newDate.setDate(new Date(date).getDate() + 1);
  return newDate.toISOString();
};
