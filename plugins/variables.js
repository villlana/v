/**
 * ### isDefined
 * checks if a variable is defined
 * @param {string|any} varToCheck 
 * @returns boolean
 */
export function isDefined(varToCheck) {
  try {
    if (
      varToCheck === null ||
      varToCheck === '' ||
      varToCheck === undefined ||
      varToCheck.trim() === ''
    ) {
      return false;
    }
    return true;
  } catch (exception) {
    return false;
  }
}
