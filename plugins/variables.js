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

export function setTheme(theme) {
  if (theme) {
    try {
      //document.body.classList = `${theme}`
      localStorage.setItem('__theme', `${theme}`)
      location.reload()
    } catch (exception) { }
  }
}
