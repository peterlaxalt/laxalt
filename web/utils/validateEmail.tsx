/**
 *
 * @name validateEmail.tsx
 * @author Peter Laxalt
 * @description Checks if strings are emails
 * @example validateEmail("dsgsdg@dsgsg.com") outputs true, validateEmail("dsgs") outputs false
 *
 */
export function validateEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
}
