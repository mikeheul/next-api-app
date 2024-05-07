import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDateTime = (datetime?: string) => {
  if (!datetime) {
    return '';
  }

  const date = new Date(datetime);
  const formattedDate = new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);

  const parts = formattedDate.split('/');
  const formattedWithDash = parts.join('-');

  return formattedWithDash;
};
