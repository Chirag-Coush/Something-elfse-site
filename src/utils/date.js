export function formatDateParts(dateString) {
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) {
    return { month: "", day: dateString };
  }
  const month = d.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  const day = d.toLocaleDateString("en-US", { day: "numeric" });
  return { month, day };
}
