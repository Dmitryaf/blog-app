type ModsType = Record<string, string | boolean>;

export const classNames = (
  mainClass: string,
  mods?: ModsType,
  additionClasses?: string[]
): string => {
  return [
    mainClass,
    ...additionClasses.filter(Boolean),
    Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};
