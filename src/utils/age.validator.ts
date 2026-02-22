export default function isLegalAge(dob: string): boolean {
  const [year, month, day] = dob.split('-').map(Number);
  const dateOfBirth = new Date(year, month - 1, day);

  if (isNaN(dateOfBirth.getTime())) return false;

  const today = new Date();
  const legalAge = 18;

  const eighteenYearsAgo = new Date(
    today.getFullYear() - legalAge,
    today.getMonth(),
    today.getDate(),
  );

  return dateOfBirth <= eighteenYearsAgo;
}
