function postedDay(created: Date): string {
  const today = Date.now();
  const day = new Date(created).getTime();

  const postedHours = Math.ceil(Math.abs(day - today) / (1000 * 3600));
  const postedDays = Math.ceil(Math.abs(day - today) / (1000 * 3600 * 24));
  const posted =
    postedHours < 24
      ? `Posted ${postedHours} hours ago`
      : `Posted ${postedDays} days ago`;

  return posted;
}

export default postedDay;
