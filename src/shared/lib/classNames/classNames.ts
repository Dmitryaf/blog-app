type ModsType = Record<string, string | boolean>;

const classNames = (
  mainClass: string,
  mods: ModsType = {},
  additionClasses: string[] = [],
): string => [
  mainClass,
  ...additionClasses.filter(Boolean),
  ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className),
].join(" ");

export default classNames;
