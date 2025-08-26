/**
 * Capitalizes the first letter of a given string using an arrow function.
 * @param {string} text - The input string to be capitalized.
 * @returns {string} - The capitalized string.
 */
export const toCapitalize = (text: string): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

/**
 * Converts a given string to snake_case.
 * @param {string} text - The input string to be converted.
 * @returns {string} - The snake_case converted string.
 */
export const toSnakeCase = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[\s-]+/g, '_')
    .replace(/[^a-z0-9_]/g, '')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '');
};

/**
 * Converts a given string to kebab-case.
 * @param {string} text - The input string to be converted.
 * @returns {string} - The kebab-case converted string.
 */
export const toKebabCase = (text: string): string => {
  return text
    .replace(/\.?([A-Z]+)/g, (match, group1) => {
      return '-' + group1.toLowerCase();
    }) // Convert camelCase or PascalCase to kebab-case
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
};

/**
 * Converts a given string to camelCase.
 * @param {string} text - The input string to be converted.
 * @returns {string} - The camelCase converted string.
 */
export const toCamelCase = (text: string): string => {
  return text.replace(/(?:^\w|[A-Z]|\b\w|\s+|_+)/g, (match, index) => {
    if (/[\s_]+/.test(match)) return '';
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

/**
 * Converts a given string to PascalCase.
 * @param {string} text - The input string to be converted.
 * @returns {string} - The PascalCase converted string.
 */
export const toPascalCase = (text: string): string => {
  return text.replace(/(?:^\w|[A-Z]|\b\w|\s+|_+)/g, (match) => {
    if (/[\s_]+/.test(match)) return '';
    return match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
  });
};
