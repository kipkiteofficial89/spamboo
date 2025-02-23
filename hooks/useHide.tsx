export function useHide(text: string) {
  if (text.length <= 25) return text;
  text = text.slice(0, 25);

  return `${text}...`;
}
